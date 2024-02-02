export default function PokemanCatcher() {
  const pokemanWrapper = document.createElement("section");
  document.body.append(pokemanWrapper);
  const pokemanInput = document.createElement("input");
  pokemanInput.setAttribute("type", "text");
  pokemanInput.setAttribute("id", "pokemanName");
  pokemanInput.setAttribute("placeholder", "Enter Pokeman Name");

  pokemanWrapper.appendChild(pokemanInput);
  const pokemanfetchBtn = document.createElement("button");
  pokemanfetchBtn.innerText = "Fetch Pokeman";
  pokemanfetchBtn.onclick = fetchData;
  pokemanWrapper.appendChild(pokemanfetchBtn);

  const previousSibling = pokemanWrapper.previousElementSibling;
  const computedWidth =
    window.getComputedStyle(previousSibling).webkitLogicalWidth;
  pokemanWrapper.style.width = computedWidth;
  pokemanWrapper.style.height = "100%";
  pokemanWrapper.style.border = "groove";

  async function fetchData() {
    try {
      const pokemanName = pokemanInput.value.toLowerCase();
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemanName}`
      );
      if (!response.ok) {
        throw new Error("Fuck");
      }
      const data = await response.json();
      console.log(response);
      console.log(data);
      renderImg(data);
    } catch (error) {
      console.error(error);
    }
  }
  function renderImg(data) {
    const pokemanSpriteId = "pokemanSprite";
    const existingImg = document.getElementById(pokemanSpriteId);

    if (existingImg) {
      existingImg.parentNode.removeChild(existingImg);
    }
    const pokemanSprite = document.createElement("img");
    pokemanSprite.setAttribute("src", "");
    pokemanSprite.setAttribute("alt", "Pokeman Sprite");
    pokemanSprite.setAttribute("id", "pokemanSprite");

    pokemanSprite.style.display = "block";

    pokemanSprite.src = data.sprites.front_default;
    pokemanWrapper.appendChild(pokemanSprite);
  }
  pokemanInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchData();
    }
  });
}
