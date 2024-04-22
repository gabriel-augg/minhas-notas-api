import express from "express"
import { connectToDataBase } from "./db/conn.js"


const port = 3000
const app = express()

app.use(express.json())

app.use("/", (req, res) => {
    res.send("TUDO FUNCIONANDO!")
})

connectToDataBase()
.then(()=> {
    app.listen(port)
})