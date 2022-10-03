/*
    Import Kaboom as an ES Module. Either from unpkg or from a local copy
    See `readme.md` on how to download/update local files
*/
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
// import kaboom from "./vendor/kaboom.mjs";

import * as start from "./scenes/start.js";

// Development
window.DEVMODE = true; // Global DEVMODE for logging and feature switching

kaboom({
    width: 1280, //window.innerWidth, // Use commented lines for fullscreen, pixelRatio adaptive
    height: 720, //window.innerHeight,
    scale: 1,    //window.devicePixelRatio,
    crisp: true,
    background: [0, 0, 0],
});

// Initialize scenes and load assets
// (scenes with large assets should not be initialized immediately at startup)
start.init();

go('start');
