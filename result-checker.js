
const resultChecker = (getRandomThrow, userThrow) => {
    if (getRandomThrow === userThrow) {
        return 'draw';
    }
    if (getRandomThrow === 'rock' && userThrow === 'paper') {
        return 'win';
    }
    if (getRandomThrow === 'rock' && userThrow === 'scissors') {
        return 'loss';
    }
    if (getRandomThrow === 'paper' && userThrow === 'rock') {
        return 'loss';
    }
    if (getRandomThrow === 'paper' && userThrow === 'scissors') {
        return 'win';
    }
    if (getRandomThrow === 'scissors' && userThrow === 'paper') {
        return 'loss';
    }
    if (getRandomThrow === 'scissors' && userThrow === 'rock') {
        return 'win';
    }

};
export default resultChecker;