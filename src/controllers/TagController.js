import getToken from "../helpers/get-token.js";
import getLoggedUserByToken from "../helpers/get-logged-user-by-token.js";
import Tag from "../models/Tag.js";
import ERROR from "../helpers/errors.js";

export default class TagControllers {
    static async create(req, res) {
        const { name } = req.body;

        if (!name) {
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

            const tag = await Tag.create({
                name,
                UserId: user.id,
            });

            res.status(201).json({
                tag,
            });
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async getTags(req, res) {
        try {
            const token = getToken(req);

            const user = await getLoggedUserByToken(token);

            if (!user) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.LOGGED_USER_NOT_FOUND,
                });
            }

            const tags = await Tag.findAll({
                where: {
                    UserId: user.id,
                },
            });

            res.status(200).json({
                tags,
            });
        } catch (error) {
            res.status(400).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                message: ERROR.FAILED_REQUEST,
                error: ERROR.REQUIRED_FIELDS,
            });
        }

        try {
            const tag = await Tag.findByPk(id);
            if (!tag) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.TAG_NOT_FOUND,
                });
            }

            tag.name = name;
            await tag.save();
            res.status(200).json({
                tag,
            });
        } catch (error) {
            res.status(400).res({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;

        try {
            const tag = await Tag.findByPk(id);

            if (!tag) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.TAG_NOT_FOUND,
                });
            }

            await tag.destroy({
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
