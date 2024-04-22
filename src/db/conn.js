import { Sequelize } from 'sequelize'
import dotenv from "dotenv"

dotenv.config()

const { DB_NAME, SERVER_USERNAME, SERVER_HOST, SERVER_PORT, SERVER_PASSWORD } = process.env

const sequelize = new Sequelize(DB_NAME, SERVER_USERNAME, SERVER_PASSWORD, {
    host: SERVER_HOST,
    port: SERVER_PORT,
    dialect: "mysql"
})

async function connectToDataBase(){
    try {
        await sequelize.authenticate()
        console.log("Successfully connected to database")
        await sequelize.sync()
        console.log("Successfully synconized to database")
    } catch (error) {
        console.log("Failed to connect: ", error)
    }
}

export { sequelize, connectToDataBase }