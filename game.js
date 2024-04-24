let timer = 60;
let score = 0;
let rndno = 0;
let timing;
let reset = document.querySelector("#reset-btn");
function makeBubble() {
  let clutter = "";
  let rnd;
  for (let i = 1; i <= 216; i++) {
    rnd = Math.floor(Math.random() * 9);
    clutter += `<div class="bubble">${rnd + 1}</div>`;
  }
  document.querySelector("#bottom-panel").innerHTML = clutter;
}

function timerFunction() {
  timing = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#clock").textContent = timer;
    } else {
      clearInterval(timing);
      document.querySelector(
        "#bottom-panel"
      ).innerHTML = `<h1>Game is Over!!!</h1>`;
    }
  }, 1000);
}

function genHit() {
  rndno = Math.floor(Math.random() * 9);
  document.querySelector("#challenge").textContent = rndno + 1;
}

function incScore() {
  score += 10;
  document.querySelector("#runs").textContent = score;
}

document
  .querySelector("#bottom-panel")
  .addEventListener("click", function (dets) {
    let clicked = Number(dets.target.textContent);
    if (clicked === rndno + 1) {
      incScore();
      makeBubble();
      genHit();
    }
  });

timerFunction();
makeBubble();
genHit();
resetGame();

function resetGame() {
  reset.addEventListener("click", () => {
    document.querySelector("#runs").textContent = 0;
    score = 0;
    clearInterval(timing);
    timer = 60;
    document.querySelector("#clock").textContent = timer;
    timerFunction();
    makeBubble();
    genHit();
  });
}
