import Circle from "./Circle";
import RedShape from "./RedShape";

export default class Player {
    isVunerable: boolean;
    x: number;
    y: number;
    radius: number;
    color: string;
    context: any;
    shape: any;

    constructor(x: number, y: number, radius = 100, context: any) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "red";
        this.context = context;
        this.isVunerable = true;
        this.shape = new RedShape({
            x: this.x,
            y: this.y,
            radius: this.radius,
            context: this.context,
            color: this.color,
        });
    }

    move(event: { clientX: number; clientY: number }) {
        this.x = event.clientX;
        this.y = event.clientY;
    }

    changeShape(Shape: any) {
        this.shape = new Shape({
            x: this.x,
            y: this.y,
            radius: this.radius,
            context: this.context,
            color: this.color,
        });

        this.isVunerable = this.shape.vunerability;
    }

    returnToNormal() {
        this.changeShape(RedShape);
    }

    updateState() {
        this.shape.draw(this.x, this.y);
    }

    gainInvunerability() {
        this.isVunerable = !this.isVunerable;
    }

    increaseSize() {
        this.radius += 1;
        this.shape.radius += 1;
    }

    decreaseSize() {
        this.radius -= 1;
        this.shape.radius -= 1;
    }
}
