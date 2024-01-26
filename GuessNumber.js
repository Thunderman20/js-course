var minNum = 1;
var maxNum = 100;
var answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(`answer:${answer}`);
let attempts = 0;
let guess;

var input = document.createElement("input");
input.setAttribute("type", "text");
input.style.backgroundColor = "black";
input.style.color = "white";
var h1 = document.createElement("h1");
h1.setAttribute("id", "myH1");
document.body.append(h1);
document.body.append(input);
var hint = document.getElementById("myH1");

hint.innerText = `Guess a number between ${minNum} and ${maxNum} `;
input.addEventListener("change", () => {
  document.body.style.backgroundColor = "white";

  let running = true;
  guess = input.value;
  console.log(`guess:${guess}`);
  while (running) {
    guess = Number(guess);
    if (isNaN(guess)) {
      hint.innerText = `Please Enter a Number`;
      input.value = "";
    } else if (guess < minNum || guess > maxNum) {
      hint.innerText = `Please Enter valid number`;
      input.value = "";
    } else {
      attempts++;
      hint.innerText = ` your Guess is ${input.value}`;
      if (guess < answer) {
        hint.innerText = `${guess} is too low`;
        input.value = "";
      } else if (guess > answer) {
        hint.innerText = `${guess} is too High`;
        input.value = "";
      } else {
        hint.innerText = `${guess} is equal to ${answer} you win. it took you ${attempts} attempts`;
        input.value = "";
        document.body.style.backgroundColor = "cadetblue";
        answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        console.log(`answer:${answer}`);
        attempts = 0;
      }
    }
    running = false;
  }
});
