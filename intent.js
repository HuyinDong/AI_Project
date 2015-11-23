/**
 * Created by dongyin on 11/11/15.
 */
var mic = new Wit.Microphone(document.getElementById("microphone"));
var info = function (msg) {
    document.getElementById("info").innerHTML = msg;
};
var error = function (msg) {
    document.getElementById("error").innerHTML = msg;
};
mic.onready = function () {
    info("Microphone is ready to record");
};
mic.onaudiostart = function () {
    info("Recording started");
    error("");
};
mic.onaudioend = function () {
    info("Recording stopped, processing started");
};

mic.onerror = function (err) {
    error("Error: " + err);
};
mic.onconnecting = function () {
    info("Microphone is connecting");
};
mic.ondisconnected = function () {
    info("Microphone is not connected");
};

mic.connect("ANPILOKOGJCEKRBYFSV4V57RS75LGQ6W");
// mic.start();
// mic.stop();

function kv (k, v) {
    if (toString.call(v) !== "[object String]") {
        v = JSON.stringify(v);
    }
    return k + "=" + v + "\n";
}