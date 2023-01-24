import Figure from "./figure.js";

export default class Bubble extends Figure {
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._r, 0, 2*Math.PI);
        ctx.fillStyle = this._color;
        ctx.fill();
    }
}