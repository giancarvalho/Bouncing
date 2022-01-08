import Circle from "./Circle";
import iBall from "./interfaces/Ball";

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
        if (this.x > screenWidth || this.x < 0) {
            this.speedX *= -1;
        }
        if (this.y > screenHeight || this.y < 0) {
            this.speedY *= -1;
        }
    }
}
