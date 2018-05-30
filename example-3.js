
//Asynchronous Programming
var fs = require("fs");
var callback1 = function (hata, dosyaIcerigi) {
    if (hata) {
        console.log("Bir hata oluştu.")
        return;
    }
    var satirlar = dosyaIcerigi.toString().split("\n");
    console.log(satirlar.length);
}
var file = "/home/sy/Documents/Projects/nodejs-examples/textFile.txt";
fs.readFile(file, callback1);
console.log("Program devam ediyor...");
