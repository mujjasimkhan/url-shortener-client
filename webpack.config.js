const path = require("path");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include:[
            path.join(__dirname, "src"),
            //path.join(__dirname, "node_modules/bootstrap"),
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        
      }
    ],
  },
};