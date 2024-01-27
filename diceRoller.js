import initializeTemperatureConverter from "./temperatureConverter.js";

export default function diceRoller() {
  const dicerollerContainer = document.createElement("div");
  const diceRollerTitle = document.createElement("h1");
  const diceRollerLabel = document.createElement("label");
  const diceRollerInput = document.createElement("input");
  const diceRollerButton = document.createElement("button");
  const diceRollerResult = document.createElement("div");
  const diceRollerImage = document.createElement("div");
  const hardcodeP = document.getElementById("hardcode");
  //set attributes
  dicerollerContainer.setAttribute("id", "dicerollerContainer");
  diceRollerTitle.innerText = "Dice Roller";
  diceRollerLabel.textContent = "# of Dice";
  diceRollerInput.setAttribute("id", "numOfDice");
  diceRollerInput.setAttribute("type", "number");
  diceRollerInput.setAttribute("value", "1");
  diceRollerInput.setAttribute("min", "1");
  diceRollerButton.innerText = "Roll Dice";
  diceRollerResult.setAttribute("id", "diceResult");
  diceRollerImage.setAttribute("id", "diceImage");
  // append to page
  document.body.insertBefore(dicerollerContainer, hardcodeP);
  dicerollerContainer.append(diceRollerTitle);
  dicerollerContainer.append(diceRollerLabel);
  dicerollerContainer.append(diceRollerInput);
  dicerollerContainer.append(diceRollerButton);
  dicerollerContainer.append(diceRollerResult);
  dicerollerContainer.append(diceRollerImage);
  // set styles
  dicerollerContainer.style.border = "groove";

  dicerollerContainer.style.padding = "20px";
  dicerollerContainer.style.margin = "20px";
  dicerollerContainer.style.fontFamily = "Arial";
  dicerollerContainer.style.textAlign = "center";
  dicerollerContainer.style.fontSize = "2rem";
  dicerollerContainer.style.fontWeight = "bold";

  diceRollerButton.style.boxSizing = "border-box";
  diceRollerButton.style.fontSize = "1.3rem";
  diceRollerButton.style.fontWeight = "bold";
  diceRollerButton.style.padding = "10px";
  diceRollerButton.style.borderRadius = "10px";
  diceRollerButton.style.border = "none";
  diceRollerButton.style.backgroundColor = "dodgerblue";
  diceRollerButton.style.color = "white";
  diceRollerButton.style.cursor = "pointer";
  diceRollerButton.style.marginLeft = "10px";
  diceRollerButton.onmouseover = changeHoverStyles;
  diceRollerButton.onmouseleave = revertHoverStyles;

  diceRollerInput.style.textAlign = "center";
  diceRollerInput.style.fontSize = "2rem";
  diceRollerInput.style.fontWeight = "bold";
  diceRollerInput.style.width = "150px";
  diceRollerInput.style.marginRight = "10px";



  diceRollerLabel.style.marginRight = "10px";



  diceRollerResult.style.margin = "25px";

  //event

  diceRollerButton.onclick = rollDice;

  //Functions

  function rollDice() {
    const numOfDice = diceRollerInput.value;
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
      const value = Math.floor(Math.random() * 6) + 1;
      values.push(value);
      images.push(`<img src="assets/${value}.png" class="diceImage">`);
    }

    diceRollerResult.textContent = `dice: ${values.join(", ")}`;
    diceRollerImage.innerHTML = images.join(" ");

    const diceImages = diceRollerImage.querySelectorAll(".diceImage");
    diceImages.forEach((image) => {
      image.style.width = "50px";
      image.style.margin = "5px";
    });

    console.log(values);
  }

  function changeHoverStyles() {
    diceRollerButton.style.backgroundColor = "blue";
  }
  function revertHoverStyles() {
    diceRollerButton.style.backgroundColor = "dodgerblue";
  }
}
