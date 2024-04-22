import express from "express"
import { connectToDataBase } from "./db/conn.js"

import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import noteRoutes from "./routes/noteRoutes.js"

const port = 3000
const app = express()

app.use(express.json())

app.use("/auth", authRoutes)
app.use("/users", userRoutes)
app.use("/notes", noteRoutes)

connectToDataBase()
.then(()=> {
    app.listen(port)
})