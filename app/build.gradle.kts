import org.jetbrains.kotlin.config.KotlinCompilerVersion
import java.util.Properties
import java.io.FileInputStream

plugins {
    id("com.android.application")
    id("com.google.gms.google-services")
    id("com.google.firebase.crashlytics")
    id("com.apollographql.apollo3") version "3.2.1"
    id("kotlin-parcelize")
    kotlin("android")
    kotlin("kapt")
    kotlin("plugin.serialization") version "1.8.21"
}

val keystoreProperties = Properties()
rootProject.file("keystore.properties").let {
    if (it.exists()) {
        keystoreProperties.load(FileInputStream(it))
    }
}

android {
    compileSdk = 34
    defaultConfig {
        applicationId = "com.ismartcoding.plain"
        minSdk = 28
        targetSdk = 34

        val abiFilterList = if (hasProperty("abiFilters")) property("abiFilters").toString().split(';') else listOf()
        val singleAbiNum = when (abiFilterList.takeIf { it.size == 1 }?.first()) {
            "armeabi-v7a" -> 2
            "arm64-v8a" -> 1
            else -> 0
        }

        val vCode = 101
        versionCode = vCode - singleAbiNum
        versionName = "1.1.13"

        ndk {
            if (abiFilterList.isNotEmpty()) {
                abiFilters += abiFilterList
            }
        }
    }

    signingConfigs {
        create("release") {
            keyAlias = keystoreProperties.getProperty("keyAlias")
            keyPassword = keystoreProperties.getProperty("keyPassword")
            storeFile = file(keystoreProperties.getProperty("storeFile", "release.jks"))
            storePassword = keystoreProperties.getProperty("storePassword")
        }
    }

    buildTypes {
        debug {
            applicationIdSuffix = ".debug"
            resValue("string", "app_name", "PlainApp-Debug")
            isShrinkResources = false
            isMinifyEnabled = false
            ndk {
                debugSymbolLevel = "SYMBOL_TABLE"
            }
        }
        release {
            signingConfig = signingConfigs.getByName("release")
            isShrinkResources = false
            isMinifyEnabled = false
            ndk {
                debugSymbolLevel = "SYMBOL_TABLE"
            }
            setProguardFiles(listOf(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro"))
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
//        isCoreLibraryDesugaringEnabled = true
    }

    buildFeatures {
        buildConfig = true
        viewBinding = true
        dataBinding = true
        compose = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = "1.4.7"
    }

    packaging {
        jniLibs {
            useLegacyPackaging = true
            excludes += listOf("META-INF/*")
        }
        resources {
            excludes += listOf("META-INF/*")
        }
    }
    namespace = "com.ismartcoding.plain"

    apollo {
        packageName.set("com.ismartcoding.plain")
        mapScalar("Time", "java.util.Date")
    }

    tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions {
            jvmTarget = JavaVersion.VERSION_17.toString()
        }
    }
}

dependencies {
    val room = "2.5.1"
    val apollo = "3.2.1"
    val kgraphql = "0.18.1"
    val ktor = "2.1.0" // don't upgrade, TLS handshake failed
    val compose = "1.6.0-alpha02"

    implementation(platform("androidx.compose:compose-bom:2023.06.01"))

    implementation("com.caverock:androidsvg-aar:1.4")

//    implementation("androidx.activity:activity-compose:1.7.2")
    implementation("androidx.compose.runtime:runtime:$compose")
    implementation("androidx.compose.ui:ui:$compose")
    implementation("androidx.compose.foundation:foundation:$compose")
    implementation("androidx.compose.foundation:foundation-layout:$compose")
    implementation("androidx.compose.material3:material3:1.2.0-alpha04")
    implementation("androidx.compose.material:material-icons-extended:$compose")

    implementation("androidx.constraintlayout:constraintlayout-compose:1.1.0-alpha11")

    // https://github.com/google/accompanist/releases
    implementation("com.google.accompanist:accompanist-systemuicontroller:0.31.6-rc")

    // https://developer.android.com/jetpack/androidx/releases/navigation
    implementation("androidx.navigation:navigation-compose:2.6.0")

    releaseImplementation(platform("com.google.firebase:firebase-bom:31.2.1"))
    releaseImplementation("com.google.firebase:firebase-crashlytics-ktx:18.4.0")

    implementation("com.apollographql.apollo3:apollo-runtime:$apollo")
    implementation("com.apollographql.apollo3:apollo-normalized-cache:$apollo")
    implementation("com.apollographql.apollo3:apollo-normalized-cache-sqlite:$apollo")
    implementation("com.apollographql.apollo3:apollo-adapters:$apollo")

    implementation("androidx.viewpager2:viewpager2:1.0.0")
    implementation("androidx.paging:paging-runtime-ktx:3.2.0")
    implementation("androidx.preference:preference-ktx:1.2.0")

    implementation("androidx.core:core-splashscreen:1.0.1")
    implementation("com.github.bmoliveira:snake-yaml:v1.18-android")

    // CameraX
    implementation("androidx.camera:camera-camera2:1.3.0-beta02")
    implementation("androidx.camera:camera-lifecycle:1.3.0-beta02")
    implementation("androidx.camera:camera-view:1.3.0-beta02")

    implementation("io.ktor:ktor-server-core:$ktor")
    implementation("io.ktor:ktor-server-netty:$ktor")
    implementation("io.ktor:ktor-server-websockets:$ktor")
    implementation("io.ktor:ktor-server-compression:$ktor")
    implementation("io.ktor:ktor-server-content-negotiation:$ktor")
    implementation("io.ktor:ktor-network-tls-certificates:$ktor")
    implementation("io.ktor:ktor-serialization-kotlinx-json:$ktor")
    implementation("io.ktor:ktor-server-caching-headers:$ktor")
    implementation("io.ktor:ktor-server-cors:$ktor")
    implementation("io.ktor:ktor-server-forwarded-header:$ktor")
    implementation("io.ktor:ktor-server-partial-content:$ktor")
    implementation("io.ktor:ktor-server-auto-head-response:$ktor")
    implementation("io.ktor:ktor-server-conditional-headers:$ktor")

    implementation("com.apurebase:kgraphql:$kgraphql")
    implementation("com.apurebase:kgraphql-ktor:$kgraphql")

    // https://developer.android.com/jetpack/androidx/releases/room
    implementation("androidx.room:room-common:$room")
    kapt("androidx.room:room-compiler:$room")
    implementation("androidx.room:room-ktx:$room")
    implementation("com.github.skydoves:balloon:1.5.2")

    implementation("com.aallam.openai:openai-client:3.2.0")

    implementation("com.github.jenly1314:zxing-lite:2.4.0")
    // Feed
    implementation("com.rometools:rome:2.1.0")

    implementation("androidx.work:work-runtime-ktx:2.8.1")


    // https://developer.android.com/jetpack/androidx/releases/datastore
    implementation("androidx.datastore:datastore-preferences:1.0.0")

//    implementation("org.eclipse.jgit:org.eclipse.jgit:6.1.0.202203080745-r") // TODO: git support
    implementation("org.zeroturnaround:zt-zip:1.15")
    implementation(project(":lib"))
    debugImplementation("com.squareup.leakcanary:leakcanary-android:2.9.1")
    implementation(kotlin("stdlib", KotlinCompilerVersion.VERSION))
}
