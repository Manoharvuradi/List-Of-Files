// function finalResult() {
//   const userInput = document.getElementById("userInputValue").value;
//   const finalResult = eval(userInput);
//   userInput.value = finalResult;
// }

// const check = document.querySelector(".special");
const check = document.querySelector(".special");
check.addEventListener("click", () => {
  const userInput = document.getElementById("userInputValue").value;
  console.log(userInput);
  if (userInput == null) {
    console.log("Hello");
    userInput.innerHTML = "";
  }
});
