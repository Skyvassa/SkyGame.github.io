// Potential Music Solution https://stackoverflow.com/questions/13402336/play-sound-file-in-a-web-page-in-the-background

const submitBtn = document.querySelector('.submit');
const openHint = document.querySelector('.hint');

submitBtn.addEventListener('click', submitAnswer);
openHint.addEventListener('click', presentHint);

const question1 = ("What year did the film 'Sprited Away' release in the United States?")
const question2 = ("Who is the primary composer for Studio Ghibli's productions?")
const question3 = ("Which of these actors was not part of the English Voice Cast for 'Princess Mononoke'?")
const question4 = ("How long was 'My Neighbor Totoro' in production for?")
const question5 = ("What was the first film directed by co-found Hayao Miyazaki?")

const answers1 = ['2001', '2002', '1999', '2004']
const answers2 = ['Michiru Oshima', 'Hans Zimmer', 'Joe Hisaishi', 'Koji Kondo']
const answers3 = ['Billy Crudup', 'Billy Bob Thornton', 'Kristen Dunst', 'Claire Danes']
const answers4 = ['16 Months', '24 Months', '8 Months', '14 Months']
const answers5 = ['My Neighbor Totoro', 'The Castle of Cogliostro', 'Spirited Away', 'Nausicaa of the Valley of the Wind']

const hint1 = ("Test1")
const hint2 = ("Test2")
const hint3 = ("The odd one out was a famous child actor/actress.")
const hint4 = ("It's less than one might expect.")
const hint5 = ("It's not one of Studio Ghibli's more famous films.")

// If need to cheat, rather than an array for each question set, can use an array for each
// question row. IE [2001, Michiru Oshima, Billy Crudup, etc.]

const questionArray = [`${question1}`, `${question2}`, `${question3}`, `${question4}`, `${question5}`]
const answerArray = [answers1, answers2, answers3, answers4, answers5]
const hintArray = [hint1, hint2, hint3, hint4, hint5]

let currentQuestion = document.querySelector('.questions')
let currentHint = document.querySelector('#hint')

let questionNumber = 0

// Every time the submit button is clicked, the function submitAnswer should review the questionArray, increase the array selected by one, and replace the question
// with the new question. This increase of i should also reflect on the answers array, which should also increase by one and replace all li in their seperate fields. 

function submitAnswer(event) {
    event.preventDefault;
    console.log("This Submit is Working");
    if (questionNumber === questionArray.length) {
        return console.log("End of Questions!");
    } else {
        currentQuestion.innerText = questionArray[questionNumber];
        questionNumber += 1;
        console.log(questionNumber);
    }
}
function presentHint() {
    console.log("This Hint is Working")
    questionNumber -= 1;
    currentHint.innerText = hintArray[questionNumber];
    questionNumber += 1;
}

// Seperate Arrays for Qustions and for Answers. When Submitted Answer is
// equal to true anser (true), should move to next array option.