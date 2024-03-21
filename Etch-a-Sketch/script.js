let num_box;

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  document.querySelector(".container").replaceChildren("");

  num_box = 0;
  num_box = prompt("insert a number of rows");
  if (Number(num_box) > 100) {
    return;
  }

  /* 
looping on J and I to create rows, and columns of boxes
*/

  for (let j = 1; j <= Number(num_box); j++) {
    document
      .querySelector(".container")
      .appendChild(document.createElement("div"));
    for (let i = 1; i <= Number(num_box); i++) {
      document
        .querySelector(".container")
        .lastElementChild.appendChild(document.createElement("div"));
    }
  }

  const childNodes = document.querySelector(".container").childNodes;

  for (let child of childNodes) {
    for (let box of child.childNodes) {
      let opacity = 0;
      box.addEventListener("mouseover", () => {
        opacity += 1;
        if (opacity < 10) {
          const r = Math.floor(Math.random() * 255);
          const g = Math.floor(Math.random() * 255);
          const b = Math.floor(Math.random() * 255);
          box.setAttribute(
            "style",
            `background-color: RGB(${r},${g},${b}); opacity: ${opacity}`
          );
        } else {
          box.setAttribute("style", `background-color: RGB(0,0,0)`);
        }
      });
    }
  }
});
