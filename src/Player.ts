import Circle from "./Circle";

export default class Player extends Circle {
    constructor(
        x: number,
        y: number,
        radius = 100,
        color = "red",
        context: any
    ) {
        super({ x, y, radius, color, context });
    }

    draw() {
        super.drawCircle(this.x, this.y, this.radius, this.color);
    }
    increaseSize() {
        this.radius += 1;
    }

    decreaseSize() {
        this.radius -= 5;
    }
}
