const path = require('path');

module.exports = {
    entry: {
        index: "./index.js",
    },
    mode: "development",
    output: {
        "path": path.resolve(__dirname, "dist"),
        "filename": "index.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/react"
                        ]
                    }
                }
            }
        ]
    }
};
