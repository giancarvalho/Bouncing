import Circle from "./protocols/Circle";
import Player from "./entities/Player";
import iScore from "../protocols/Score";
import Friend from "./entities/Friend";
import Enemy from "./entities/Enemy";

export default class Game {
    screenWidth: any;
    screenHeight: any;
    canvas: HTMLCanvasElement;
    player: Player;
    circles: Circle[];
    end: Function;

    context: CanvasRenderingContext2D;
    window: any;
    fps: number;
    intervalId: any;
    score: number;
    savedScore: iScore[];

    constructor(browser: {
        screenWidth: any;
        screenHeight: any;
        canvas: HTMLCanvasElement;
        window: any;
        end: Function;
        savedScore: iScore[];
    }) {
        this.screenWidth = browser.screenWidth;
        this.screenHeight = browser.screenHeight;
        this.canvas = browser.canvas;
        this.window = browser.window;
        this.savedScore = browser.savedScore;
        this.score = 0;
        this.fps = 1000 / 60;
        this.end = browser.end;

        this.configCanvas();
        this.configPlayers();
    }

    configPlayers() {
        this.player = new Player(
            this.screenWidth / 2,
            this.screenHeight / 2,
            20,
            this.context
        );
        this.circles = [
            new Enemy(0, 0, 10, "green", 15, 15, this.context),
            new Enemy(600, 0, 10, "green", 15, 15, this.context),
            new Enemy(200, 200, 10, "green", 15, 15, this.context),
        ];
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
        this.player.move(event);
    }

    update() {
        this.circles.map((circle) => {
            circle.updateState(this.screenWidth, this.screenHeight, this);
        });
    }

    deleteCircle(id: string) {
        this.circles = this.circles.filter((circle) => circle.id !== id);
    }

    increaseDificulty() {
        this.score += 10;
        this.circles.push(
            new Enemy(
                this.screenWidth * Math.random(),
                0,
                10,
                "green",
                17 * Math.random(),
                17 * Math.random(),
                this.context
            )
        );
        this.player.increaseSize();
    }

    addFriend() {
        this.circles.push(
            new Friend(
                this.screenWidth * Math.random(),
                0,
                10,
                "pink",
                5,
                5,
                this.context
            )
        );
    }

    turn() {
        let nTurn = 0;
        let friendsAdded = 1;

        setInterval(() => {
            nTurn++;
            this.increaseDificulty();

            if (nTurn % (5 * friendsAdded) === 0) {
                this.addFriend();
                friendsAdded++;
            }
        }, 2000);
    }

    endGame() {
        this.savedScore.push({ score: this.score, date: Date.now() });
        clearInterval(this.intervalId);
        this.circles = [];
        setTimeout(() => {
            this.clearScreen();
            this.end();
        }, 500);
    }

    gameLoop() {
        this.clearScreen();
        this.player.updateState();
        this.update();
    }

    start() {
        this.intervalId = setInterval(() => {
            this.gameLoop();
        }, this.fps);
        this.turn();
    }
}
