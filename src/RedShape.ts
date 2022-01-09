import Circle from "./Circle";
import iBall from "./interfaces/Ball";

export default class RedShape extends Circle {
    vunerability: true;

    constructor(ballData: iBall) {
        super(ballData);
        this.vunerability = true;
    }

    updateState() {}

    draw(x: number, y: number) {
        super.drawCircle(x, y, this.radius, this.color);
    }
}
