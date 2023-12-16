import data from "./data.js";

const getAverageHtml = () => {
    const totalScore = data.reduce((accumulator, item) => {
        return accumulator + item.score;
    }, 0);

    const averageScore = totalScore / data.length;
    return `<span class="result__average-result-text">${averageScore.toFixed()}</span>`;
};

const getResultSummaryHtml = () => {
    let resultSummaryHtml = "";

    data.forEach(item => {
        let bgColor = "";

        switch (item.background) {
            case "reaction bg":
                bgColor = "reaction";
                break;
            case "memory bg":
                bgColor = "memory";
                break;
            case "verbal bg":
                bgColor = "verbal";
                break;
            case "visual bg":
                bgColor = "visual";
                break;
            default:
                break;
        };

        // Title case
        function titleCase(str) {
            return str.toLowerCase().split(" ").map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
        }

        resultSummaryHtml += `
        <div class="summary__result-wrapper ${bgColor}">
            <img
                class="summary__result-icon"
                src="${item.icon}"
                alt=""
            />
            <span class="summary__result-title ${item.textColor}">${titleCase(item.result)}</span>
            <span class="summary__result-text">
                ${item.score}
                <span class="opacity-50"> / 100</span>
            </span>
        </div>
        `
    });
    return resultSummaryHtml;
};

const render = () => {
    document.getElementById("summary-result").innerHTML = getResultSummaryHtml();
    document.getElementById("average-result").innerHTML = getAverageHtml();
}
render();