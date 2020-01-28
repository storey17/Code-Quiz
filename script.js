const quizDiv = document.getElementById('quiz');
const resultsDiv = document.getElementById('results');
const submitButton = document.getElementById('submit');

function generateQuiz(){}

function showResults(){}

// generate quiz
generateQuiz();

// submit button clicked, show results
submitButton.addEventListener('click', showResults);

// quiz questions
const quizQuestions = [
    {
      question: "Who created JavaScript?",
      answers: {
        a: "Steve Jobs",
        b: "Elon Musk",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "What year was Javascript orginally created?",
      answers: {
        a: "2008",
        b: "2001",
        c: "1995"
      },
      correctAnswer: "c"
    },
    {
      question: "What was JavaScript orginally called?",
      answers: {
        a: "WebXY",
        b: "Net Time",
        c: "JS24",
        d: "Mocha"
      },
      correctAnswer: "d"
    }
  ];

  function generateQuiz(){
    const output = [];
  
    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {
          const answers = [];
          
          for(letter in currentQuestion.answers){
            answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    quizDiv.innerHTML = output.join('');
  }