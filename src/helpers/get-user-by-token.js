import jwt from "jsonwebtoken"

import User from "../models/User.js"

const getUserByToken = async (token) => {

    const decoded = jwt.verify(token, "31a31204-b3a4-4195-b252-d48278285630")
    const user = await User.findByPk(decoded.id, {
        attributes: {
            exclude: ["password"]
        }
    })

    return user
}

export default getUserByToken;