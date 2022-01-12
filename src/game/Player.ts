import Circle from "./Circle";
import RedForm from "./RedForm";

export default class Player {
    isVunerable: boolean;
    x: number;
    y: number;
    radius: number;
    color: string;
    context: any;
    form: any;

    constructor(x: number, y: number, radius = 100, context: any) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "red";
        this.context = context;
        this.isVunerable = true;
        this.form = new RedForm({
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

    changeForm(form: any) {
        this.form = new form({
            x: this.x,
            y: this.y,
            radius: this.radius,
            context: this.context,
            color: this.color,
        });

        this.isVunerable = this.form.vunerability;
    }

    returnToNormal() {
        this.changeForm(RedForm);
    }

    updateState() {
        this.form.draw(this.x, this.y);
    }

    gainInvunerability() {
        this.isVunerable = !this.isVunerable;
    }

    increaseSize() {
        this.radius += 2;
        this.form.radius += 2;
    }

    decreaseSize() {
        this.radius -= 1;
        this.form.radius -= 1;
    }
}
