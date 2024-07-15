function handleKeyBoardKeyUpEvent(event){
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);

    // stop the game by esc
    if(playerPressed === 'Escape'){
        gameOver()
    }

    // expected
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check
    if(playerPressed === expectedAlphabet){
        // console.log('you get a point');
        // console.log('pressed correctly', expectedAlphabet);


        const currentScore = getElementValueById('current-score');
        const newScore = currentScore + 1;
        setElementValueById('current-score', newScore);

        // update score

        // current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // new score
        // const newScore = currentScore + 1;

        // // show update
        // currentScoreElement.innerText = newScore;


        // start new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // console.log('you lost a point');

        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;
        setElementValueById('current-life', newLife);

        if(newLife ===  0){
            // console.log('game over');
            gameOver();

        }





        // current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // reduce
        // const newLife = currentLife - 1;

        // // display
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyBoardKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('random alphabet is', alphabet);

    // set alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}


function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0)
    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getElementValueById('current-score');
    // console.log(lastScore)
    setElementValueById('last-score', lastScore);

    // clear
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}