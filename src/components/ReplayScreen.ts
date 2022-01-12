import iScore from "../interfaces/Score";
import * as dayjs from "dayjs";

export default function ReplayScreen(scoreHistory: iScore[]) {
    const scores = [
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
        { score: 150, date: new Date() },
    ];
    const lastRecord = scores[scores.length - 1];
    function createHistory() {
        let historyList = "";

        scores.forEach((scoreData) => {
            historyList += `<li><span class="score"> ${scoreData.score} </span>
            
            <span>${dayjs(scoreData.date).format(
                "DD/MM/YY HH:mm"
            )}</span> </li>`;
        });

        return historyList;
    }

    return `<h2>Best Scores</h2>
    <ul>
    <li>Score / Date</li>
    <li class="last"><span class="score"> ${lastRecord.score} </span>
     <span>${dayjs(lastRecord.date).format("DD/MM/YY HH:mm")}</span> </li>
    ${createHistory()}
    </ul>
    <button>Restart</button>
    `;
}
