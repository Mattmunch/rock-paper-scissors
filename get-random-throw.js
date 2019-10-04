const getRandomThrow = (computerThrow) => {
    if (computerThrow === 0)
        return 'rock';
    if (computerThrow === 1)
        return 'paper';
    if (computerThrow === 2)
        return 'scissors';
};

export default getRandomThrow;