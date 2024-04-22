import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";
import Note from "../models/Note.js";

export default class NoteController {
    static async create(req, res){
        const { title, description, category } = req.body;

        if(!title){
            return res.status(400).json({
                message: "Ocorreu um erro inesperado!"
            })
        }

        try {
            const token = getToken(req)
            const user = await getUserByToken(token)

            const noteData = {
                title,
                description,
                category,
                UserId: user.id
            }

            const note = await Note.create(noteData)

            res.status(201).json({note})
        } catch (error) {
            res.status(500).json({ 
                message: "Ocorreu um erro inesperado com o servidor, por favor, tente novamente mais tarde" 
            })
        }
    }
}