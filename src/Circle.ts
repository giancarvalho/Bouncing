import Game from "./Game";
import iBall from "./interfaces/Ball";
import { v4 as idGenerator } from "uuid";

export default abstract class Circle {
    x: number;
    y: number;
    radius: number;
    color: string;
    context: any;
    id: string;

    constructor({ x, y, radius, color, context }: iBall) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.context = context;
        this.id = idGenerator();
    }

    drawCircle(x: number, y: number, radius: number, color: string) {
        this.context.beginPath();
        this.context.fillStyle = color;
        this.context.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.fill();
    }

    abstract updateState(x: number, y: number, game: Game): void;
}
