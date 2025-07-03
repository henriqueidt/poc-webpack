const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// We need to add a commonJS export (module.exports) to the file for Node.js to recognize it as a module.
module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    // The HtmlWebpackPlugin will generate an HTML file that includes the output bundle.
    // It will also inject the script tag for the bundle into the HTML file.
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  module: {
    // The rules array contains the loaders that will be applied to the files.
    // Loaders are transformations that are applied on the source code of a module.
    // They are used to preprocess files before they are added to the bundle.
    rules: [
      {
        test: /\.css$/,
        // The order of the loaders matter. It's processed from right to left.
        // In this case, the css-loader will process the CSS files and the style-loader will inject the styles into the DOM.
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        // The sass-loader will compile Sass to CSS, the css-loader will process the CSS files, and the style-loader will inject the styles into the DOM.
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
