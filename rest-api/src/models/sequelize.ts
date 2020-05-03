import { API_DB_HOST, API_DB_NAME, API_DB_USER, API_DB_PASSWORD, API_DB_PORT } from "../utils/constants";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(API_DB_NAME, API_DB_USER, API_DB_PASSWORD, {
    port: Number(API_DB_PORT),
    host: API_DB_HOST,
    dialect: "postgres",
    pool: {
        min: 0,
        max: 10,
        acquire: 30000,
        idle: 10000,
    },
    logging: process.env.NODE_ENV !== "production"
});
