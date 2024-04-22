import User from "../models/User.js";
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";

import bcrypt from "bcrypt"
export default class UserController {

    static async checkUser(req, res){
        try {
            const token = getToken(req)
            const currentUser = await getUserByToken(token)

            res.status(200).json({user: currentUser})
        } catch (error) {
            res.status(500).json({ 
                message: "Ocorreu um erro inesperado com o servidor, por favor, tente novamente mais tarde" 
            })
        }
    }

    static async updateUser(req, res){
        const {name, email, password, confirmpassword} = req.body

        if(!name || !email){
            return res.status(400).json({
                message: "Ocorreu um erro inesperado!"
            })
        }

        const token = getToken(req)
        const currentUser = await getUserByToken(token)

        const checkIfEmailIsAvailable = await User.findOne({where: {email: email}})

        if(checkIfEmailIsAvailable && currentUser.email !== email ){
            return res.status(409).json({
                message: "Email indisponível!"
            })
        }

        currentUser.name = name
        currentUser.email = email

        if(password){
            if(password !== confirmpassword){
                return res.status(400).json({
                    message: "As senhas não conhecidem!"
                })
            }

            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)

            currentUser.password = hashPassword
        }

        try {
            await currentUser.save()
            res.status(200).json({
                user: currentUser
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: "Ocorreu um erro inesperado com o servidor, por favor, tente novamente mais tarde" })
        }

    }

    static async deleteUser(req, res){
        try {
            const token = getToken(req)
            const user = await getUserByToken(token)

            await User.destroy({where: {id:user.id}})

            res.status(204).json({})

        } catch (error) {
            console.log(error)
            res.status(500).json({message: "Ocorreu um erro inesperado com o servidor, por favor, tente novamente mais tarde"})
        }
    }

    
}