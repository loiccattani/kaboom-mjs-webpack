# kaboom-mjs-webpack

A Kaboom project boilerplate with ES6 modules and webpack.

Some CSS styles applied to center the canvas on screen both horizontally and vertically at native resolution (will shrink to fit).

## Install dependencies

    npm install

## Development server and live reload

Serve the project, watch files for change and live reload.

    npm run start

## Build for deployment

    npm run build

`dist` will contain the code ready for deployment

## Where is the index.html ?

Webpack's HtmlWebpackPlugin will generate the index.html file and link all js bundles and CSS files.

More info:
- https://github.com/jantimon/html-webpack-plugin
- https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin