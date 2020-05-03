"use strict";

module.exports = (api) => {
    const { NODE_ENV = "development" } = process.env;
    api.env();
    api.cache(() => NODE_ENV);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        node: "current",
                        esmodules: false,
                    },
                    useBuiltIns: "entry",
                    corejs: 3,
                    modules: "commonjs",
                },
            ],
            "@babel/preset-typescript",
        ],
        plugins: [
            [
                "@babel/plugin-transform-runtime",
                {
                    corejs: {
                        version: 3,
                        proposals: true,
                    },
                    useESModules: false,
                },
            ],
            "@babel/plugin-transform-block-scoping",
        ],
    };
};
