const connect = require("./db")

const express = require("express")

const app = express()
const PORT = 5000
const usersController = require("./controller/usercontroller")
const cors = require("cors")



app.use(cors())
app.use(express.json())
app.use("/", usersController)





app.listen(PORT, async () => {
    try {
        connect()
        console.log(`listen on ${PORT}`)
    }
    catch (err) {
        console.log(err)
    }
})