import Game from "./Game";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const modal = document.querySelector("#modal");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const game = new Game(screenWidth, screenHeight, canvas, window);

canvas.addEventListener("mousemove", (event) => {
    game.moveMouse(event);
});

function start() {
    modal.classList.add("hidden");
    game.start();
    console.log("im here");
}

console.log(modal);
modal.addEventListener("click", start);
