import iBouncingBall from "./BouncingBall";
import Game from "./Game";
import PinkForm from "./PinkForm";

export default class Friend extends iBouncingBall {
    constructor(
        x: number,
        y: number,
        radius: number,
        color: string,
        speedX: number,
        speedY: number,
        context: any
    ) {
        super({ x, y, radius, color, speedX, speedY, context });
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.context = context;
    }
    updateState(screenWidth: any, screenHeight: any, game: Game) {
        this.x += this.speedX;
        this.y += this.speedY;

        this.draw();
        this.checkOutOfScreen(screenWidth, screenHeight);
        this.checkColision(game);
    }

    draw() {
        this.drawCircle(this.x, this.y, this.radius, this.color);
    }

    checkColision(game: Game) {
        const dist = Math.sqrt(
            (game.player.x - this.x) ** 2 + (game.player.y - this.y) ** 2
        );

        if (dist <= game.player.radius + this.radius) {
            game.player.changeForm(PinkForm);
            game.deleteCircle(this.id);
            setTimeout(() => {
                game.player.returnToNormal();
            }, 3000);
        }
    }
}
