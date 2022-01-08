import iBall from "./interfaces/Ball";

export default abstract class Circle {
    x: number;
    y: number;
    radius: number;
    color: string;
    context: any;

    constructor({ x, y, radius, color, context }: iBall) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.context = context;
    }

    drawCircle(x: number, y: number, radius: number, color: string) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.fill();
    }
}
