// GET MYSQL PACKAGE
const mysql = require('mysql');

//IMPORT DATABASE CONNECTION
/**
 * 
 * YOU CAN CHANGE THE DATABASE CONFIGURATION BASED ON YOUR LOCAL DATABASE
 * THIS DATABSE ARE JUST FORR TESTING PURPOSES
 * 
 */
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_alfatih' //SAM LOCAL DATABASE NAME
})

module.exports = database;
