import express from 'express'
import { registerUser } from '../controllers/Auth.js'

const app = express.Router()

app.post("/register-user", registerUser)

export default app