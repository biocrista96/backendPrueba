const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'b1mgzvrdyqh00jy71b7x-mysql.services.clever-cloud.com',
    user:'utwyfjnthknllebg',
    password:'x6CCWKLx5nWtSd9bcTgY',
    database:'b1mgzvrdyqh00jy71b7x'
});

mysqlConnection.connect(function (err){
    if(err){
        console.log(err);
        return
    }
    else{
        console.log('conectada');
    }
});

module.exports = mysqlConnection;
