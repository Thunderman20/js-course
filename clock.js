import generateHSLAColor from "./generateHSLAColors.js";


export default function clock() {
  const clockBody = document.createElement("section");
  const clockContainer = document.createElement("div");
  const clock = document.createElement("div");
  clockContainer.setAttribute("id", "clockContainer");
  clock.innerText = "00:00:00";
  document.body.append(clockBody);
  clockBody.appendChild(clockContainer);
  clockContainer.appendChild(clock);
  clockBody.style.margin = "0";
  clockBody.style.height = "390px";
  clockContainer.style.backgroundImage = "url(./assets/img1.jpg)";
  clockContainer.style.backgroundPosition = "center";
  clockContainer.style.backgroundRepeat = "no-repeat";
  clockContainer.style.backgroundSize = "contain";
  clockContainer.style.height = "100%";
  clockContainer.style.width = "100%";
  clockContainer.style.marginTop = "20px";
  clockContainer.style.display = "flex";
  clockContainer.style.justifyContent = "center";
  clockContainer.style.alignItems = "center";
  clockContainer.style.border = "2px solid";
  clock.style.textAlign = "center";
  clock.style.fontFamily = "monospace";
  clock.style.fontSize = "6rem";
  clock.style.fontWeight = "bold";
  clock.style.color = "white";
  clock.style.textShadow = `2px 2px 2px ${generateHSLAColor(0, 0, 0, 1)}`;
  clock.style.backdropFilter = "blur(5px)";
  clock.style.backgroundColor = generateHSLAColor(90, 100, 50, 0.5);
  clock.style.width = "100%";
  clock.style.whiteSpace = "nowrap";
  clock.style.display = "inline-block";


  function updateClock() {
    const now = new Date();
    
    clock.innerText = `${now.getHours().toString().padStart(2, 0)}:${now.getMinutes().toString().padStart(2, 0)}:${now.getSeconds().toString().padStart(2, 0)} ${now.getHours() >= 12 ? "AM" : "PM"
    }`;
  }
  setInterval(updateClock, 1000);
}
