const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) => {
    try {
        ws.on("error", console.error)

        ws.on("message", (data) => {
            wss.clients.forEach((client) => client.send(data.toString()))
        })

        console.log("client connected")
    } catch (error) {
        console.error("Ocorreu uma falha inesperada no servidor");
    }
})
