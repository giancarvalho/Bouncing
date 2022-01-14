import iScore from "../protocols/Score";

export default class LocalStorage {
    static saveScoreHistory(history: iScore[]) {
        if (history.length > 15) {
            history.sort((a, b) => b.score - a.score);
            history.splice(15);
        }

        localStorage.setItem("scoreHistory", JSON.stringify(history));
    }

    static getScoreHistory() {
        const history = JSON.parse(localStorage.getItem("scoreHistory"));

        return history || [];
    }
}
