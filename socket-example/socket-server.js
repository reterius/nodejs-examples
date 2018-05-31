//server.js
var app   = require('express')();
var http  = require('http').Server(app);
var io    = require('socket.io')(http);
var mysql = require('mysql');
var con = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "blink8080",
    database: "TestDB"
});
con.connect(function (err) {
    if (err) console.log(err);
})
io.on('connection', function (socket) {
    console.log('connection');
    socket.on('reterius', function (from, msg) {
        console.log('reterius', from, ' saying ', msg);
        var sql = "INSERT INTO messages (msg) VALUES ('" + msg + "')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    });
});
http.listen(8399, function () {
    console.log('listening on *:8399');
});