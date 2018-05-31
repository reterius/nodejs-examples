//Http client
var http = require("http") ;
var url = require("url") ;
var server = http.createServer(function (request, response) {
    var tarih = new Date();
    var urlObject = url.parse(request.url) ;
    var GunAyYil = tarih.getDate() + "." + (tarih.getMonth() + 1)
        + "." + tarih.getFullYear();
    SaatDakika = " " + tarih.getHours() + ":" + tarih.getMinutes();
    
    console.log(request) ;
})
server.listen(8399) ;
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8399" + " adresinden ulaşabilirsiniz.") ;