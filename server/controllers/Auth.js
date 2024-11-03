import { addUser, doesUserExist } from "../utils/database.js"
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    let { username, email, password } = req.body
    let userUsernameRecord = await doesUserExist("username", username)
    let userEmailRecord = await doesUserExist("email", email)
    
    if(userUsernameRecord.length === 0) {
        if(userEmailRecord.length === 0) {
            let hashedPassword = await bcrypt.hash(password, bcrypt.genSaltSync())
            addUser(username, email, hashedPassword)
            res.send({ success: true, error: false, successMessage: "Account registered." })
        } else {
            res.send({ success: false, error: true, errorType: "email", errorEmail: "That email is already taken." })
        }
    } else {
        res.send({ success: false, error: true, errorType: "username", errorMessage: "That username is already taken." })
    }
}