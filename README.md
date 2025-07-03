# POC WEBPACK

The goal of Webpack is to unify all the sources and module types in a way that is possible to import everything in javascript code.

- Common JS modules
- AMD modules
- CSS import
- Images url
- ES modules

- Webpack runs on top of headless JS environment such as Node.js.

## Entry point

The entry point is the file that webpack will look first to start building the dependency graph. It can be a single file or an array of files.

```javascript
// webpack.config.js
module.exports = {
  entry: "./src/index.js",
};
```

## Output

The output is where webpack will place the resulting JS and static files (bundle) after the build process.

## Loaders

Loaders are third parties extensions that will help webpack deal with different types of files. They are used to transform files into modules as they are added to the dependency graph.

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

## Plugins

Plugins are third party extensions that can alter how webpack works. Can be used for extracting HTML, CSS, setting environment variables, etc.

## Mode

Webpack can run in different modes, which will change the way it processes files and optimizes the output:

- `development`: for development builds, with source maps and no minification.
- `production`: for production builds, with minification and optimizations.

## Code splitting / Lazy loading

Webpack can split the code into smaller chunks that can be loaded on demand. This is useful for large applications where you don't want to load everything at once.
