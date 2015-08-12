// UserAgent test

onmessage = function(event) {
    self.unitTest = event.data; // { message, setting: { secondary, baseDir } }

    if (!self.console) { // polyfill WebWorkerConsole
        self.console = function() {};
        self.console.dir = function() {};
        self.console.log = function() {};
        self.console.warn = function() {};
        self.console.error = function() {};
        self.console.table = function() {};
    }

    importScripts("../lib/WebModule.js");

    //publish to global. eg: window.WebModule.Class -> window.Class
    WebModule.publish = true;

    
    importScripts("wmtools.js");
    importScripts("../lib/UserAgent.js");
    importScripts("../release/UserAgent.w.min.js");
    importScripts("testcase.js");

    self.postMessage(self.unitTest);
};
