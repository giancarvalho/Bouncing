import Game from "./game/Game";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const modal = document.querySelector("#modal");

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

let game = new Game(screenWidth, screenHeight, canvas, window, end);

canvas.addEventListener("mousemove", (event) => {
    game.moveMouse(event);
});

function start() {
    game.start();
    toggleModal();
}

function end() {
    game = new Game(screenWidth, screenHeight, canvas, window, end);
    toggleModal();
}

function toggleModal() {
    modal.classList.toggle("hidden");
}

modal.addEventListener("click", start);
