// IMPORT MODULES under test here:
// import example from '../src/example.js';
import resultChecker from '../result-checker.js';

const test = QUnit.test;

test('If the users throw is the same as the computers throw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getRandomThrow = 'rock';
    const userThrow = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const checkResult = resultChecker(userThrow, getRandomThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkResult, 'draw');
});
test('If the users throw loses to the computers throw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'rock';
    const getRandomThrow = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const checkResult = resultChecker(userThrow, getRandomThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkResult, 'win');
});
test('If the users throw wins against the computers throw', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userThrow = 'rock';
    const getRandomThrow = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const checkResult = resultChecker(userThrow, getRandomThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(checkResult, 'loss');
});
