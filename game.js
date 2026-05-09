const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const game = document.getElementById("game");
const score = document.getElementById("score");

let playerX = 280;
let enemyY = 10;
let enemyX = Math.random() * 560;
let s = 0;

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") playerX -= 20;
    if (e.key === "ArrowRight") playerX += 20;

    playerX = Math.max(10, Math.min(560, playerX));
    player.style.left = playerX + "px";
});

function loop() {
    if (s < 25) {
        enemyY += 2.5;
    }
    else {
        enemyY += 5;
    }
    enemy.style.top = enemyY + "px";
    enemy.style.left = enemyX + "px";

    if (enemyY > 400) {
        s += 1;
        score.textContent = "Score: " + s;
        enemyY = 0;
        enemyX = Math.random() * 560;
    }

    const p = player.getBoundingClientRect();
    const e = enemy.getBoundingClientRect();

    if (!(p.right < e.left || p.left > e.right || p.bottom < e.top || p.top > e.bottom)) {
        alert("Game Over!");
        s = 0;
        enemyY = 0;
        enemyX = Math.random() * 560;
    }

    requestAnimationFrame(loop);
}

loop();
