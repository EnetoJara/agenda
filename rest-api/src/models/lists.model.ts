import { Sequelize, DataTypes } from "sequelize";
import { ListAttributes, Repository } from "@eneto/api-rest";

export function listFactory (sequelize: Sequelize): Repository<ListAttributes> {
    return sequelize.define("lists", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: new Date(),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: new Date(),
        },
    }) as Repository<ListAttributes>;
}
