import { sequelize as db } from "../db/conn.js";
import { DataTypes } from "sequelize";

import User from "./User.js";

const Tag = db.define("Tag", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(30)
    }
})

Category.belongsTo(User)
User.hasMany(Category)

export default Category;