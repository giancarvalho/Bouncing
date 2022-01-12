import Game from "./game/Game";
import iScore from "./interfaces/Score";
import StartScreen from "./components/StartScreen";
import ReplayScreen from "./components/ReplayScreen";
const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const modal = document.querySelector("#modal");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const savedScore: iScore[] = [];
const browser = {
    screenWidth,
    screenHeight,
    canvas,
    window,
    end,
    savedScore,
};

canvas.addEventListener("mousemove", (event) => {
    game.moveMouse(event);
});

function start() {
    game.start();
    toggleModal();
}

function end() {
    game = new Game(browser);
    modal.innerHTML = ReplayScreen(savedScore);
    toggleModal();
}

function toggleModal() {
    modal.classList.toggle("hidden");
}

function firstRun() {
    modal.innerHTML = ReplayScreen(savedScore);
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", start, false);
}

let game = new Game(browser);
firstRun();
