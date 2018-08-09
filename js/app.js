'use strict';

var correctAnswers = 0;
var userName;

// Get the user's name
function getName () {
    userName = prompt('Hi there! What is your name?'); 
}

getName();

alert('Thanks for visiting my site ' + userName + '. You\'re here to learn more about me. I\'m a pretty great person, so I think you\'ll enjoy it.');

// Ask them five y/n questions
function questionOne () {
    var answerOne = prompt('Do you memorize people\'s pet\'s names before you remember the human\'s name?').toLowerCase();

    console.log('answerOne',answerOne);

    if (answerOne === 'y' || answerOne === 'yes') {
        alert('Haha, me too! That\'s a very promising sign');
        correctAnswers++;
    } else {
        alert('That\'s okay, we\'ll try another one'); 
    }
}

questionOne();

function questionTwo () {
    var answerTwo = prompt('Do you want to cook me delicious food?').toLowerCase();

    console.log('answerTwo',answerTwo);

    if (answerTwo === 'y' || answerTwo === 'yes') {
        alert('Yum! Just tell me what I can bring.');
        correctAnswers++;

    } else {
        alert('That\'s cool. I\'ll make a great pot of something delicious, like ajiaco.'); 
    }
}

questionTwo();

function questionThree () {
    var answerThree = prompt('Do you know where I grew up?').toLowerCase();

    console.log('answerThree',answerThree);

    if (answerThree === 'y' || answerThree === 'yes') {
        alert('You must really be paying attention. I appreciate that.');
        correctAnswers++;
    } else {
        alert('I grew up in Dallas, but lived abroad for five years.'); 
    }
}

questionThree();

function questionFour () {
    var answerFour = prompt('Do you know what kind of martial art I studied for two years?').toLowerCase();

    console.log('answerFour',answerFour);

    if (answerFour === 'y' || answerFour === 'yes') {
        alert('I really miss training. Let me know if you know of a good gym.');
        correctAnswers++;
    } else {
        alert('I did Brazilian JiuJitsu. I started when I want to Rio for four months.')
    }
}

questionFour();

function questionFive () {
    var answerFive = prompt('Do you know what kind of dance I like to do, albiet poorly?').toLowerCase();

    console.log('answerFive',answerFive);

    if (answerFive === 'y' || answerFive === 'yes') {
        alert('Let\'s go dancing!');
        correctAnswers++;
    } else {
        alert('Argentine Tango for the win.')
    }
}

questionFive();

function questionSix () {
    for (var step = 0; step < 4; step++) {
        var answerSix = prompt('How many years did I live outside of the US?');
        console.log('answerSix', answerSix);

        if (answerSix === '5') {
            alert('Well done! You got it!');
            correctAnswers++;
            break;
        } else if (answerSix > 5) {
            alert('That is a great guess, but you\'re a little high.');
        } else {
            alert('That is a good guess, but you\'re low.');
        }

        if (step === 3) {
            alert('That was a great effort, the correct answer was five. We\'re going to go ahead and move on to Question #7.');
        }
    }    
}

questionSix();

function questionSeven () {
    for (var step = 0; step < 6; step++) {
        var answerSeven = prompt('What is my favorite dog breed?').toLowerCase();
        console.log('answerSeven', answerSeven);

        var favoriteBreeds = ['boxer', 'boston', 'olliedog'];
        var userGuessedCorrectly = false;
        for (var ii = 0; ii < favoriteBreeds.length; ii++) {
            console.log(favoriteBreeds[ii]);
            if(answerSeven === favoriteBreeds[ii]) {
                console.log('puppers');
                userGuessedCorrectly = true;
                correctAnswers++
                
            }
        }

        if(step === 5 || userGuessedCorrectly) {
            alert('Boxers, Bostons, and my dog Ollie are the best!');
            break;
        } else {
            alert('I mean of course I love them too, but they aren\'t my favorite favorite.');
        }
    }
}

questionSeven();

alert('You did so well! You got ' + correctAnswers + ' correct out of seven. Great job ' + userName + '!')



