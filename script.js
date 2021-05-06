// Potential Music Solution https://stackoverflow.com/questions/13402336/play-sound-file-in-a-web-page-in-the-background
// Useful Radio Value https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
// Reset Button https://stackoverflow.com/questions/42049696/is-there-a-way-to-reset-an-html-page-using-a-javascript-function

const submitBtn = document.querySelector('.submit');
const openHint = document.querySelector('.hint');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('.reset');

const gameDisplay = document.querySelector('main');
const answerSet = document.querySelector('.answers')

let questionNumber = 0


// submitBtn.style.display = 'none';
// openHint.style.display = 'none';
gameDisplay.style.display = 'none';
resetBtn.style.display = 'none';

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);

function startGame(event) {
    event.preventDefault();
    gameDisplay.style.display = 'initial';
    startBtn.style.display= 'none';
}
function resetGame(event) {
    event.preventDefault();
    window.location.reload();
}

submitBtn.addEventListener('click', submitAnswer);
openHint.addEventListener('click', presentHint);
// Create button that reveals question/answer/submit button/and hint button.

const questionSet = [
    {
        question: "What year did the film 'Sprited Away' release in the United States?",
        correctAnswer: 3,
        allAnswers: ['2001', '2004', '1999', '2002'],
    },
    {
        question: "Who is the primary composer for Studio Ghibli's productions?",
        correctAnswer: 2,
        allAnswers: ['Michiru Oshima', 'Hans Zimmer', 'Joe Hisaishi', 'Koji Kondo'],
    },
    {
        question: "Which of these actors was not part of the English Voice Cast for 'Princess Mononoke'?",
        correctAnswer: 2,
        allAnswers: ['Billy Crudup', 'Billy Bob Thornton', 'Kirsten Dunst', 'Claire Danes'],
    },
    {
        question: "How long was 'My Neighbor Totoro' in production for?",
        correctAnswer: 1,
        allAnswers: ['16 Months', '8 Months', '24 Months', '14 Months'],
    },
    {
        question: "What was the first film directed by co-found Hayao Miyazaki?",
        correctAnswer: 0,
        allAnswers: ['The Castle of Cogliostro', 'My Neighbor Totoro', 'Spirited Away', 'Nausicaa of the Valley of the Wind'],
    },
];

const hintArray = [
    "It was the same year the Winter Olympics were held in Salt Lake City, Utah.", 
    "A lot of people say they love a good cup of ___ in the morning.", 
    "The odd one out was a famous child actor/actress.", 
    "It's less than one might expect.", 
    "It's not one of Studio Ghibli's more famous films."
]
let currentScore = document.querySelector('#score')
let currentQuestion = document.querySelector('.questions')
let currentHint = document.querySelector('#hint')
let currentAnsA = document.querySelector('#optionA')
let currentAnsB = document.querySelector('#optionB')
let currentAnsC = document.querySelector('#optionC')
let currentAnsD = document.querySelector('#optionD')

let score = 0

currentQuestion.textContent = questionSet[questionNumber].question;
currentAnsA.textContent = questionSet[questionNumber].allAnswers[0];
currentAnsB.textContent = questionSet[questionNumber].allAnswers[1];
currentAnsC.textContent = questionSet[questionNumber].allAnswers[2];
currentAnsD.textContent = questionSet[questionNumber].allAnswers[3];
currentHint.textContent = "";

// Every time the submit button is clicked, the function submitAnswer should review the questionArray, increase the array selected by one, and replace the question
// with the new question. This increase of i should also reflect on the answers array, which should also increase by one and replace all li in their seperate fields. 

// Every time an answer is selected, need to take the array location from
// the set of answers, and compare it to the correct answer's # / location.
// If they match, add 1 to score. If don't, do not add point and move on.

function submitAnswer(event) {
    event.preventDefault();
    submittedAnswer = 0
    if (document.querySelector('#answerA').checked) {
        submittedAnswer = parseInt(document.querySelector('#answerA').value);
    } else if (document.querySelector('#answerB').checked) {
        submittedAnswer = parseInt(document.querySelector('#answerB').value);
    } else if (document.querySelector('#answerC').checked) {
        submittedAnswer = parseInt(document.querySelector('#answerC').value);
    } else if (document.querySelector('#answerD').checked) {
        submittedAnswer = parseInt(document.querySelector('#answerD').value);
    } else {
        console.log("You need to select an Answer")
    }
    console.log("This Submit is Working");
    if (submittedAnswer === questionSet[questionNumber].correctAnswer) {
        score += 1;
        console.log(score);
        console.log("Correct Answer!");
    } else {
        console.log(score);
        console.log("Sorry, that is not the right answer");
    }
    if (questionNumber === (questionSet.length - 1)) {
        currentScore.textContent = (`${score}/5`)
        currentQuestion.textContent = "End of Questions!";
        answerSet.style.display = 'none';
        resetBtn.style.display = 'initial';
        return console.log("End of Questions!");
    } else {
        currentScore.textContent = (`${score}/5`)
        questionNumber += 1;
        currentQuestion.textContent = questionSet[questionNumber].question;
        currentAnsA.textContent = questionSet[questionNumber].allAnswers[0];
        currentAnsB.textContent = questionSet[questionNumber].allAnswers[1];
        currentAnsC.textContent = questionSet[questionNumber].allAnswers[2];
        currentAnsD.textContent = questionSet[questionNumber].allAnswers[3];
        currentHint.textContent = "";
        
        console.log(questionNumber);
    }
}

function presentHint() {
    console.log("This Hint is Working")
    currentHint.innerText = hintArray[questionNumber];
}

// Seperate Arrays for Qustions and for Answers. When Submitted Answer is
// equal to true anser (true), should move to next array option.

// If use Object, need to compare value to "given answer" inside object paired along
// with array. If true, correct and continue.