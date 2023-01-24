import Figure from "./figure.js";

export default class Rectangle extends Figure {
    draw(ctx) {
        ctx.fillStyle = this._color;
        ctx.fillRect(this._x, this._y, this._r, this._r);
    }
}