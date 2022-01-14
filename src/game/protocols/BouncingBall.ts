import Circle from "./Circle";
import iBall from "../../protocols/Ball";
import Game from "../Game";

interface iBouncingBall extends iBall {
    speedX: number;
    speedY: number;
}

export default abstract class BouncingBall extends Circle {
    speedX: number;
    speedY: number;

    constructor({
        x,
        y,
        radius,
        context,
        color,
        speedX,
        speedY,
    }: iBouncingBall) {
        super({ x, y, radius, color, context });
        this.speedX = speedX;
        this.speedY = speedY;
    }

    abstract draw(): any;

    checkOutOfScreen(screenWidth: any, screenHeight: any) {
        if (this.x + this.radius > screenWidth || this.x + this.radius < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.radius > screenHeight || this.y + this.radius < 0) {
            this.speedY *= -1;
        }
    }
}
