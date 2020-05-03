const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const vars = require("./vars")();
const prod = process.env.NODE_ENV === "production";

module.exports = {
    target: "node",
    node: {
        __filename: false,
        __dirname: false,
    },
    externals: [nodeExternals()],
    entry: [path.join(__dirname, "../src/index.ts")],
    devtool: !prod ? "source-map" : false,
    mode: process.env.NODE_ENV,
    output: {
        filename: "[name]-bundle.js",
        chunkFilename: "[name].chunk.js",
        path: path.resolve(__dirname, "../api-rest"),
        publicPath: "/",
        libraryTarget: "commonjs2",
    },
    optimization: {
        splitChunks: {
            automaticNameDelimiter: "_",
            cacheGroups: {
                common: {
                    name: "common",
                    minChunks: 2,
                    chunks: "async",
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true,
                },
                vendor: {
                    // name of the chunk
                    name: "vendor",
                    // async + async chunks
                    chunks: "all",
                    // import file path containing node_modules
                    test: /node_modules/,
                    // priority
                    priority: 20,
                },
            },
        },
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    plugins: [new webpack.DefinePlugin(vars.stringified)],
};
