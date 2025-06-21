---
layout: single
sidebar:
  nav: main
---
#	Tauri on Android
##	Pixel 9 Pro / Android 16
```sh
$ tauri android dev
Detected Android emulators:
  [0] Pixel_9_API_35
  [1] Pixel_9_Pro_API_36
  Enter an index for a emulator above.
Emulator: 1
        Info Starting emulator Pixel_9_Pro_API_36
        Info Waiting for emulator to start...
        Info Waiting for emulator to start...
        Info Waiting for emulator to start...
        Info Waiting for emulator to start... (maybe the emulator is unauthorized or offline, run `adb devices` to check)
        Info Detected connected device: Pixel_9_Pro_API_36 (sdk_gphone64_x86_64) with target "x86_64-linux-android"
        Info Using 192.168.0.15 to access the development server.
        Info Replacing devUrl host with 192.168.0.15. If your frontend is not listening on that address, try configuring your development server to use the `TAURI_DEV_HOST` environment variable or 0.0.0.0 as host.
     Running BeforeDevCommand (`bun run dev`)
$ vite

  VITE v6.2.5  ready in 568 ms

  ➜  Network: http://192.168.0.15:1420/
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1.66s
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
> :app:rustBuildX86_64Debug                                       Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.33s
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
04-09 15:04:36.518 17042 17042 I app_android.app: Late-enabling -Xcheck:jni
04-09 15:04:37.259 17042 17042 I app_android.app: Using CollectorTypeCMC GC.
04-09 15:04:37.277 17042 17042 W app_android.app: Unexpected CPU variant for x86: x86_64.
04-09 15:04:37.277 17042 17042 W app_android.app: Known variants: atom, sandybridge, silvermont, goldmont, goldmont-plus, goldmont-without-sha-xsaves, tremont, kabylake, alderlake, default
04-09 15:04:38.898 17042 17042 I app_android.app: AssetManager2(0x70e2e47d07b8) locale list changing from [] to [en-US]
04-09 15:04:38.989 17042 17042 I app_android.app: AssetManager2(0x70e2e47cd298) locale list changing from [] to [en-US]
04-09 15:04:39.461 17042 17042 I app_android.app: AssetManager2(0x70e2e47d26f8) locale list changing from [] to [en-US]
04-09 15:04:39.673 17042 17042 I app_android.app: hiddenapi: Accessing hidden method Landroid/view/View;->computeFitSystemWindows(Landroid/graphics/Rect;Landroid/graphics/Rect;)Z (runtime_flags=0, domain=platform, api=unsupported) from Landroidx/appcompat/widget/ViewUtils; (domain=app) using reflection: allowed
04-09 15:04:39.674 17042 17042 I app_android.app: hiddenapi: Accessing hidden method Landroid/view/ViewGroup;->makeOptionalFitsSystemWindows()V (runtime_flags=0, domain=platform, api=unsupported) from Landroidx/appcompat/widget/ViewUtils; (domain=app) using reflection: allowed
04-09 15:04:39.765 17042 17042 W HWUI    : Unknown dataspace 0
04-09 15:04:39.844 17042 17042 I app_android.app: AssetManager2(0x70e2e47d2d38) locale list changing from [] to [en-US]
04-09 15:04:39.845 17042 17042 I WebViewFactory: Loading com.google.android.webview version 128.0.6613.88 (code 661308838)
04-09 15:04:39.847 17042 17042 I app_android.app: AssetManager2(0x70e2e47d6bb8) locale list changing from [] to [en-US]
04-09 15:04:39.848 17042 17042 I app_android.app: AssetManager2(0x70e2e47d8e18) locale list changing from [] to [en-US]
04-09 15:04:39.851 17042 17042 I app_android.app: AssetManager2(0x70e2e47d9db8) locale list changing from [] to [en-US]
04-09 15:04:39.854 17042 17042 I app_android.app: AssetManager2(0x70e2e47d4f98) locale list changing from [] to [en-US]
04-09 15:04:39.858 17042 17042 W app_android.app: Failed to find entry 'classes.dex': Entry not found
04-09 15:04:40.093 17042 17042 I cr_WVCFactoryProvider: version=128.0.6613.88 (661308838) minSdkVersion=29 isBundle=true multiprocess=true packageId=2
04-09 15:04:40.130 17042 17082 E chromium: [0409/150440.127941:ERROR:variations_seed_loader.cc(39)] Seed missing signature.
04-09 15:04:40.130 17042 17075 I RustStdoutStderr: [0409/150440.127941:ERROR:variations_seed_loader.cc(39)] Seed missing signature.
04-09 15:04:40.133 17042 17082 I chromium: [0409/150440.131678:INFO:variations_seed_loader.cc(68)] Failed to open file for reading.: No such file or directory (2)
04-09 15:04:40.133 17042 17075 I RustStdoutStderr: [0409/150440.131678:INFO:variations_seed_loader.cc(68)] Failed to open file for reading.: No such file or directory (2)
04-09 15:04:40.147 17042 17042 I cr_LibraryLoader: Successfully loaded native library
04-09 15:04:40.149 17042 17042 I cr_CachingUmaRecorder: Flushed 6 samples from 6 histograms, 0 samples were dropped.
04-09 15:04:40.169 17042 17042 I cr_CombinedPProvider: #registerProvider() provider:WV.o8@9cd969f isPolicyCacheEnabled:false policyProvidersSize:0
04-09 15:04:40.180 17042 17084 I app_android.app: AssetManager2(0x70e2e47d4c78) locale list changing from [] to [en-US]
04-09 15:04:40.197 17042 17042 I cr_PolicyProvider: #setManagerAndSource() 0
04-09 15:04:40.280 17042 17042 I cr_CombinedPProvider: #linkNativeInternal() 1
04-09 15:04:40.282 17042 17042 I cr_AppResProvider: #getApplicationRestrictionsFromUserManager() Bundle[EMPTY_PARCEL]
04-09 15:04:40.288 17042 17042 I cr_PolicyProvider: #notifySettingsAvailable() 0
04-09 15:04:40.288 17042 17042 I cr_CombinedPProvider: #onSettingsAvailable() 0
04-09 15:04:40.289 17042 17042 I cr_CombinedPProvider: #flushPolicies()
04-09 15:04:40.366 17042 17042 I app_android.app: AssetManager2(0x70e2e47d8af8) locale list changing from [] to [en-US]
04-09 15:04:40.369 17042 17042 I app_android.app: AssetManager2(0x70e2e47d87d8) locale list changing from [] to [en-US]
04-09 15:04:40.397 17042 17088 W chromium: [WARNING:dns_config_service_android.cc(81)] Failed to read DnsConfig.
04-09 15:04:40.398 17042 17075 I RustStdoutStderr: [WARNING:dns_config_service_android.cc(81)] Failed to read DnsConfig.
04-09 15:04:40.783 17042 17042 I Choreographer: Skipped 60 frames!  The application may be doing too much work on its main thread.
04-09 15:04:40.816 17042 17067 I EGL_emulation: Opening libGLESv1_CM_emulation.so
04-09 15:04:40.817 17042 17067 I EGL_emulation: Opening libGLESv2_emulation.so
04-09 15:04:40.986 17042 17067 W HWUI    : Failed to choose config with EGL_SWAP_BEHAVIOR_PRESERVED, retrying without...
04-09 15:04:40.987 17042 17067 W HWUI    : Failed to initialize 101010-2 format, error = EGL_SUCCESS
04-09 15:04:41.308 17042 17075 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:04:41.311 17042 17075 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name color
04-09 15:04:41.391 17042 17062 I HWUI    : Davey! duration=1597ms; Flags=1, FrameTimelineVsyncId=371352, IntendedVsync=12836890257900, Vsync=12837890257860, InputEventId=0, HandleInputStart=12837894004420, AnimationStart=12837894040120, PerformTraversalsStart=12837894104020, DrawStart=12838218606420, FrameDeadline=12836906924566, FrameStartTime=12837892032020, FrameInterval=16666666, WorkloadTarget=16666666, SyncQueued=12838370455520, SyncStart=12838371353920, IssueDrawCommandsStart=12838372523320, SwapBuffers=12838434813420, FrameCompleted=12838488269020, DequeueBufferDuration=30500, QueueBufferDuration=821300, GpuCompleted=12838488269020, SwapBuffersCompleted=12838440367920, DisplayPresentTime=0, CommandSubmissionCompleted=12838434813420,
04-09 15:04:41.629 17042 17094 W cr_media: BLUETOOTH_CONNECT permission is missing.
04-09 15:04:41.650 17042 17094 W cr_media: getBluetoothAdapter() requires BLUETOOTH permission
04-09 15:04:41.651 17042 17094 W cr_media: registerBluetoothIntentsIfNeeded: Requires BLUETOOTH permission
04-09 15:04:41.688 17042 17042 I Choreographer: Skipped 53 frames!  The application may be doing too much work on its main thread.
04-09 15:04:41.871 17042 17061 I HWUI    : Davey! duration=1068ms; Flags=0, FrameTimelineVsyncId=371383, IntendedVsync=12837906924526, Vsync=12838790257824, InputEventId=0, HandleInputStart=12838801779220, AnimationStart=12838801811120, PerformTraversalsStart=12838817448720, DrawStart=12838826514620, FrameDeadline=12838506924502, FrameStartTime=12838797572620, FrameInterval=16666666, WorkloadTarget=16666666, SyncQueued=12838830376520, SyncStart=12838830444620, IssueDrawCommandsStart=12838832911920, SwapBuffers=12838966919920, FrameCompleted=12838975011320, DequeueBufferDuration=21000, QueueBufferDuration=518800, GpuCompleted=12838975011320, SwapBuffersCompleted=12838968397720, DisplayPresentTime=0, CommandSubmissionCompleted=12838966919920,
04-09 15:04:41.904 17042 17042 I ImeTracker: com.tauri_app_android.app:58049dcd: onCancelled at PHASE_CLIENT_ALREADY_HIDDEN
04-09 15:04:42.561 17042 17056 I app_android.app: Compiler allocated 5106KB to compile void android.view.ViewRootImpl.performTraversals()
04-09 15:04:42.616 17042 17101 W VideoCapabilities: Unsupported mime video/apv
04-09 15:04:42.616 17042 17101 W VideoCapabilities: Unsupported mime video/apv
04-09 15:04:42.675 17042 17101 W VideoCapabilities: Unsupported mime video/apv
04-09 15:04:42.677 17042 17101 W VideoCapabilities: Unsupported mime video/apv
04-09 15:04:42.969 17042 17075 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name inPosition
04-09 15:04:42.969 17042 17075 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name inColor
04-09 15:04:42.969 17042 17075 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 2 name inTextureCoords
04-09 15:04:42.994 17042 17075 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 0 name position
04-09 15:04:42.994 17042 17075 I RustStdoutStderr: s_glBindAttribLocation: bind attrib 1 name localCoord
```
