cd src || return
web-ext run -t firefox-android --adb-device "$1" --firefox-apk org.mozilla.fenix