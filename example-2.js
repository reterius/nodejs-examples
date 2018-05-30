var fs = require("fs");
var file = "/home/sy/Documents/Projects/nodejs-examples/textFile.txt";
var soru = "Selam, nasılsın?";
fs.writeFileSync(file, soru);
var dosyaIcerigi = fs.readFileSync(file);
var cevap = "iyiyim valla ne olsun";
YeniDosyaIcerigi = dosyaIcerigi + "\n" + cevap + "\n";
fs.writeFileSync(file, YeniDosyaIcerigi);
dosyaIcerigi = fs.readFileSync(file);
console.log(dosyaIcerigi.toString());

