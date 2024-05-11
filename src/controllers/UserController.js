import User from "../models/User.js";
import ERROR from "../helpers/errors.js";
import getToken from "../helpers/get-token.js";
import getLoggedUserByToken from "../helpers/get-logged-user-by-token.js";

import bcrypt from "bcrypt";
export default class UserController {
    static async checkUser(req, res) {
        try {
            const token = getToken(req);
            const user = await getLoggedUserByToken(token);

            if (!user) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.LOGGED_USER_NOT_FOUND,
                });
            }

            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async update(req, res) {
        const { username, email, password, confirmpassword } = req.body;

        if (!username || !email) {
            return res.status(400).json({
                message: ERROR.FAILED_REQUEST,
                error: ERROR.REQUIRED_FIELDS,
            });
        }

        const token = getToken(req);
        const user = await getLoggedUserByToken(token);

        if (!user) {
            return res.status(400).json({
                message: ERROR.FAILED_REQUEST,
                error: ERROR.LOGGED_USER_NOT_FOUND,
            });
        }

        if (!user) {
            return res.status(400).json({
                message: ERROR.FAILED_REQUEST,
            });
        }

        const checkIfEmailIsAvailable = await User.findOne({
            where: { email: email },
        });

        if (checkIfEmailIsAvailable && user.email !== email) {
            return res.status(409).json({
                message: "Email indisponível!",
            });
        }

        user.username = username;
        user.email = email;

        if (password) {
            if (password !== confirmpassword) {
                return res.status(400).json({
                    message: "As senhas não conhecidem!",
                });
            }

            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);

            user.password = hashPassword;
        }

        try {
            await user.save();
            res.status(200).json({
                user,
            });
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }

    static async delete(req, res) {
        try {
            const token = getToken(req);
            const user = await getLoggedUserByToken(token);

            if (!user) {
                return res.status(400).json({
                    message: ERROR.FAILED_REQUEST,
                    error: ERROR.LOGGED_USER_NOT_FOUND,
                });
            }

            await User.destroy({ where: { id: user.id } });

            res.status(204).json({});
        } catch (error) {
            res.status(500).json({
                message: ERROR.INTERNAL_SERVER_ERROR,
                error: error.message,
            });
        }
    }
}
