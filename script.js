// define variables for elements in html
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const scoreDiv = document.getElementById("scoreContainer");

//questions
let questions = [
    {
        question: "Who created JavaScript?",
        choiceA: "Brendan Eich",
        choiceB: "Elon Musk",
        choiceC: "Steve Jobs",
        correct: "A"
    },
    {
        question: "What year was Javascript orginally created?",
        choiceA: "2008",
        choiceB: "1995",
        choiceC: "2001",
        correct: "B"
    },
    {
        question: "What was JavaScript orginally called?",
        choiceA: "WebXY",
        choiceB: "Net Time",
        choiceC: "Mocha",
        correct: "C"
    },
]

//variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
const questionTime = 10;
let count = 0;
let timer;
let score = 0;

//render question
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener('click', startQuiz);

//start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter, 1000);
}

//render timer
function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        count++;
    } else {
        count = 0;
        if ((runningQuestion < lastQuestion)) {
            runningQuestion++;
            renderQuestion();
        } else {
            let timer = setInterval(counterRender, 1000);
            clearInterval(timer);
            scoreRender();
        }
    }
}

//check answers
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score++;
    }
    counter = 0;
    if ((runningQuestion < lastQuestion)) {
        runningQuestion++;
        renderQuestion();
    }
    else {
        clearInterval(timer);
        scoreRender();
    }
}

//render score
function scoreRender() {
    scoreDiv.style.display = "block";
    const scorePercent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML += "<p>" + scorePercent + "%</p>";
}
