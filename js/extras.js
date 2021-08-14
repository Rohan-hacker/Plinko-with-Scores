class Extras {
    constructor(x, y, w, h, c) {
        this.body = Bodies.rectangle(x, y, w, h);
        this.w = w;
        this.h = h;
        this.color=c
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.w, this.h);
    }
};