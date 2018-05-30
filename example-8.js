//Http client
var http = require("http") ;
var url = require("url") ;
var server = http.createServer(function (request, response) {
    var tarih = new Date();
    var urlObject = url.parse(request.url) ;
    var GunAyYil = tarih.getDate() + "." + (tarih.getMonth() + 1)
        + "." + tarih.getFullYear();
    SaatDakika = " " + tarih.getHours() + ":" + tarih.getMinutes();
    
    if (urlObject.pathname == '/tarih') {
        response.end("Tarih: " + GunAyYil);
        console.log("Tarih: " + GunAyYil);
    } else if (urlObject.pathname == '/saat') { 
        response.end("Saat: " + SaatDakika);
        console.log("Saat: " + SaatDakika);
    }
})
server.listen(8399) ;
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8399" + " adresinden ulaşabilirsiniz.") ;