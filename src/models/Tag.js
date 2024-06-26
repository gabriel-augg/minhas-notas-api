import { sequelize as db } from "../db/conn.js";
import { DataTypes } from "sequelize";

import User from "./User.js";

const Tag = db.define("Tag", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
});

Tag.belongsTo(User);
User.hasMany(Tag);

export default Tag;
