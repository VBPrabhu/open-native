OpenNative plugin is used to Open Native settings screen from Cordova application for iOS 10.1

	The plugin allows you to open Settings view from Android Cordova application and to open Native App settings view from iOS 8 Cordova application. 

Adding the Plugin to your project

	cordova plugin add https://github.com/VBPrabhu/open-native.git

Removing the Plugin to your project

	cordova plugin rm cordova-plugin-open-native-settings

Using the plugin (opens Location Settings in Android and Application Settings in iOS)

Ionic 2 /  Angular 2 Example for iOS
------------------------------------

Declaration :
-------------

	export var cordova: any;
	
	interface Window {
	  settings: any;
	}
	declare var window: Window;

Plugin call:
------------
	 	this._platform.ready().then(() => {
	           window.settings.openSettings("touchid");
	      });
