let age;
let message;
const container = document.getElementById("container");
const input = document.createElement("input");
const display = document.getElementById("myH1");
display.innerText = "Check Age Below";
input.setAttribute("type", "text");
container.appendChild(input);
input.addEventListener("input", () => {
  const inputValue = parseInt(input.value);
  const inputValueString = input.value;
  if (inputValueString.length === 1 && inputValueString[0] === "0") {
    input.value = ""; // Clear the input value if '0' is the first digit
  }
  if (
    !isNaN(inputValue) &&
    inputValueString.length === 2 &&
    inputValueString[0] !== "0"
  ) {
    display.textContent = "";
    age = inputValue;
    message = age >= 18 ? "hello" : "bye";
    display.textContent = message;
    const existingH2 = document.getElementById("h2");
    if (existingH2) {
      existingH2.remove();
    }
    setTimeout(() => {
      const h2 = document.createElement("h2");
      h2.setAttribute("id", "h2");
      display.parentNode.insertBefore(h2, display.nextSibling);
      h2.innerText = `Check Age Below`;
    }, 2000);
  }
});
