package com.ismartcoding.plain.ui.audio

import android.os.Bundle
import android.view.View
import android.widget.SeekBar
import com.ismartcoding.lib.channel.receiveEvent
import com.ismartcoding.lib.helpers.FormatHelper
import com.ismartcoding.plain.features.audio.AudioPlayer
import com.ismartcoding.plain.LocalStorage
import com.ismartcoding.plain.R
import com.ismartcoding.plain.features.AudioActionEvent
import com.ismartcoding.plain.features.ClearAudioPlaylistEvent
import com.ismartcoding.plain.databinding.DialogAudioPlayerBinding
import com.ismartcoding.plain.features.audio.*
import com.ismartcoding.plain.services.AudioPlayerService
import com.ismartcoding.plain.ui.BaseBottomSheetDialog
import com.ismartcoding.plain.ui.extensions.setSafeClick

class AudioPlayerDialog() : BaseBottomSheetDialog<DialogAudioPlayerBinding>() {

    private lateinit var seekBarUpdateRunnable: Runnable
    private val seekBarUpdateDelayMillis: Long = 1000

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        initEvents()
        initSeekBarUpdateRunnable()
        setListen()
    }

    private fun initEvents() {
        receiveEvent<AudioActionEvent> { event ->
            when (event.action) {
                AudioAction.PLAY, AudioAction.PAUSE -> {
                    updateUI()
                }
                else -> {}
            }
        }
        receiveEvent<ClearAudioPlaylistEvent> {
            dismissNow()
        }
    }

    override fun onResume() {
        super.onResume()
        updateUI()
    }

    override fun onPause() {
        super.onPause()
        binding.seekBar.removeCallbacks(seekBarUpdateRunnable)
    }

    private fun initSeekBarUpdateRunnable() {
        seekBarUpdateRunnable = Runnable {
            if (view == null) {
                return@Runnable
            }
            binding.seekBar.progress = binding.seekBar.progress + 1
            binding.seekBar.postDelayed(seekBarUpdateRunnable, seekBarUpdateDelayMillis)
        }
    }

    private fun updateUI() {
        binding.seekBar.removeCallbacks(seekBarUpdateRunnable)
        val process = AudioPlayer.instance.getPlayerProgress()
        binding.process.text = FormatHelper.formatDuration(process.toLong())
        LocalStorage.audioPlaying?.let { audio ->
            binding.seekBar.max = audio.duration.toInt()
            binding.seekBar.progress = process
            binding.duration.text = FormatHelper.formatDuration(audio.duration)
            binding.title.text = audio.title
            binding.title.isSelected = true // need for marquee
            binding.artist.text = audio.artist
        }

        val isPlaying = AudioPlayer.instance.isPlaying()
        if (isPlaying) {
            binding.seekBar.postDelayed(seekBarUpdateRunnable, seekBarUpdateDelayMillis)
        }
        binding.play.setImageResource(if (isPlaying) R.drawable.ic_pause else R.drawable.ic_play)
        updatePlayMode()
    }

    private fun updatePlayMode() {
        binding.repeat.setImageResource(
            when (LocalStorage.audioPlayMode) {
                MediaPlayMode.REPEAT -> R.drawable.ic_repeat
                MediaPlayMode.REPEAT_ONE -> R.drawable.ic_repeat_one
                MediaPlayMode.SHUFFLE -> R.drawable.ic_shuffle
            }
        )
    }

    private fun setListen() {
        binding.repeat.setSafeClick {
            when (LocalStorage.audioPlayMode) {
                MediaPlayMode.REPEAT -> LocalStorage.audioPlayMode = MediaPlayMode.REPEAT_ONE
                MediaPlayMode.REPEAT_ONE -> LocalStorage.audioPlayMode = MediaPlayMode.SHUFFLE
                MediaPlayMode.SHUFFLE -> LocalStorage.audioPlayMode = MediaPlayMode.REPEAT
            }
            updatePlayMode()
        }

        binding.seekBar.setOnSeekBarChangeListener(object : SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(s: SeekBar, progress: Int, fromUser: Boolean) {
                if (fromUser) {
                    s.removeCallbacks(seekBarUpdateRunnable)
                }

                binding.process.text = FormatHelper.formatDuration(s.progress.toLong())
            }

            override fun onStartTrackingTouch(s: SeekBar) = Unit

            override fun onStopTrackingTouch(s: SeekBar) {
                s.removeCallbacks(seekBarUpdateRunnable)
                binding.process.text = FormatHelper.formatDuration(s.progress.toLong())
                AudioPlayerService.seek(requireContext(), s.progress)
                s.postDelayed(seekBarUpdateRunnable, seekBarUpdateDelayMillis)
            }
        })

        binding.skipPrev.setSafeClick {
            AudioPlayerService.skipPrevious(requireContext())
        }

        binding.play.setSafeClick {
            if (AudioPlayer.instance.isPlaying()) {
                AudioPlayerService.pause(requireContext())
            } else {
                AudioPlayerService.play(requireContext())
            }
        }

        binding.skipNext.setSafeClick {
            AudioPlayerService.skipNext(requireContext())
        }

        binding.queue.setSafeClick {
            AudioPlaylistDialog().show()
        }

        binding.snooze.setSafeClick {
            SleepTimerDialog().show()
        }
    }
}