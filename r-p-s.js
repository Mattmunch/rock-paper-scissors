import resultChecker from './result-checker.js';


const throwButton = document.getElementById('throwButton');
const winSpan = document.getElementById('win-span');
const lossSpan = document.getElementById('loss-span');
const drawSpan = document.getElementById('draw-span');
const percentageSpan = document.getElementById('percentage-span');
let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;
let winLossPct = 0;

const getRandomThrow = (computerThrow) => {
    if (computerThrow === 0)
        return 'rock';
    if (computerThrow === 1)
        return 'paper';
    if (computerThrow === 2)
        return 'scissors';
};

const roshambeau = () => {
    let computerThrow = Math.floor(Math.random() * 3);
    const computerChoice = getRandomThrow(computerThrow);
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedThrow = selectedRadioButton.value;
    const result = resultChecker(computerChoice, userSelectedThrow);
    return result;

};
const updateSpans = () => {
    lossSpan.textContent = totalLosses;
    winSpan.textContent = totalWins;
    percentageSpan.textContent = winLossPct;
    drawSpan.textContent = totalDraws;
};
  


throwButton.addEventListener('click', () => {

    const declaredWinner = roshambeau();
    if (declaredWinner === 'win') {
        totalWins++;
    } else if (declaredWinner === 'loss'){
        totalLosses++;
    } else totalDraws++;
    
    winLossPct = Math.round(totalWins / (totalDraws + totalLosses + totalWins) * 100);
    updateSpans();



});
