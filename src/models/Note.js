import { sequelize as db } from "../db/conn.js";
import { DataTypes } from "sequelize";

import User from "./User.js";

const Note = db.define("Note", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    tag: DataTypes.STRING,
    pinned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

Note.belongsTo(User)
User.hasMany(Note)

export default Note;