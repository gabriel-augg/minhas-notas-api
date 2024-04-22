import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const userRoutes = Router()

userRoutes.get("/sign-up", AuthController.signUp)

export default userRoutes;