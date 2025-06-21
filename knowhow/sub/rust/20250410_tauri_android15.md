---
title:  Tauri on Android 15
layout: single
sidebar:
  nav: main
---
##	Pixel 9 / Android 15
```sh
$ tauri android dev
Detected Android emulators:
  [0] Pixel_9_API_35
  [1] Pixel_9_Pro_API_36
  Enter an index for a emulator above.
Emulator: 0
        Info Starting emulator Pixel_9_API_35
        Info Waiting for emulator to start...
        Info Waiting for emulator to start...
        Info Detected connected device: Pixel_9_API_35 (sdk_gphone64_x86_64) with target "x86_64-linux-android"
        Info Using 192.168.0.15 to access the development server.
        Info Replacing devUrl host with 192.168.0.15. If your frontend is not listening on that address, try configuring your development server to use the `TAURI_DEV_HOST` environment variable or 0.0.0.0 as host.
     Running BeforeDevCommand (`bun run dev`)
$ vite

  VITE v6.2.5  ready in 496 ms

  ➜  Network: http://192.168.0.15:1420/
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1.94s
        Info symlinking lib "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" in jniLibs dir "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\gen/android\\app/src/main/jniLibs/x86_64"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libandroid.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libdl.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "liblog.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libm.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libc.so"
        Info symlink at "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\gen/android\\app/src/main/jniLibs/arm64-v8a\\libtauri_app_android_lib.so" points to "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\aarch64-linux-android\\release\\libtauri_app_android_lib.so"
        Info symlink at "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\gen/android\\app/src/main/jniLibs/x86_64\\libtauri_app_android_lib.so" points to "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so"
$ tauri android android-studio-script --target "x86_64"
<==========---> 84% EXECUTING [5s]
> :app:rustBuildX86_64Debug                                       Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.57s
        Info symlinking lib "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" in jniLibs dir "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\gen/android\\app/src/main/jniLibs/x86_64"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libandroid.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libdl.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "liblog.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libm.so"
        Info "D:\\Repository\\Weekend_Programming\\rust\\tauri\\tauri-app-android\\src-tauri\\target\\x86_64-linux-android\\debug\\libtauri_app_android_lib.so" requires shared lib "libc.so"
Performing Streamed Install
Success
Starting: Intent { cmp=com.tauri_app_android.app/.MainActivity }
        Info Watching D:\Repository\Weekend_Programming\rust\tauri\tauri-app-android\src-tauri for changes...
--------- beginning of main
04-09 15:08:32.793  7562  7562 I app_android.app: Late-enabling -Xcheck:jni
04-09 15:08:33.277  7562  7562 I app_android.app: Using CollectorTypeCMC GC.
04-09 15:08:33.280  7562  7562 W app_android.app: Unexpected CPU variant for x86: x86_64.
04-09 15:08:33.280  7562  7562 W app_android.app: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, default
04-09 15:08:34.332  7562  7562 W ziparchive: Unable to open '/data/app/~~DwKELGQejwIM9DX9sr5ldA==/com.tauri_app_android.app-y-7UGasHTBaK3o-apbHwew==/base.dm': No such file or directory
04-09 15:08:34.332  7562  7562 W ziparchive: Unable to open '/data/app/~~DwKELGQejwIM9DX9sr5ldA==/com.tauri_app_android.app-y-7UGasHTBaK3o-apbHwew==/base.dm': No such file or directory
04-09 15:08:36.349  7562  7562 W app_android.app: Accessing hidden method Landroid/view/View;->computeFitSystemWindows(Landroid/graphics/Rect;Landroid/graphics/Rect;)Z (unsupported, reflection, allowed)
04-09 15:08:36.352  7562  7562 W app_android.app: Accessing hidden method Landroid/view/ViewGroup;->makeOptionalFitsSystemWindows()V (unsupported, reflection, allowed)
04-09 15:08:36.406  7562  7562 W HWUI    : Unknown dataspace 0
04-09 15:08:36.556  7562  7614 I EGL_emulation: Opening libGLESv1_CM_emulation.so
04-09 15:08:36.556  7562  7614 I EGL_emulation: Opening libGLESv2_emulation.so
04-09 15:08:36.603  7562  7614 W HWUI    : Failed to choose config with EGL_SWAP_BEHAVIOR_PRESERVED, retrying without...
04-09 15:08:36.605  7562  7614 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
04-09 15:08:36.809  7562  7614 I Gralloc4: mapper 4.x is not supported
04-09 15:08:36.890  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:08:36.896  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name color
04-09 15:08:37.009  7562  7562 I WebViewFactory: Loading com.google.android.webview version 124.0.6367.219 (code 636771938)
04-09 15:08:37.060  7562  7562 W ziparchive: Unable to open '/data/app/~~lXOGoUMwepYQA0NgsBNtSg==/com.google.android.trichromelibrary_636771938-46j8C7TxCsnbwwF9VkuWIw==/TrichromeLibrary.dm': No such file or directory
04-09 15:08:37.060  7562  7562 W ziparchive: Unable to open '/data/app/~~lXOGoUMwepYQA0NgsBNtSg==/com.google.android.trichromelibrary_636771938-46j8C7TxCsnbwwF9VkuWIw==/TrichromeLibrary.dm': No such file or directory
04-09 15:08:37.069  7562  7562 W app_android.app: Entry not found
04-09 15:08:37.137  7562  7562 I cr_WVCFactoryProvider: Loaded version=124.0.6367.219 minSdkVersion=29 isBundle=false multiprocess=true packageId=2
04-09 15:08:37.305  7562  7671 E chromium: [0409/150837.304900:ERROR:variations_seed_loader.cc(37)] Seed missing signature.
04-09 15:08:37.305  7562  7671 I chromium: [0409/150837.305428:INFO:variations_seed_loader.cc(66)] Failed to open file for reading.: No such file or directory (2)
04-09 15:08:37.313  7562  7634 I RustStdoutStderr: [0409/150837.304900:ERROR:variations_seed_loader.cc(37)] Seed missing signature.
04-09 15:08:37.313  7562  7634 I RustStdoutStderr: [0409/150837.305428:INFO:variations_seed_loader.cc(66)] Failed to open file for reading.: No such file or directory (2)
04-09 15:08:37.357  7562  7579 I app_android.app: Compiler allocated 5174KB to compile void android.view.ViewRootImpl.performTraversals()
04-09 15:08:37.405  7562  7562 I cr_LibraryLoader: Successfully loaded native library
04-09 15:08:37.407  7562  7562 I cr_CachingUmaRecorder: Flushed 6 samples from 6 histograms, 0 samples were dropped.
04-09 15:08:37.421  7562  7562 I cr_CombinedPProvider: #registerProvider() provider:WV.V7@2bdeb6e isPolicyCacheEnabled:false policyProvidersSize:0
04-09 15:08:37.461  7562  7562 I cr_PolicyProvider: #setManagerAndSource() 0
04-09 15:08:37.632  7562  7562 I cr_CombinedPProvider: #linkNativeInternal() 1
04-09 15:08:37.640  7562  7562 I cr_AppResProvider: #getApplicationRestrictionsFromUserManager() Bundle[EMPTY_PARCEL]
04-09 15:08:37.641  7562  7562 I cr_PolicyProvider: #notifySettingsAvailable() 0
04-09 15:08:37.642  7562  7562 I cr_CombinedPProvider: #onSettingsAvailable() 0
04-09 15:08:37.642  7562  7562 I cr_CombinedPProvider: #flushPolicies()
04-09 15:08:37.787  7562  7688 W chromium: [WARNING:dns_config_service_android.cc(81)] Failed to read DnsConfig.
04-09 15:08:37.787  7562  7634 I RustStdoutStderr: [WARNING:dns_config_service_android.cc(81)] Failed to read DnsConfig.
04-09 15:08:38.167  7562  7679 E chromium: [ERROR:simple_version_upgrade.cc(152)] Failed to write a new fake index.
04-09 15:08:38.183  7562  7634 I RustStdoutStderr: [ERROR:simple_version_upgrade.cc(152)] Failed to write a new fake index.
04-09 15:08:39.229  7562  7690 W cr_media: BLUETOOTH_CONNECT permission is missing.
04-09 15:08:39.243  7562  7690 W cr_media: registerBluetoothIntentsIfNeeded: Requires BLUETOOTH permission
04-09 15:08:39.705  7562  7664 I HWUI    : Davey! duration=746ms; Flags=0, FrameTimelineVsyncId=25526, IntendedVsync=502966466622, Vsync=503366466606, InputEventId=0, HandleInputStart=503400779100, AnimationStart=503400967900, PerformTraversalsStart=503401933600, DrawStart=503409606500, FrameDeadline=503149799948, FrameInterval=503382716000, FrameStartTime=16666666, SyncQueued=503509585500, SyncStart=503515535100, IssueDrawCommandsStart=503515598200, SwapBuffers=503705422800, FrameCompleted=503718629500, DequeueBufferDuration=273600, QueueBufferDuration=270700, GpuCompleted=503717147500, SwapBuffersCompleted=503718629500, DisplayPresentTime=0, CommandSubmissionCompleted=503705422800,
04-09 15:08:42.827  7562  7562 I Tauri/Console: File: http://tauri.localhost/node_modules/.vite/deps/react-dom_client.js?v=efd743db - Line 17987 - Msg: %cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools font-weight:bold
04-09 15:08:43.481  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name inPosition
04-09 15:08:43.481  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name inColor
04-09 15:08:43.482  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name inTextureCoords
04-09 15:08:43.513  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name inPosition
04-09 15:08:43.513  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name inColor
04-09 15:08:43.513  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name inCircleEdge
04-09 15:08:43.521  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:08:43.521  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name localCoord
04-09 15:08:43.536  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:08:43.536  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name localCoord
04-09 15:08:43.551  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:08:43.551  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name color
04-09 15:08:43.563  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name inPosition
04-09 15:08:43.563  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name inColor
04-09 15:08:43.563  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name inCircleEdge
04-09 15:08:43.574  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:08:43.575  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name localCoord
04-09 15:08:43.581  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:08:43.581  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name color
04-09 15:08:43.581  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name localCoord
04-09 15:08:43.604  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name resolveLevel_and_idx
04-09 15:08:43.604  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name p01
04-09 15:08:43.604  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name p23
04-09 15:08:43.604  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 3 name fanPointAttrib
04-09 15:08:43.614  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:08:43.614  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name color
04-09 15:08:43.623  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name fillBounds
04-09 15:08:43.627  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name affineMatrix
04-09 15:08:43.627  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name translate
04-09 15:08:43.627  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 3 name color
04-09 15:08:43.627  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 4 name locations
04-09 15:08:43.684  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name fillBounds
04-09 15:08:43.684  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name affineMatrix
04-09 15:08:43.684  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name translate
04-09 15:08:43.684  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 3 name color
04-09 15:08:43.684  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 4 name locations
04-09 15:08:43.707  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name inputPoint
04-09 15:08:43.718  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name resolveLevel_and_idx
04-09 15:08:43.719  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name p01
04-09 15:08:43.719  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name p23
04-09 15:08:43.731  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name inPosition
04-09 15:08:43.731  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name inColor
04-09 15:08:43.732  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name inQuadEdge
04-09 15:08:43.748  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name radii_selector
04-09 15:08:43.751  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name corner_and_radius_outsets
04-09 15:08:43.753  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name aa_bloat_and_coverage
04-09 15:08:43.753  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 3 name radii_x
04-09 15:08:43.753  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 4 name radii_y
04-09 15:08:43.753  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 5 name skew
04-09 15:08:43.753  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 6 name translate_and_localrotate
04-09 15:08:43.754  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 7 name color
04-09 15:08:43.807  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name fillBounds
04-09 15:08:43.807  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name color
04-09 15:08:43.807  7562  7634 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name locations
04-09 15:08:44.136  7562  7580 I app_android.app: Background concurrent mark compact GC freed 3953KB AllocSpace bytes, 12(1324KB) LOS objects, 49% free, 4289KB/8578KB, paused 744us,6.912ms total 663.640ms
04-09 15:08:44.148  7562  7582 W app_android.app: ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~6i62tNaDOAWnh1_tmRRL0w==/com.google.android.webview-6e4eGW2BM98V7ZWm-mTVRA==/WebViewGoogle.apk' with 2 weak references
```
