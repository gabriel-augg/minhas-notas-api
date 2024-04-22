import { sequelize as db } from "../db/conn.js";
import { DataTypes } from "sequelize";

import User from "./User.js";

const Note = db.define("Note", {
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    description: DataTypes.STRING,
    category: DataTypes.STRING
})

Note.belongsTo(User)
User.hasMany(Note)

export default Note;