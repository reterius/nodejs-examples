//Mysql List
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
var sql = "SELECT * FROM messages";
con.query(sql, function (err, result, fields) {
    if (err) throw err;
    result.forEach(function (val, index, theArray) {
        console.log(val.msg);
    });
});


