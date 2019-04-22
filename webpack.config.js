const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env, argv) => {
    const devMode = argv.mode !== "production";

    return {
        entry: ["babel-polyfill", path.join(__dirname, "./src/index.js")],
        output: {
            path: path.resolve(__dirname, "./dist"),
            filename: "index_bundle.js"
        },
        resolve: {
            alias: {
                "@": path.resolve("src")
            }
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
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {
                                minimize: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(), //打包前清理dist目录
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebPackPlugin({
                //模板
                template: "./src/index.html",
                filename: "./index.html",
                "js": [ "index_bundle.js"],
            })
        ]
    };
};
