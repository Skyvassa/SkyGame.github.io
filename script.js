// Potential Music Solution https://stackoverflow.com/questions/13402336/play-sound-file-in-a-web-page-in-the-background

const submitBtn = document.querySelector('.submit');
const openHint = document.querySelector('.hint');

openHint.addEventListener('click', presentHint);
submitBtn.addEventListener('click', submitAnswer);


function presentHint() {
    console.log("This Hint is Working")
}

function submitAnswer() {
    console.log("This Submit is Working")
}