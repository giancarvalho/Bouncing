import Circle from "../protocols/Circle";
import iBall from "../../protocols/Ball";

export default class RedForm extends Circle {
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
