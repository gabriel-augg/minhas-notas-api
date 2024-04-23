import { sequelize as db } from "../db/conn.js";
import { DataTypes } from "sequelize";

import User from "./User.js";

const Tag = db.define("Tag", {
    title: {
        type: DataTypes.STRING(30)
    }
})

Category.belongsTo(User)
User.hasMany(Category)

export default Category;