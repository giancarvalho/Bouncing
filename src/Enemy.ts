import BouncingBall from "./BouncingBall";
import Game from "./Game";
import Ball from "./interfaces/Ball";
import Player from "./Player";

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

    updateState(
        screenWidth: any,
        screenHeight: any,
        player: Player,
        game: Game
    ) {
        this.x += this.speedX;
        this.y += this.speedY;

        this.draw();
        this.checkOutOfScreen(screenWidth, screenHeight);
        this.checkColision(player, game);
    }

    checkColision(player: Player, game: Game) {
        const dist = Math.sqrt(
            (player.x - this.x) ** 2 + (player.y - this.y) ** 2
        );

        if (dist <= player.radius + this.radius) {
            game.endGame();
        }
    }
}
