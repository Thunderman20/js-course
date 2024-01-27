function initializeTemperatureConverter() {
  // Example HSLA values
  const hue = 0; // A shade of blue
  const saturation = 0; // 50% saturation
  const lightness = 0; // 70% lightness
  const alpha = 0.3; // 70% opacity

  // Creating an HSLA color value
  const hslaColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  // create elements
  const header =document.createElement("header");
  const section=document.createElement("section");
  const hintList=document.getElementById("formsibling");
  const form = document.createElement("form");
  const h1 = document.createElement("h1");
  const input = document.createElement("input");
  const radioFahrenheit = document.createElement("input");
  const labelToFahrenheit = document.createElement("label");
  const radioCelsius = document.createElement("input");
  const labelToCelsius = document.createElement("label");
  const lineBreak = document.createElement("br");
  const submitBtn = document.createElement("button");
  const result = document.createElement("p");
  // setAttribute
  header.innerText="Header";
  
  h1.innerText = "Tempeature conversion";
  input.setAttribute("type", "number");
  input.setAttribute("id", "textBox");
  input.setAttribute("value", "0");
  radioFahrenheit.setAttribute("type", "radio");
  radioFahrenheit.setAttribute("id", "toFahrenheit");
  radioFahrenheit.setAttribute("name", "unit");
  labelToFahrenheit.setAttribute("for", "toFahrenheit");
  labelToFahrenheit.textContent = "Celsius 🔄 Fahrenheit";
  radioCelsius.setAttribute("type", "radio");
  radioCelsius.setAttribute("id", "toCelsius");
  radioCelsius.setAttribute("name", "unit");
  labelToCelsius.setAttribute("for", "toCelsius");
  labelToCelsius.textContent = "Fahrenheit 🔄 Celsius";
  submitBtn.setAttribute("type", "button");
  submitBtn.innerText = "Submit";
  result.setAttribute("id", "result");
  result.innerText = "Select a unit";
  //set styles
  section.style.border="groove";
  section.style.display="flex";
  section.style.flex="1";
  section.style.flexDirection="row";
  section.style.padding="20px";
  section.style.margin="20px";
  section.style.height="100%";
  hintList.style.width="70%";

  form.style.backgroundColor = "white";
  form.style.textAlign = "center";
  form.style.maxWidth = "350px";
  form.style.margin = "auto";
  form.style.padding = "25px";
  form.style.borderRadius = "5px";
  form.style.boxShadow = `5px 5px 15px ${hslaColor}`;

  h1.style.color = "dodgerblue";

  input.style.width = "50%";
  input.style.textAlign = "center";
  input.style.fontSize = "2em";
  input.style.border = `2px solid ${hslaColor}`;
  input.style.borderRadius = "4px";
  input.style.marginBottom = "15px";

  submitBtn.style.marginTop = "15px";
  submitBtn.style.backgroundColor = "dodgerblue";
  submitBtn.style.fontSize = "1.5em";
  submitBtn.style.border = "none";
  submitBtn.style.padding = "10px 15px";
  submitBtn.style.borderRadius = "5px";
  submitBtn.style.color = "white";
  submitBtn.style.cursor = "pointer";

  result.style.fontSize = "1.75em";
  result.style.fontWeight = "bold";

  function changeHoverStyles() {
    submitBtn.style.backgroundColor = "blue";
  }
  function revertHoverStyles() {
    submitBtn.style.backgroundColor = "dodgerblue";
  }

  submitBtn.onmouseover = changeHoverStyles;
  submitBtn.onmouseleave = revertHoverStyles;

  //end of styling

  
  document.body.prepend(section);
  document.body.insertBefore(header,section);
  section.appendChild(hintList); 
  section.appendChild(form); 
  form.appendChild(h1);
  form.appendChild(input);
  form.appendChild(lineBreak.cloneNode());
  form.appendChild(radioFahrenheit);
  form.appendChild(labelToFahrenheit);
  form.appendChild(lineBreak.cloneNode());
  form.appendChild(radioCelsius);
  form.appendChild(labelToCelsius);
  form.appendChild(lineBreak.cloneNode());
  form.appendChild(submitBtn);
  form.appendChild(result);
  //can't queryselect before appending to html so have to style labels here or 1 by 1
  const labels = document.querySelectorAll("label").forEach((label) => {
    label.style.fontSize = "1.5em";
    label.style.fontWeight = "bold";
  });
  //actual program
  let temp;
  function convert() {
    if (radioFahrenheit.checked) {
      temp = Number(input.value);
      temp = (temp * 9) / 5 + 32;
      result.textContent = temp.toFixed(1) + "°F";
    } else if (radioCelsius.checked) {
      temp = Number(input.value);
      temp = (temp - 32) * (5 / 9);
      result.textContent = temp.toFixed(1) + "°C";
    } else {
      result.textContent = "Select a unit";
    }
    console.log("onclick");
  }
  submitBtn.onclick = convert;

  // Add event listener for "Enter" key on the input field
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      convert();
    }
  });

  // Add event listener for "Tab" key anywhere in the document
  document.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      event.preventDefault(); // Prevent default tab behavior
      cycleRadioButtons(); // Call a function to cycle through radio buttons
    }
  });
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Prevent the default context menu
    input.focus();
    input.value = ""; // Focus on the input field
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace" || event.key === "Home") {
      event.preventDefault(); // Prevent the default context menu
      input.focus();
      input.value = ""; // Focus on the input field
    }
  });

  // Function to cycle through radio buttons
  function cycleRadioButtons() {
    const radioButtons = [radioFahrenheit, radioCelsius];
    const focusedRadioButton =
      document.querySelector(":focus") || radioButtons[0];

    const currentIndex = radioButtons.indexOf(focusedRadioButton);
    const nextIndex = (currentIndex + 1) % radioButtons.length;

    radioButtons[nextIndex].focus();
    radioButtons[nextIndex].checked = true;
  }
}

export default initializeTemperatureConverter;