import express from "express";
import { connectToDataBase } from "./db/conn.js";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";

const port = 3645;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/notes", noteRoutes);
app.use("/tags", tagRoutes);

connectToDataBase().then(() => {
    app.listen(port);
});
