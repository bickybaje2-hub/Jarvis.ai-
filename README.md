# JARVIS AI — Website + Android test kit

Created for Aditya Jha.

## Publish and build
1. Extract this ZIP.
2. Open https://github.com/bickybaje2-hub/Jarvis.ai-
3. Choose Add file → Upload files. Upload all extracted files and folders, including `.github`, then commit to `main`.
4. In Settings → Pages, choose **GitHub Actions** as the source.
5. In Actions, wait for **Deploy JARVIS web app**. The expected site URL is https://bickybaje2-hub.github.io/Jarvis.ai-/
6. Open the **Build JARVIS Android APK** workflow run and download the `JARVIS-Android-test-APK` artifact. Unzip it and install `app-debug.apk` on Android.

## Important
This is an interface test build with local demo replies. Real Groq, Claude, or Kimi answers need a secure server-side backend. Keep provider API keys on the server or in hosting secrets; never commit them into browser code. Rotate any key previously shared in chat or public code.
