//Schell exec
"use strict";
const child_process = require("child_process");
const islem = child_process.exec("node --version", function (error, stdout, stderr) {
    if (error) throw error;
    console.log("stdout : " + stdout);
    console.log("stderr : " + stderr);
});
islem.on("exit", function (code, signal) {
    console.log("İşlem tamamlandı. İşlem kodu :  " + code);
});