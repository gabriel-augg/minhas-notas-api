import jwt from "jsonwebtoken";
import getToken from "./get-token.js";

const verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            message: "Acesso negado!",
        });
    }

    const token = getToken(req);

    if (!token) {
        return res.status(401).json({
            message: "Acesso negado!",
        });
    }

    try {
        jwt.verify(token, "31a31204-b3a4-4195-b252-d48278285630");
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: "Token inválido!",
        });
    }
};

export default verifyToken;
