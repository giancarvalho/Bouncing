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
    addStartToButton();
    toggleModal();
}

function toggleModal() {
    modal.classList.toggle("hidden");
}

function addStartToButton() {
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", start, false);
}

function firstRun() {
    modal.innerHTML = StartScreen();
    addStartToButton();
}

let game = new Game(browser);
firstRun();
