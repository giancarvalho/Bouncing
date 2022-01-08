import Enemy from "./Enemy";

import Player from "./Player";

export default class Game {
    screenWidth: any;
    screenHeight: any;
    canvas: HTMLCanvasElement;
    player: Player;
    enemies: Enemy[];

    context: CanvasRenderingContext2D;
    window: any;
    fps: number;
    intervalId: any;
    score: number;

    constructor(
        screenWidth: any,
        screenHeight: any,
        canvas: HTMLCanvasElement,
        window: any
    ) {
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
        this.canvas = canvas;
        this.player;
        this.enemies;
        this.context;
        this.window = window;
        this.score = 0;
        this.fps = 1000 / 60;
        this.intervalId;

        this.configCanvas();
        this.configPlayers();
    }

    configPlayers() {
        this.player = new Player(
            this.screenWidth / 2,
            this.screenHeight / 2,
            20,
            "red",
            this.context
        );
        this.enemies = [
            new Enemy(0, 0, 10, "green", 15, 15, this.context),
            new Enemy(10, 10, 10, "green", 5, 5, this.context),
            new Enemy(20, 20, 10, "green", 10, 10, this.context),
        ];
        // this.friends = [];
    }

    configCanvas() {
        this.context = this.canvas.getContext("2d");
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
    }

    clearScreen() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    moveMouse(event: { clientX: number; clientY: number }) {
        this.player.x = event.clientX;
        this.player.y = event.clientY;
    }

    handleEnemy() {
        this.enemies.map((enemy) => {
            enemy.updateState(this.screenWidth, this.screenHeight);
            this.checkColision(enemy);
        });
    }

    // handleFriend() {
    //     this.friends.map((friend) => {
    //         friend.x += friend.speedX;
    //         friend.y += friend.speedY;

    //         friend.draw(friend.x, friend.y);
    //         friend.checkEnemyOutOfScreen(this.screenWidth, this.screenHeight);
    //         this.checkColision(friend);
    // //     });
    // }

    checkColision(enemy: Enemy) {
        const dist = Math.sqrt(
            (this.player.x - enemy.x) ** 2 + (this.player.y - enemy.y) ** 2
        );
        if (dist <= this.player.radius + enemy.radius) {
            this.endGame();
        }
    }

    increaseDificulty() {
        this.score += 10;
        this.enemies.push(
            new Enemy(
                this.screenWidth * Math.random(),
                0,
                10,
                "green",
                5,
                5,
                this.context
            )
        );
        this.player.increaseSize();
    }

    // addFriend() {
    //     this.friends.push(
    //         new Friend(
    //             this.screenWidth * Math.random(),
    //             0,
    //             10,
    //             "blue",
    //             5,
    //             5,
    //             this.context
    //         )
    //     );
    // }

    turn() {
        let nTurn = 0;
        setInterval(() => {
            nTurn++;
            this.increaseDificulty();

            // if (nTurn % 2 === 0) this.addFriend();
        }, 2000);
    }

    endGame() {
        alert(`Voce fez ${this.score} pontos`);
        this.clearScreen();
        clearInterval(this.intervalId);
        this.enemies = [];

        this.window.location.reload();
    }

    gameLoop() {
        this.clearScreen();
        this.player.draw();
        this.handleEnemy();
        // this.handleFriend();
    }

    start() {
        this.intervalId = setInterval(() => {
            this.gameLoop();
        }, this.fps);
        this.turn();
    }
}
