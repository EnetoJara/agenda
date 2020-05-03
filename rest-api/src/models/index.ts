import { sequelize } from "./sequelize";
import { listFactory } from "./lists.model";
import { usersFactory } from "./users.model";
import { DB } from "@eneto/api-rest";

export const Lists = listFactory(sequelize);
export const Users = usersFactory(sequelize);

Users.belongsTo(Lists, { onDelete: "cascade" });

export const database: DB = {
    Lists,
    Users,
    sequelize,
};
