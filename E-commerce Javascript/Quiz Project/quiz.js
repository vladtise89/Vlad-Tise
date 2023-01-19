const data = [
  {
    id: 1,
    question: "Who won the 1970 World Cup?",
    answers: [
      { text: "Brazil", correct: true },
      { text: "Netherlands", correct: false },
      { text: "Germany", correct: false },
      { text: "France", correct: false },
    ],
  },

  {
    id: 2,
    question:
      "Which player won the Golden Boot (highest scorer) at the 1998 World Cup?",
    answers: [
      { text: "Zinedine Zidane", correct: false },
      { text: "Ronaldo", correct: false },
      { text: "Davor Suker", correct: true },
      { text: "Jaap Stam", correct: false },
    ],
  },
  {
    id: 3,
    question:
      "Which player was the first to score a hat-trick in a World Cup final?",
    answers: [
      { text: "Lionel Messi", correct: false },
      { text: "Geoff Hurst", correct: true },
      { text: "Mario Kempes", correct: false },
      { text: "Johan Cruyff", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "Which player is the overall top goalscorer in the FIFA World Cup with 15 goals?",
    answers: [
      { text: "Gerd Muller", correct: false },
      { text: "Just Fontaine", correct: false },
      { text: "Eusebio", correct: false },
      { text: "Miroslav Klose", correct: true },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const play = document.querySelector(".play");
const submit = document.querySelector(".submit");

let questionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  questionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  selectedAnswer;
  showQuestion(questionIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct answers: ${correctCount} `;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong answers: ${wrongCount} `;
  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  } `;
};

const showQuestion = (qNumber) => {
  if (questionIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
    <input name="Answer" type="radio" id=${index} value=${item.correct}/>
        <label for="1">${item.text}</label>
  </div>

  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      questionIndex++;
      showQuestion(questionIndex);
    } else alert("Please select an answer.");
  });
};

showQuestion(questionIndex);
submitAnswer();
