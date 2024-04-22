import { sequelize as db } from "../db/conn.js";
import { DataTypes } from "sequelize";

import User from "./User.js";
import Category from "./Category.js";

const Note = db.define("Note", {
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Note.belongsTo(User)
Note.belongsTo(Category)
User.hasMany(Note)
Category.hasMany(Note)

export default Note;