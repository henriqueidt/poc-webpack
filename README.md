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

For example, if we install the `moment.js` library and just import it normally into our `index.js` file:

```javascript
// src/index.js
import moment from "moment";
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
```

Then we run `npm run build`, we'll see that the entire moment.js library is included in the bundle, making it too big. Even if we don't use all of its features:

```bash
$ npm run build

asset index.js 478 KiB [emitted] [minimized] [big] (name: index) 1 related asset
```

If we include the property to split chunks in webpack config, it will create a separate chunk for the moment.js library:

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
```

Now, when we run `npm run build`, we'll see that the moment.js library is split into a separate chunk, and the main bundle is much smaller:

```bash
$ npm run build
asset 968.js 471 KiB [emitted] [minimized] [big] (id hint: vendors) 1 related asset
asset index.js 7.93 KiB [emitted] [minimized] (name: index)
```

## Dynamic imports

Webpack also allows us to use dynamic imports to split code and load modules on demand.

By dynamically importing a module, we can tell webpack to create a separate chunk for that module, which will be loaded only when needed.

```javascript
// src/index.js
const getUsersModule = () =>
  import(/* webpackChunkName: "usersAPI" */ "./common/userAPI");
getUsersModule().then(({ getUsers }) => {
  getUsers().then((json) => console.log(json));
});
```
