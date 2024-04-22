import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const authRoutes = Router()

authRoutes.post("/sign-up", AuthController.signUp)
authRoutes.post("/sign-in", AuthController.signIn)

export default authRoutes;