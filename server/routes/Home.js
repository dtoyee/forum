import express from 'express'
import { index } from '../controllers/Home.js'

const app = express.Router()

app.get("/", index)

export default app