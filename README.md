#OpenNAtive plugin for Android and iOS 8 Cordova.

The plugin allows you to open Settings view from Android Cordova application and to open Native App settings view from iOS 8 Cordova application. Based on https://github.com/raulduran/VideoPlayer.

##Adding the Plugin to your project

cordova plugin add https://github.com/VBPrabhu/open-native.git
##Removing the Plugin to your project

cordova plugin rm cordova-plugin-open-native-settings
##Using the plugin (opens Location Settings in Android and Application Settings in iOS)

cordova.plugins.settings.open(success_callback, failure_callback);
###Example for iOS and Android

if(typeof cordova.plugins.settings.openSetting != undefined){
    cordova.plugins.settings.open(function(){
            console.log("opened settings")
        },
        function(){
            console.log("failed to open settings")
        });
}
