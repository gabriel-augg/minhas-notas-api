import User from "../models/User.js";
import bcrypt from "bcrypt"

export default class AuthController{
    static async signUp(req, res){
        const { name, email, password, confirmpassword } = req.body

        if(!name || !email || !password || !confirmpassword){
            return res.status(400).json({
                message: "Ocorreu um erro inesperado!"
            })
        }

        const checkIfUserExist = await User.findOne({where: {email: email}})

        if(checkIfUserExist){
            return res.status(409).json({
                message: "O email já está em uso!"
            })
        }

        if(password !== confirmpassword){
            return res.status(400).json({
                message: "As senhas não conhecidem"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = {
            name,
            email,
            password: hashPassword
        }

        try {
            const createdUser = await User.create(user)
            res.status(201).json({user: createdUser})
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Ocorreu um erro no servidor!"})
        }

    }
}