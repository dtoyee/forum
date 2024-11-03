import mysql2 from 'mysql2'

const database = mysql2.createConnection({
    host: "localhost",
    user: "root",
    database: "forum"
}).promise()

export const doesUserExist = async (column, value) => {
    const [rows] = await database.query("SELECT * FROM users WHERE " + column + " = '" + value + "'")
    return rows
}

export const addUser = (username, email, password) => {
    database.query("INSERT INTO users (username, email, password) VALUES(?,?,?)", [username, email, password])
}