import Game from "./game/Game";
import iScore from "./interfaces/Score";
import StartScreen from "./components/StartScreen";
import ReplayScreen from "./components/ReplayScreen";
import LocalStorage from "./utils/LocalStorage";

const canvas: HTMLCanvasElement = document.querySelector("#canvas");
const modal = document.querySelector("#modal");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const savedScore: iScore[] = LocalStorage.getScoreHistory();

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

function toggleModal() {
    modal.classList.toggle("hidden");
}

function addStartToButton() {
    const startButton = document.querySelector("button");
    startButton.addEventListener("click", start, false);
}

function start() {
    game.start();
    toggleModal();
}

function end() {
    game = new Game(browser);
    LocalStorage.saveScoreHistory(savedScore);
    modal.innerHTML = ReplayScreen(savedScore);
    addStartToButton();
    toggleModal();
}

function firstRun() {
    console.log;
    modal.innerHTML = ReplayScreen(savedScore);
    addStartToButton();
}

let game = new Game(browser);
firstRun();
