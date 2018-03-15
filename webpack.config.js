console.log(__dirname);
const path = require("path");

// Folder settings
const entry = "src/app.js";
const outputPath = "dist";
const outputFilename = "app.bundle.js";

module.exports = {
   entry: path.join(__dirname, entry),
   output: {
      path: path.join(__dirname, outputPath),
      filename: outputFilename
   },
   module: {
      rules: [
         {
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
         },
         {
            test: /\.css$/,
            use: [
               "style-loader",
               { loader: "css-loader", options: { importLoaders: 1 } },
               "postcss-loader"
            ]
         }
      ]
   },
   devtool: "cheap-module-eval-sourcemap",
   // devServer: {
   //    contentBase: path.join(__dirname, outputPath),
   //    open: true
   // }
};