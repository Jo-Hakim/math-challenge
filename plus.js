const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
let number1 = Math.floor(Math.random() * 100);
let number2 = Math.floor(Math.random() * 100);
const btnDiv = document.querySelector(".buttonDiv");
const checkBtn = document.querySelector(".check");
op = "+";
question.innerHTML = `${number1} ${op} ${number2} = ?`;

function checkAnswer() {
  if (answer.value === "") {
    alert("Enter a number");
    return;
  }

  if (parseInt(answer.value) === number1 + number2) {
    alert("True!");
    answer.disabled = true;
    btnDiv.innerHTML = `
        <button style="background-color: purple; color: white; width: 100px; height: 60px;" onclick="restart()">
          Restart
        </button>
      `;
  } else {
    alert(`False! The answer is ${number1 + number2}`);
    answer.disabled = true;

    btnDiv.innerHTML = `
        <button  style="background-color: purple; color: white; width: 100px; height: 60px;" onclick="restart()">
          Restart
        </button>
      `;
  }
}

checkBtn.addEventListener("click", checkAnswer);

function restart() {
  number1 = Math.floor(Math.random() * 100);
  number2 = Math.floor(Math.random() * 100);
  question.innerHTML = `${number1} + ${number2} = ?`;
  answer.value = "";
  btnDiv.innerHTML = `
        <button class="check" style="color: white; background-color: purple; height: 60px; width: 100px;" onclick="checkAnswer()">
          check
        </button>
      `;
  answer.disabled = false;

  checkBtn.addEventListener("click", checkAnswer);
}
