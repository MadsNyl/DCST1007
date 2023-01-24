export default class Figure {
    constructor(x, y, r) {
        this._x = x;
        this._y = y;
        this._r = r;
        this._color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        this._vel = [
            this.getRandom(-1, 1),
            this.getRandom(-1, 1)
        ]
    }

    run(ctx, width, height) {
        this.draw(ctx);
        this.checkWall(width, height);
        this.move();
    }

    move() {
        this._x += this._vel[0];
        this._y += this._vel[1];
    }
    
    checkWall(width, height) {
        if (this._x - this._r <= 0 || this._x + this._r >= width) this._vel[0] = -this._vel[0];
        if (this._y - this._r <= 0 || this._y + this._r >= height) this._vel[1] = -this._vel[1];
    }
    
    getRandom(min, max) { return min + Math.random() * (max - min + 1); } 


}