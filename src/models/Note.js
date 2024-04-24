import { sequelize as db } from "../db/conn.js";
import { DataTypes } from "sequelize";

import User from "./User.js";

const Note = db.define("Note", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    tag: DataTypes.STRING,
    pinned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

Note.belongsTo(User)
User.hasMany(Note)

export default Note;