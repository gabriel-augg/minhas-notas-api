import getToken from "../helpers/get-token.js";
import getUserByToken from "../helpers/get-user-by-token.js";
import Tag from "../models/Tag.js";
import ERROR from "../helpers/errors.js";
import SUCCESS from "../helpers/success.js";
import { Op } from "sequelize";

export default class TagControllers {
    static async create(req, res) {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                message: ERROR.FAILED_REQUEST,
            });
        }

        try {
            const token = getToken(req);

            const user = await getUserByToken(token);
            const tag = await Tag.create({
                title,
                UserId: user.id,
            });

            res.status(201).json({
                tag,
            });
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
            });
        }
    }

    static async getTags(req, res) {
        let title = "";
        if (req.query.title) {
            title = req.query.title;
        }
        try {
            const token = getToken(req);

            const user = await getUserByToken(token);

            const tag = await Tag.findAll({
                where: {
                    UserId: user.id,
                    title: {
                        [Op.like]: `%${title}%`,
                    },
                },
            });

            res.status(200).json({
                tag,
            });
        } catch (error) {
            res.status(400).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
            });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { title } = req.body;
        if (!title) {
            res.status(400).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
            });
        }

        try {
            const tag = await Tag.findByPk(id);
            if (!tag) {
                res.status(404).json({
                    message: "Tag não encontrada",
                });
            }

            tag.title = title;
            await tag.save();
            res.status(200).json({
                tag,
            });
        } catch (error) {
            res.status(400).res({
                message: ERROR.INTERNAL_SERVER_ERROR,
            });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        try {
            const tag = await Tag.findByPk(id);

            if (!tag) {
                res.status(400).json({
                    message: ERROR.TAG_NOT_FOUND,
                });
            }

            await tag.destroy({
                where: { id },
            });

            res.status(204).json({});
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
            });
        }
    }
}
