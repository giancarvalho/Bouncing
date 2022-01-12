import iScore from "../interfaces/Score";
import * as dayjs from "dayjs";
import * as localizedFormat from "dayjs/plugin/localizedFormat";

export default function ReplayScreen(scoreHistory: iScore[]) {
    dayjs.extend(localizedFormat);
    const scores = [...scoreHistory];

    const lastRecord = scores.splice(scores.length - 1, 1)[0];

    scores.sort((a, b) => b.score - a.score);

    function createHistory() {
        let historyList = "";

        scores.forEach((scoreData) => {
            historyList += `<li>
            <span class="score"> ${scoreData.score} </span>
            <span class="date">${dayjs(lastRecord.date).format("LLL")}</span>
            </li>`;
        });

        return historyList;
    }

    return `<h2>Best Scores</h2>
    <ul>
    <li>Score / Date</li>
    <li class="last">
    <span class="score"> ${lastRecord.score} </span>
     <span class="date">${dayjs(lastRecord.date).format("LLL")}</span> 
    </li>
    ${createHistory()}
    </ul>
    <button>Restart</button>
    `;
}
