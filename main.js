let input = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      input.value += button.textContent;
    } else if (button.classList.contains("operator")) {
      input.value += ` ${button.textContent} `;
    } else if (button.classList.contains("decimal")) {
      if (!input.value.includes(".")) {
        input.value += button.textContent;
      }
    } else if (button.classList.contains("clear")) {
      input.value = "";
    } else if (button.classList.contains("equals")) {
      input.value = eval(input.value);
    }
  });
});
