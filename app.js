/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    display.innerText += e.target.innerText;
  } else if (
    e.target.classList.contains("operator") &&
    "1234567890".includes(display.innerText.at(-1))
  ) {
    display.innerText += e.target.innerText;
  } else if (
    e.target.classList.contains("equals") &&
    "1234567890".includes(display.innerText.at(-1))
  ) {
    display.innerText = calc(display.innerText);
  } else if (e.target.classList.contains("clear")) {
    display.innerText = "";
  }
});

/*-------------------------------- Functions --------------------------------*/
function calc(chars) {
  const arr = [];
  let tempNum = "";
  for (const char of chars) {
    if ("1234567890".includes(char)) {
      tempNum += char;
    } else if ("+-*/".includes(char)) {
      arr.push(parseInt(tempNum), char);
      tempNum = "";
    }
  }
  arr.push(parseInt(tempNum));

  while (arr.length > 1) {
    switch (arr[1]) {
      case "+":
        arr[2] = arr[0] + arr[2];
        break;
      case "-":
        arr[2] = arr[0] - arr[2];
        break;
      case "*":
        arr[2] = arr[0] * arr[2];
        break;
      case "/":
        arr[2] = arr[0] / arr[2];
        break;
    }
    arr.shift();
    arr.shift();
  }

  return arr[0];
}
