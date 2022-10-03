# kaboom-mjs-webpack

A ready to fork Kaboom project boilerplate with ES6 modules, webpack.

Some CSS styles applied to center the canvas on screen both horizontally and vertically at native resolution (will shrink to fit).

## Build for deployment

### Install dev dependencies (webpack)

    npm install

### Build

    npm run build

`dist` will contain the code ready for deployment

## Download or update local Kaboom (for use when network is not available)

A copy of Kaboom 2000.2.9 code and source map is already included in `vendor/`.

To update kaboom files locally, run these commands in the terminal:

    curl -Lo vendor/kaboom.mjs https://unpkg.com/kaboom/dist/kaboom.mjs
    curl -Lo vendor/kaboom.mjs.map https://unpkg.com/kaboom/dist/kaboom.mjs.map
