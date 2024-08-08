let startTime, endTime;
let timeout;

document.getElementById("box").addEventListener("click", function() {
    if (this.style.backgroundColor === "green") {
        endTime = Date.now();
        let reactionTime = (endTime - startTime) / 1000;
        document.getElementById("result").textContent = `Your reaction time is ${reactionTime} seconds.`;
        clearTimeout(timeout);
    }
});

function changeColor() {
    document.getElementById("box").style.backgroundColor = "green";
    startTime = Date.now();
}

function startGame() {
    let randomTime = Math.floor(Math.random() * 5000) + 2000;
    timeout = setTimeout(changeColor, randomTime);
}

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = "red";
    document.getElementById("result").textContent = "";
    startGame();
});

startGame();
