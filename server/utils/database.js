import mysql2 from 'mysql2'

const database = mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "forum"
})