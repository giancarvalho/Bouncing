import Game from "../Game";
import BouncingBall from "../protocols/BouncingBall";

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

    updateState(screenWidth: any, screenHeight: any, game: Game) {
        this.x += this.speedX;
        this.y += this.speedY;

        this.draw();
        this.checkOutOfScreen(screenWidth, screenHeight);
        this.checkColision(game);
    }

    checkColision(game: Game) {
        const dist = Math.sqrt(
            (game.player.x - this.x) ** 2 + (game.player.y - this.y) ** 2
        );

        if (dist <= game.player.radius + this.radius) {
            if (game.player.isVunerable) game.endGame();
            else {
                game.deleteCircle(this.id);
                game.player.decreaseSize();
            }
        }
    }
}
