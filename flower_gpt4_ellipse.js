/* My greatest thanks to ChatGPT and OpenAI! @Sailean514 */
// JavaScript
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('DOMContentLoaded', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let angle = 0;
let isAnimationRunning = false; 

function drawGPT4()  {
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(angle);
  fill(	147,112,219);
  noStroke();
  ellipse(0, 0, 350, 350);
  for (let i = 0; i < 6; i++) {
    push();
    rotate(radians(60 * i));
    for (let j = 100; j > 0; j -= 2) {
      let col = map(j, 0, 100, 255, 180);
      fill(col);
      noStroke();
      ellipse(0, -50 - j * 0.2, j, j * 2);
    }
    pop();
  }
  noStroke();
  ellipse(0, 0, 40, 40);
  noFill();
  stroke(30, 30);
  strokeWeight(5);
  angle += 0.01; 
}

function drawGPT4Name() {
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(216, 216, 217);
  text("GPT-4", 0, -230); 
} 

function drawGPT3() {
  fill(98, 177, 143);
  noStroke();
  ellipse(0, 0, 350, 350);
  for (let i = 0; i < 6; i++) {
    push();
    rotate(radians(60 * i));
    for (let j = 100; j > 0; j -= 2) {
      let col = map(j, 0, 100, 255, 180);
      fill(col);
      noStroke();
      ellipse(0, -50 - j * 0.2, j, j * 2);
    }
    pop();
  }
  fill(98, 177, 143);
  noStroke();
  ellipse(0, 0, 40, 40);
  noFill();
  stroke(30, 30);
  strokeWeight(5);
}

function drawGPT3Name() {
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(216, 216, 217);
  text("GPT-3", 0, -230);
}

function setup() {
  canvas = createCanvas(1000, 1000);
  canvas.parent("gptCanvas");
  const toggleAnimationBtn = document.getElementById("toggleAnimationButton");
  toggleAnimationBtn.addEventListener("click", toggleAnimation);
}

function draw() {
  if (isAnimationRunning) {
    background(0,0,0); // 背景色（実行）
    push();
    translate((width / 3.575) * 3, height / 2);
    if (isAnimationRunning)
    rotate(angle);
    drawGPT4();
    drawGPT4Name();
    pop();
    push();
    translate(width / 2, height / 2 - 120);
    if (isAnimationRunning)
    rotate(angle * 5);
    drawGPT3();
    drawGPT3Name();
    pop();
    angle += 0.03; 
  } else {
    background(0,0,0); // 背景色（停止）
    push();
    translate(width / 2, height / 2 - 120);
    drawGPT3();
    drawGPT3Name();
    pop();
    push();
    translate((width / 3) * 1, height / 2.2 - 120);
    drawGPT4();
    drawGPT4Name();
    pop();
  }
}

function toggleAnimation() {
  isAnimationRunning = !isAnimationRunning;
  const toggleAnimationBtn = document.getElementById("toggleAnimationButton");
  if (isAnimationRunning) {
    toggleAnimationBtn.innerHTML = "See you!";
  } else {
    toggleAnimationBtn.innerHTML = "Run!";
  }
  const readyMessage = document.getElementById("ready-message");
  if (isAnimationRunning) {
    readyMessage.style.display = "none";
  } else {
    readyMessage.style.display = "inline";
  }
}