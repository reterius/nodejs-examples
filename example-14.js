//Mysql Delete
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
var sql = "Delete from messages  where id = 2";
con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record deleted");
});





