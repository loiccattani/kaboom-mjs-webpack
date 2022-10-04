import kaboom from "kaboom";
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
