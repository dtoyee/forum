import express from 'express'
import cors from 'cors'
import home from './routes/Home.js'

const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log("Server running on port: " + port)
})

app.use("/", home)