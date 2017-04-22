
var exec = require('cordova/exec');

module.exports = {
    openSettings: function(setvalue) {
        exec(null, null, "OpenNativeSetting", "openSettings", [setvalue]);
    }
};