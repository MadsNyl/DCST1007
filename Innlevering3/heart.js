import Figure from "./figure.js";

export default class Heart extends Figure {
    draw(ctx) {
        ctx.beginPath();
        const topCurveHeight = this._r * 2 * 0.3;
        ctx.moveTo(this._x, this._y + topCurveHeight);
        // top left curve
        ctx.bezierCurveTo(
          this.x, this._y, 
          this.x - this._r, this._y, 
          this.x - this._r, this._y + topCurveHeight
        );
      
        // bottom left curve
        ctx.bezierCurveTo(
          this.x - this._r, this._y + (this._r * 2 + topCurveHeight) / 2, 
          this.x, this._y + (this._r * 2 + topCurveHeight) / 2, 
          this.x, this._y + this._r * 2
        );
      
        // bottom right curve
        ctx.bezierCurveTo(
          this.x, this._y + (this._r * 2 + topCurveHeight) / 2, 
          this.x + this._r, this._y + (this._r * 2 + topCurveHeight) / 2, 
          this.x + this._r, this._y + topCurveHeight
        );
      
        // top right curve
        ctx.bezierCurveTo(
          this.x + this._r, this._y, 
          this.x, this._y, 
          this.x, this._y + topCurveHeight
        );

        ctx.closePath();
        ctx.fillStyle = this._color;
        ctx.fill();
    }
}