let button = document.querySelectorAll(".num");
let input = document.querySelector("input");

for (let index = 0; index < button.length; index++) {
  button[index].addEventListener("click", (e) => {
    if (e.target.value != "equal") {
      input.value += button[index].textContent;
    }
  });
}

button[17].addEventListener("click", () => {
  input.value = eval(input.value);
});

button[0].addEventListener("click", () => {
  input.value = "";
});
