// Potential Music Solution https://stackoverflow.com/questions/13402336/play-sound-file-in-a-web-page-in-the-background

const submitBtn = document.querySelector('.submit');
const openHint = document.querySelector('.hint');

submitBtn.addEventListener('click', submitAnswer);
openHint.addEventListener('click', presentHint);


const answers1 = ['2001', '2002', '1999', '2004']
const answers2 = ['Michiru Oshima', 'Hans Zimmer', 'Joe Hisaishi', 'Koji Kondo']
const answers3 = ['Billy Crudup', 'Billy Bob Thornton', 'Kristen Dunst', 'Claire Danes']
const answers4 = ['16 Months', '24 Months', '8 Months', '14 Months']
const answers5 = ['My Neighbor Totoro', 'The Castle of Cogliostro', 'Spirited Away', 'Nausicaa of the Valley of the Wind']

function submitAnswer() {
    console.log("This Submit is Working")
    for (i=0; i < questions.length; i++){

    }
}
function presentHint() {
    console.log("This Hint is Working")
}

// Seperate Arrays for Qustions and for Answers. When Submitted Answer is
// equal to true anser (true), should move to next array option.