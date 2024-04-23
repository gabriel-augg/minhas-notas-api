import { Op } from "sequelize";
import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";
import Note from "../models/Note.js";

export default class NoteController {
    static async create(req, res){
        const { title, description, tag, pinned } = req.body;

        try {
            const token = getToken(req)
            const user = await getUserByToken(token)

            const noteData = {
                title,
                description,
                tag,
                pinned,
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

    static async getAllUserNotes(req, res){
        try {
            const token = getToken(req)
            const user = await getUserByToken(token)

            const notes = await Note.findAll({
                where: {
                    UserId: user.id
                },
                order: [["pinned", "DESC"], ["updatedAt", "DESC"]]
            })

            res.status(200).json({notes})

        } catch (error) {
            res.status(500).json({ 
                message: "Ocorreu um erro inesperado com o servidor, por favor, tente novamente mais tarde" 
            })
        }
    }
}