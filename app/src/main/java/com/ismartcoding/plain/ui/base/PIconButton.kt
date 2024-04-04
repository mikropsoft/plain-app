package com.ismartcoding.plain.ui.base

import android.view.HapticFeedbackConstants
import android.view.SoundEffectConstants
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.unit.dp

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PIconButton(
    modifier: Modifier = Modifier,
    containerModifier: Modifier = Modifier,
    icon: Any,
    contentDescription: String?,
    tint: Color = LocalContentColor.current,
    showBadge: Boolean = false,
    isHaptic: Boolean? = false,
    isSound: Boolean? = false,
    enabled: Boolean = true,
    onClick: () -> Unit = {},
) {
    val view = LocalView.current

    IconButton(
        modifier = containerModifier,
        enabled = enabled,
        colors = IconButtonDefaults.iconButtonColors().copy(
            contentColor = tint,
            disabledContentColor = tint.copy(alpha = 0.38f)
        ),
        onClick = {
            if (isHaptic == true) view.performHapticFeedback(HapticFeedbackConstants.KEYBOARD_TAP)
            if (isSound == true) view.playSoundEffect(SoundEffectConstants.CLICK)
            onClick()
        },
    ) {
        if (showBadge) {
            BadgedBox(
                badge = {
                    Badge(
                        modifier = Modifier
                            .size(8.dp)
                            .offset(x = (1).dp, y = (-4).dp)
                            .clip(CircleShape),
                        containerColor = MaterialTheme.colorScheme.error,
                        contentColor = MaterialTheme.colorScheme.onError,
                    )
                }
            ) {
                PIcon(
                    modifier = modifier,
                    icon = icon,
                    contentDescription = contentDescription,
                )
            }
        } else {
            PIcon(
                modifier = modifier,
                icon = icon,
                contentDescription = contentDescription,
            )
        }
    }
}
