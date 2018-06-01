//Mysql Insert
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "blink8080",
    database: "TestDB"
});
con.connect(function (err) {
    if (err) console.log(err);
})
var sql = "INSERT INTO messages (msg) VALUES ('hi, how are you')";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted");
});





