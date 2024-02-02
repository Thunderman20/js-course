import generateHSLAColor from "./generateHSLAColors.js";
export default function Stopwatch() {
  const section = document.createElement("section");
const stopWatchH1 = document.createElement("h1");
const stopWatchcontainer = document.createElement("div");
const stopWatchDisplay = document.createElement("div");
const stopWatchControls = document.createElement("div");
const ControlsStartBtn = document.createElement("button");
const ControlsStopBtn = document.createElement("button");
const ControlsResetBtn = document.createElement("button");

document.body.append(section);
section.append(stopWatchH1);
section.append(stopWatchcontainer);
stopWatchcontainer.append(stopWatchDisplay);
stopWatchcontainer.append(stopWatchControls);
stopWatchControls.append(ControlsStartBtn);
stopWatchControls.append(ControlsStopBtn);
stopWatchControls.append(ControlsResetBtn);

stopWatchH1.setAttribute("id", "myH1");
stopWatchH1.innerText = "Stopwatch";
stopWatchcontainer.setAttribute("id", "container");
stopWatchDisplay.setAttribute("id", "display");
stopWatchDisplay.innerText = "00:00:00:00";
stopWatchControls.setAttribute("id", "controls");
ControlsStartBtn.setAttribute("id", "startBtn");
ControlsStartBtn.innerText = "Start";
ControlsStopBtn.setAttribute("id", "stopBtn");
ControlsStopBtn.innerText = "Stop";
ControlsResetBtn.setAttribute("id", "resetBtn");
ControlsResetBtn.innerText = "Reset";

section.style.display = "flex";
section.style.flexDirection = "column";
section.style.alignItems = "center";
section.style.border = "groove";
section.style.marginTop = "20px";
section.style.padding = "20px";

stopWatchH1.style.fontSize = "4rem";
stopWatchH1.style.color = generateHSLAColor(0, 0, 25, 1);

stopWatchcontainer.style.display = "flex";
stopWatchcontainer.style.flexDirection = "column";
stopWatchcontainer.style.alignItems = "center";
stopWatchcontainer.style.border = "5px solid";
stopWatchcontainer.style.borderRadius = "50px";
stopWatchcontainer.style.padding = "30px";
stopWatchcontainer.style.backgroundColor = "white";

stopWatchDisplay.style.fontSize = "5rem";
stopWatchDisplay.style.fontWeight = "bold";
stopWatchDisplay.style.marginBottom = "25px";
stopWatchDisplay.style.color = generateHSLAColor(0, 0, 30, 1);
stopWatchDisplay.style.textShadow = `2px 2px 2px ${generateHSLAColor(
  0,
  0,
  20,
  1
)}`;

stopWatchControls.querySelectorAll("button").forEach((button) => {
  button.style.fontSize = "1.5rem";
  button.style.fontWeight = "bold";
  button.style.padding = "10px 20px";
  button.style.margin = "5px";
  button.style.minWidth = "125px";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";
  button.style.color = "white";
  button.style.transition = "background-color 1s ease";
});

ControlsStartBtn.style.backgroundColor = generateHSLAColor(115, 100, 40, 1);

function changeHoverStyles(button, color) {
  button.style.backgroundColor = color;
}

ControlsStartBtn.addEventListener("mouseenter", () => {
  changeHoverStyles(ControlsStartBtn, generateHSLAColor(115, 100, 30, 1));
});
ControlsStartBtn.addEventListener("mouseleave", () => {
  changeHoverStyles(ControlsStartBtn, generateHSLAColor(115, 100, 40, 1));
});

ControlsStopBtn.style.backgroundColor = generateHSLAColor(10, 90, 50, 1);
ControlsStopBtn.addEventListener("mouseenter", () => {
  changeHoverStyles(ControlsStopBtn, generateHSLAColor(10, 90, 40, 1));
});
ControlsStopBtn.addEventListener("mouseleave", () => {
  changeHoverStyles(ControlsStopBtn, generateHSLAColor(10, 90, 50, 1));
});
ControlsResetBtn.style.backgroundColor = generateHSLAColor(205, 90, 60, 1);
ControlsResetBtn.addEventListener("mouseenter", () => {
  changeHoverStyles(ControlsResetBtn, generateHSLAColor(205, 90, 50, 1));
});
ControlsResetBtn.addEventListener("mouseleave", () => {
  changeHoverStyles(ControlsResetBtn, generateHSLAColor(205, 90, 60, 1));
});

let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

ControlsStartBtn.onclick=start;
ControlsStopBtn.onclick=stop;
ControlsResetBtn.onclick=reset;
function start() {
  if (!isRunning) {
    startTime=Date.now()-elapsedTime;
    timer=setInterval(update,10);
    isRunning=true;
  }
}
function stop() {
  if (isRunning) {
    
    clearInterval(timer);
  }
  
  isRunning=false;
}
function reset() {
  
  clearInterval(timer);
  startTime=0;
  elapsedTime=0;
  isRunning=false;
  stopWatchDisplay.innerText="00:00:00:00";
 
  
}
function update() {
  const currentTime=Date.now();
  elapsedTime=currentTime-startTime;
  let hours=Math.floor(elapsedTime/(1000*60*60));
  let minutes=Math.floor(elapsedTime/(1000*60)%60);
  let seconds=Math.floor(elapsedTime/1000%60);
  let miliSeconds=Math.floor(elapsedTime%1000/10);
  hours=hours.toString().padStart(2,0);
  minutes=minutes.toString().padStart(2,0);
  seconds=seconds.toString().padStart(2,0);
  
  stopWatchDisplay.innerText=`${hours}:${minutes}:${seconds}:${miliSeconds}`;
}
}