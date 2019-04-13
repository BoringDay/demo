const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    const devMode = argv.mode !== "production";

    return {
        entry: ["babel-polyfill", path.join(__dirname, "./src/index.js")],
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "index_bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader"
                    ]
                }
            ]
        },
        plugins: [
            // ...,
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            })
        ]
    };
};
