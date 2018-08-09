'use strict';

// // Get the user's name
// var userName = prompt('Hi there! What is your name?');

// alert('Thanks for visiting my site ' + userName + '. You\'re here to learn more about me. I\'m a pretty great person, so I think you\'ll enjoy it.');

// // Ask them five y/n questions

// var answerOne = prompt('Do you memorize people\'s pet\'s names before you remember the human\'s name?').toLowerCase();

// console.log('answerOne',answerOne);

// if (answerOne === 'y' || answerOne === 'yes') {
//     alert('Haha, me too! That\'s a very promising sign');
// } else {
//     alert('That\'s okay, we\'ll try another one'); 
// }

// var answerTwo = prompt('Do you want to cook me delicious food?').toLowerCase();

// console.log('answerTwo',answerTwo);

// if (answerTwo === 'y' || answerTwo === 'yes') {
//     alert('Yum! Just tell me what I can bring.');
// } else {
//     alert('That\'s cool. I\'ll make a great pot of something delicious, like ajiaco.'); 
// }

// var answerThree = prompt('Do you know where I grew up?').toLowerCase();

// console.log('answerThree',answerThree);

// if (answerThree === 'y' || answerThree === 'yes') {
//     alert('You must really be paying attention. I appreciate that.');
// } else {
//     alert('I grew up in Dallas, but lived abroad for five years.'); 
// }

// var answerFour = prompt('Do you know what kind of martial art I studied for two years?').toLowerCase();

// console.log('answerFour',answerFour);

// if (answerFour === 'y' || answerFour === 'yes') {
//     alert('I really miss training. Let me know if you know of a good gym.');
// } else {
//     alert('I did Brazilian JiuJitsu. I started when I want to Rio for four months.')
// }

// var answerFive = prompt('Do you know what kind of dance I like to do, albiet poorly?').toLowerCase();

// console.log('answerFive',answerFive);

// if (answerFive === 'y' || answerFive === 'yes') {
//     alert('Let\'s go dancing!');
// } else {
//     alert('Argentine Tango for the win.')
// }


for (var step = 0; step < 4; step++) {
    var answerSix = prompt('How many years did I live outside of the US?');
    console.log('answerSix', answerSix);
    if (answerSix === '5') {
        alert('Well done! You got it!');
        break;
    } else if (answerSix > 5) {
        alert('That is a great guess, but you\'re a little high.');
    } else {
        alert('That is a good guess, but you\'re low.');
    }
    if (step === 3) {
        alert('That was a great effort, the correct answer was five. We\'re going to go ahead and move on to Question #7.')
    }
    
}    




// for (var step = 0; step < 5; step++) {
//     // do a thing
//     console.log('step', step);
//     alert ('Do you like ' + step + '?');
// }




