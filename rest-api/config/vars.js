"use strict";

const fs = require("fs");
const path = require("path");

const dotenvFiles = [`.env`, `.env.routes`].filter(Boolean);
dotenvFiles.forEach((dotenvFile) => {
    if (fs.existsSync(dotenvFile)) {
        require("dotenv-expand")(
            require("dotenv").config({
                path: dotenvFile,
            })
        );
    }
});

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || "")
    .split(path.delimiter)
    .filter((folder) => folder && !path.isAbsolute(folder))
    .map((folder) => path.resolve(appDirectory, folder))
    .join(path.delimiter);

module.exports = () => {
    const API = /^API_/i;
    const raw = Object.keys(process.env)
        .filter((key) => API.test(key))
        .reduce(
            (env, key) => {
                env[key] = process.env[key];
                return env;
            },
            {
                NODE_ENV: process.env.NODE_ENV || "development",
                PUBLIC_URL: process.env.PUBLIC_URL || "/",
                GENERATE_SOURCEMAPS: process.env.GENERATE_SOURCEMAPS || "true",
            }
        );
    const stringified = {
        "process.env": Object.keys(raw).reduce((env, key) => {
            env[key] = JSON.stringify(raw[key]);
            return env;
        }, {}),
    };

    console.log(stringified);
    return { raw, stringified };
};
