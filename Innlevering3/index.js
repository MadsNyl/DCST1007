import Bubble from "./bubble.js";
import Rectangle from "./rectangle.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const WIDHT = canvas.width;
const HEIGHT = canvas.height;
const MAX_RADIUS = 20;
const MAX_WIDTH = WIDHT - (2 * MAX_RADIUS); 
const MAX_HEIGHT = HEIGHT - (2 * MAX_RADIUS); 
const figures = [];
let figureType = true;

const appendEachSecond = () => {
    if (figureType) {
        figures.push(new Bubble(
            getRandom(0 + (2 * MAX_RADIUS), MAX_WIDTH),
            getRandom(0 + (2 * MAX_RADIUS), MAX_HEIGHT),
            getRandom(10, MAX_RADIUS)
        ));
    } else {
        figures.push(new Rectangle(
            getRandom(0 + (2 * MAX_RADIUS), MAX_WIDTH),
            getRandom(0 + (2 * MAX_RADIUS), MAX_HEIGHT),
            getRandom(10, MAX_RADIUS)
        ));
    }
}

const addWithClick = (e) => {
    const rect = canvas.getBoundingClientRect();
    const posx = e.clientX - rect.left;
    const posy = e.clientY - rect.top;

    if (figureType) {
        figures.push(new Bubble(
            posx,
            posy,
            getRandom(10, MAX_RADIUS)
        ));
    } else {
        figures.push(new Rectangle(
            posx,
            posy,
            getRandom(10, MAX_RADIUS)
        ));
    }
}

const draw = () => {
    reset();
    for (const b of figures) b.run(ctx, WIDHT, HEIGHT);
}

const reset = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

const getRandom = (min, max) => { return min + Math.floor(Math.random() * (max - min + 1)); } 

setInterval(appendEachSecond, 1000);
setInterval(draw, 10);
canvas.addEventListener("click", addWithClick)
document.addEventListener("keydown", (e) => { if (e.key === "Enter") figureType = !figureType; })