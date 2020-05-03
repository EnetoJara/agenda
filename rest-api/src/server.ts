import * as http from "http";
import { Express } from "./express";
import { API_PORT } from "./utils/constants";
import { logger } from "./utils/logger";
import { database } from "./models";
import { Sequelize } from "sequelize/types";

database.sequelize.sync().then((res: Sequelize) => {
    logger.info("db connected", { metadata: "" });

    const app = new Express(database);
    const server = http.createServer(app);

    server.listen(Number(API_PORT), () => logger.info(`server running: http:localhost:${API_PORT}`));
});
