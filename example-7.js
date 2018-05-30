//Http client
var http = require("http") ;
var server = http.createServer(function (request, response) {
    var tarih = new Date();
    var formatliTarih = tarih.getDate() + "." + (tarih.getMonth() + 1)
        + "." + tarih.getFullYear();
    formatliTarih += " " + tarih.getHours() + ":" + tarih.getMinutes();
    console.log(formatliTarih) ;
    response.end("Moment: "+formatliTarih) ;
})
server.listen(8399) ;
console.log("Server Başlatıldı. Tarayıcı üzerinden http://localhost:8399" + " adresinden ulaşabilirsiniz.") ;