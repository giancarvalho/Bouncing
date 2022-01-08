import BouncingBall from "./BouncingBall";
import Ball from "./interfaces/Ball";

export default class Enemy extends BouncingBall {
    constructor(
        x: number,
        y: number,
        radius: number,
        color: string,
        speedX: number,
        speedY: number,
        context: any
    ) {
        super({ x, y, radius, color, context, speedY, speedX });
        this.speedX = speedX;
        this.speedY = speedY;
    }

    draw() {
        this.drawCircle(this.x, this.y, this.radius, this.color);
    }

    updateState(screenWidth: any, screenHeight: any) {
        this.x += this.speedX;
        this.y += this.speedY;

        this.draw();
        this.checkOutOfScreen(screenWidth, screenHeight);
    }
}
