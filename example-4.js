var module1 = require('./module1');
var file = "/home/sy/Documents/Projects/nodejs-examples/textFile.txt" ;
module1(file, function (hata, data) {
    if (hata) {
        console.log("Bir hata oluştu.");
        return;
    }
    console.log(data);
});