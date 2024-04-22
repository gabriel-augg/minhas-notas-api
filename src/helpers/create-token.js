import jwt from "jsonwebtoken"

const createToken = async (user, req, res) => {
    const token = jwt.sign({
        id: user.id
    }, "31a31204-b3a4-4195-b252-d48278285630")

    res.status(200).json({token})
}

export default createToken;