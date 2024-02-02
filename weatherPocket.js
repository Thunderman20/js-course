export default function WeatherPocket(){
  const wrapper = document.createElement("section");
  document.body.appendChild(wrapper);
  const from = document.createElement("form");
  wrapper.appendChild(from);
  const cityInput = document.createElement("input");
  cityInput.setAttribute("type", "text");
  cityInput.setAttribute("class", "cityInput");
  cityInput.setAttribute("placeholder", "Enter city");
  from.appendChild(cityInput);
  const submit = document.createElement("button");
  from.appendChild(submit);
  submit.setAttribute("type", "submit");
  submit.innerText = "Get Weather";
  function setUpWrapperAndForm() {
    const previousSibling = wrapper.previousElementSibling;
    console.log(previousSibling);
      const computedWidth =
        window.getComputedStyle(previousSibling).webkitLogicalWidth;
    wrapper.style.height = "100%";
    wrapper.style.width=computedWidth;
    wrapper.style.fontFamily = "arial,sans sarif";
    wrapper.style.border = "groove";
    wrapper.style.backgroundColor = "hsl(0,0%,95%)";
    wrapper.style.marginTop = "20px";
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    
 

  from.style.backgroundColor = "cadetblue";
  from.style.margin = "20px";
  from.style.marginTop = "20px";
  from.style.flex = "1";
  from.style.boxShadow = "2px 2px 2px hsla(0,0%,0%,0.5)";
  
  cityInput.style.padding = "20px";
  cityInput.style.fontSize = "2rem";
  cityInput.style.fontWeight = "bold";
  cityInput.style.border = "2px solid hsla(0,0%,20%,0.3)";
  cityInput.style.borderRadius = "10px";
  cityInput.style.margin = "10px";
  cityInput.style.width = "300px";
  
  submit.style.padding = "10px 20px";
  submit.style.margin = "20px";
  submit.style.fontSize = "20px";
  submit.style.fontWeight = "bold";
  submit.style.backgroundColor = "hsl(132,39%,50%)";
  submit.style.color = "white";
  submit.style.border = "none";
  submit.style.borderRadius = "5px";
  submit.style.height = getComputedStyle(cityInput).webkitLogicalHeight;
  //8baa2e36dbce04755b6ebd6d5c3e828c
  
  //weather App
  
  const apiKey = "8baa2e36dbce04755b6ebd6d5c3e828c";
  
  from.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = cityInput.value;
    if (city) {
      try {
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
      } catch (error) {
        
        displayError("Please enter a city");
      }
  
   
  }});
  
  async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    console.log(response);
    if (!response.ok) {
      throw new Error("could not fetch data");
    }
    return await response.json();
  }
  function displayWeatherInfo(data) {
    const {
      name: city,
      main: { temp, humidity },
      weather: [{ description, id }],
    } = data;
  
    const existingCard = document.getElementById("weatherCard");
    if (existingCard) {
      existingCard.remove();
    }
  
    // Create a new card
    const card = renderCard(
      !city?"":city,
      `${(temp - 273.15).toFixed(1)}°C ${((temp - 273.15) / 0.5556 + 32).toFixed(1)}°F`,
      `Humidity: ${humidity}%`,
      `Description: ${description}`,
      getWeatherEmoji(id),null
    );
  
    // Append the new card to the wrapper
    wrapper.appendChild(card);
  }
  
  function getWeatherEmoji(weatherId) {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "⛈";
      case weatherId >= 300 && weatherId < 400:
        return "🌧";
      case weatherId >= 500 && weatherId < 600:
        return "🌧";
      case weatherId >= 600 && weatherId < 700:
        return "❄";
      case weatherId >= 700 && weatherId < 800:
        return "🌫";
      case weatherId === 800:
        return "☀";
      case weatherId >= 801 && weatherId < 810:
        return "☁";
      default:
        "?";
    }
  }
  function displayError(message) {
    const existingCard = document.getElementById("weatherCard");
    if (existingCard) {
      existingCard.remove();
    }
    
   
    const card = renderCard(null,null,null,null,null, message);
    wrapper.appendChild(card);
    
  }
  function renderCard(
   
    cityDisplayInput,
    tempDisplayInput,
    humidityDisplayInput,
    descDisplayInput,
    weatherEmojiInput,
    errorDisplayInput
  ) {
    const card = document.createElement("div");
    card.setAttribute("id","weatherCard");
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
  
    const descDisplay = document.createElement("p");
  
    const weatherEmoji = document.createElement("p");
    const errorDisplay = document.createElement("p");
  
    const pElements = Array.from(card.getElementsByTagName("p"));
    pElements.forEach((pElement) => {
      pElement.style.fontSize = "1.5rem";
      pElement.style.margin = "5px 0";
    });
    const titleDisplay = Array.from([cityDisplay, tempDisplay]);
    titleDisplay.forEach((title) => {
      title.style.fontSize = "3.5rem";
      title.style.fontWeight = "bold";
      title.style.color = "hsla(0,0%,0%,0.75)";
      title.style.marginBottom = "25px";
    });
  
    card.style.background =
      "linear-gradient(180deg,hsl(210, 100%, 75%),hsl(40, 100%, 75%))";
    card.style.padding = "0 50px";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.flexDirection = "column";
    card.style.boxShadow = "2px 2px 2px hsla(0,0%,0%,0.5)";
    cityDisplay.fontSize = "3.5rem";
    cityDisplay.marginTop = "0";
    cityDisplay.marginBottom = "25px";
  
    descDisplay.style.fontStyle = "italic";
  
    humidityDisplay.style.fontWeight = "bold";
    humidityDisplay.style.marginBottom = "25px";
  
    weatherEmoji.style.margin = "0";
    weatherEmoji.style.fontSize = "7rem";
    descDisplay.style.fontWeight = "bold";
    descDisplay.style.fontSize = "2rem";
    errorDisplay.style.fontSize = "2.5rem";
    errorDisplay.style.fontWeight = "bold";
    errorDisplay.style.color = "hsla(0,0%,0%,0.75)";
    // Append display elements to the card
  
  
    if (errorDisplayInput) {
      
      
      card.appendChild(errorDisplay);
      errorDisplay.innerText = errorDisplayInput;
    } else {
      
      card.appendChild(cityDisplay);
      card.appendChild(tempDisplay);
      card.appendChild(humidityDisplay);
      card.appendChild(descDisplay);
      card.appendChild(weatherEmoji);
    }
    cityDisplay.innerText = cityDisplayInput;
    tempDisplay.innerText = tempDisplayInput;
    humidityDisplay.innerText = humidityDisplayInput;
    descDisplay.innerText = descDisplayInput;
    weatherEmoji.innerText = weatherEmojiInput;
    errorDisplay.innerText = errorDisplayInput;
    return card;
  }
}
  function handleResize() {
    console.log("Window resized!");
    
    // Call the setup function on resize to update layout or styles
    
    setUpWrapperAndForm();
  }

  // Initial setup
  setUpWrapperAndForm();

  // Attach the event listener to the window
  window.addEventListener("resize", handleResize);
}
