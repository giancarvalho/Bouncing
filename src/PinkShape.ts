import Circle from "./Circle";
import iBall from "./interfaces/Ball";

export default class PinkShape extends Circle {
    vunerability: false;

    constructor(ballData: iBall) {
        super(ballData);
        this.vunerability = false;
    }

    updateState() {}

    draw(x: number, y: number) {
        super.drawCircle(x, y, this.radius, "pink");
    }
}
