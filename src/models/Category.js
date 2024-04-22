import { sequelize as db } from "../db/conn";
import { DataTypes } from "sequelize";

import User from "./User";

const Category = db.define("Category", {
    title: {
        type: DataTypes.STRING(30)
    }
})

Category.belongsTo(User)
User.hasMany(Category)

export default Category;