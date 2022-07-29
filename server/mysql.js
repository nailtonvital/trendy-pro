import mysql from 'mysql'

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "nailton123",
    database: "mydb",
});

if (db) console.log("mysql")

export default db