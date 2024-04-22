import User from "../models/User.js";
import bcrypt from "bcrypt"
import createToken from "../helpers/create-token.js";

export default class AuthController{

    static async signIn(req, res){
        const { email, password } = req.body

        if( !email || !password ){
            return res.status(400).json({
                message: "Ocorreu um erro inesperado!"
            })
        }

        const user = await User.findOne({where: {email: email}})

        if(!user){
            return res.status(401).json({
                message: "Senha ou email incorreto!"
            })
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            return res.status(401).json({
                message: "Senha ou email incorreto!"
            })
        }

        try {
            await createToken(user, req, res)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Ocorreu um erro no servidor!"})
        }
    }

    static async signUp(req, res){
        const { username, email, password, confirmpassword } = req.body

        if(!username || !email || !password || !confirmpassword){
            return res.status(400).json({
                message: "Ocorreu um erro inesperado!"
            })
        }

        const checkIfUserExists = await User.findOne({where: {email: email}})

        if(checkIfUserExists){
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
            username,
            email,
            password: hashPassword
        }

        try {
            const createdUser = await User.create(user)
            await createToken(createdUser, req, res)
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Ocorreu um erro no servidor!"})
        }

    }

}