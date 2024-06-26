import getToken from "../helpers/get-token.js";
import getLoggedUserByToken from "../helpers/get-logged-user-by-token.js";
import ERROR from "../helpers/errors.js";
import Note from "../models/Note.js";

export default class NoteController {
    static async create(req, res) {
        const { id, title, description, tag, pinned } = req.body;

        if (!id) {
            return res.status(400).json({
                message: ERROR.FAILED_REQUEST,
                error: ERROR.REQUIRED_FIELDS,
            });
        }

        try {
            const token = getToken(req);
            const user = await getLoggedUserByToken(token);

            if (!user) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.LOGGED_USER_NOT_FOUND,
                });
            }

            const noteData = {
                id,
                title,
                description,
                tag,
                pinned,
                UserId: user.id,
            };

            const note = await Note.create(noteData);

            res.status(201).json({ note });
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async getNotes(req, res) {
        try {
            const token = getToken(req);
            const user = await getLoggedUserByToken(token);

            if (!user) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.LOGGED_USER_NOT_FOUND,
                });
            }

            const notes = await Note.findAll({
                where: {
                    UserId: user.id,
                },
                order: [
                    ["pinned", "DESC"],
                    ["updatedAt", "DESC"],
                ],
            });

            res.status(200).json({ notes });
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const {
            title = "",
            description = "",
            tag = "",
            pinned = "",
        } = req.body;

        try {
            const note = await Note.findByPk(id);

            if (!note) {
                res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.NOTE_NOT_FOUND,
                });
            }

            note.title = title;
            note.description = description;
            note.tag = tag;
            note.pinned = pinned;

            await note.save();

            res.status(200).json({ note });
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        try {
            const note = await Note.findByPk(id);
            if (!note) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.NOTE_NOT_FOUND,
                });
            }

            await note.destroy({
                where: { id },
            });
            res.status(204).json({});
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }
}
