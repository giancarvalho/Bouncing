import Circle from "../protocols/Circle";
import iBall from "../../protocols/Ball";

export default class PinkForm extends Circle {
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
