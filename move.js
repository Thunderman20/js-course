function move() {
  function setupContainer() {
    const container = document.createElement("section");
    const form = document.createElement("div");
    form.setAttribute("id", "myBox");
    document.body.append(container);
    container.append(form);

    const previousSibling = container.previousElementSibling;
    let computedWidth =
      window.getComputedStyle(previousSibling).webkitLogicalWidth;

    
    container.style.border = "groove";
    container.style.flex = "1 0 1fr";

    container.style.height = "100vh";
    container.style.marginBottom = "50px";

    form.textContent = "😀";

    form.style.backgroundColor = "lightblue";
    form.style.width = "0px";
    form.style.height = "0px";
    form.style.borderRadius = "50%";

    form.style.fontSize = "2rem";
    form.style.display = "flexbox";
    form.style.justifyContent = "center";
    form.style.alignItems = "center";
    form.style.textAlign = "center";
    form.style.position = "relative";
    form.style.transition = "smooth 1s";

    const moveAmount = 10;
    let x = 0;
    let y = 0;

    document.addEventListener("keydown", (e) => {
      form.textContent = "🥰";
      form.style.backgroundColor = "tomato";
    });

    document.addEventListener("keydown", (e) => {
      if (e.key.startsWith("Arrow")) {
        form.classList.add("smooth-transition");
        switch (e.key) {
          case "ArrowUp":
            e.preventDefault();
            y -= moveAmount;
            break;
          case "ArrowDown":
            e.preventDefault();
            y += moveAmount;
            break;
          case "ArrowLeft":
            e.preventDefault();
            x -= moveAmount;
            break;
          case "ArrowRight":
            e.preventDefault();
            x += moveAmount;
            break;
        }

        x = Math.max(0, Math.min(x, container.clientWidth - form.offsetWidth));
        y = Math.max(
          0,
          Math.min(y, container.clientHeight - form.offsetHeight)
        );
        form.style.top = `${y}px`;
        form.style.left = `${x}px`;
      }
    });

    document.addEventListener("keyup", (e) => {
      form.textContent = "😀";
      form.style.backgroundColor = "lightblue";
    });
  }

  function handleResize() {
    console.log("Window resized!");
    
    // Call the setup function on resize to update layout or styles
    setupContainer();
  }

  // Initial setup
  setupContainer();

  // Attach the event listener to the window
  window.addEventListener("resize", handleResize);
}

export default move;
