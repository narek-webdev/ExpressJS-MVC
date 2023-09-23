const mysql = require('mysql')

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWOR,
    database: process.env.MYSQL_DB,
})

con.connect(function (err) {
    if (err) throw err
})

module.exports = con
