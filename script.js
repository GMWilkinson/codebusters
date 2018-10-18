const boxes1 = document.querySelectorAll('.boxes1');
const boxes2 = document.querySelectorAll('.boxes2');
const boxes3 = document.querySelectorAll('.boxes3');
const boxes4 = document.querySelectorAll('.boxes4');
const boxes5 = document.querySelectorAll('.boxes5');
const boxes6 = document.querySelectorAll('.boxes6');
const boxes7 = document.querySelectorAll('.boxes7');
const boxes8 = document.querySelectorAll('.boxes8');
const boxes9 = document.querySelectorAll('.boxes9');
const boxes10 = document.querySelectorAll('.boxes10');
const questionPopUps = document.querySelector('#questions');
const answersGroup = document.querySelectorAll('.answers');
const randomQ = document.getElementById('randomQ');
let currentQ;
let correctAnswers = 0;
const winPopUp = document.querySelector('.goodJob');
const losePopUp = document.querySelector('.bad-luck');
const column1 = document.querySelector('.column1');
const column2 = document.querySelector('.column2');
const column3 = document.querySelector('.column3');
const nextQ = document.querySelector('.next-question');
const answerBox = document.querySelector('.answer-box');
const randomAnswers = document.querySelectorAll('.answers');
const title = document.querySelector('h1');
// function loadUp() {
//   loadUpAnimation.innerHTML.style.display = 'block';
// }
// loadUp();
const allQuestions1 = [
  {questionAsked: 'Which of these has no closing tags?', correctAnswer: 'img', options: ['img', 'div', 'p']},
  {questionAsked: 'What does < p  > stand for?', correctAnswer: 'paragraph', options: ['paragraph', 'permanent', 'potato']},
  {questionAsked: 'Which of these can be used instead of <br>< div >?', correctAnswer: 'article', options: ['article', 'h1', 'span']},
  {questionAsked: 'Which of these best describes < a >?', correctAnswer: 'link', options: ['link', 'alpha', 'android']},
  {questionAsked: 'Which of these would go at the bottom of a page', correctAnswer: 'footer', options: ['footer', 'header', 'nav']}
];

const allQuestions2 = [
  {questionAsked: 'What does the R in RGBA mean?', correctAnswer: 'red', options: ['red', 'reboot', 'return']},
  {questionAsked: 'In CSS what is # used for?', correctAnswer: 'id', options: ['id', 'class', 'hashtag']},
  {questionAsked: 'How would you change the colour of a word?', correctAnswer: 'color', options: ['color', 'colour', 'word-colour']},
  {questionAsked: 'How would you define a class?', correctAnswer: '.', options: ['.', '=', '-']},
  {questionAsked: 'What would you use to turn a <br>square into a circle?', correctAnswer: 'border-radius', options: ['border-radius', 'circle-power', 'smooth.edges']}
];
const allQuestions3 = [
  {questionAsked: 'Which of these is an empty array?', correctAnswer: '[ ]', options: ['[ ]', '{ }', '( )']},
  {questionAsked: 'Which of these is an event', correctAnswer: 'click', options: ['click', 'flick', 'pick']},
  {questionAsked: 'Which of these best defines a boolean?', correctAnswer: 'true/false', options: ['true/false', 'right/wrong', 'above/below']},
  {questionAsked: 'Which of these defines a variable? ', correctAnswer: 'const', options: ['const', 'variable', 'various']},
  {questionAsked: 'What does NaN stand for?', correctAnswer: 'not a number', options: ['not a number', 'granny', 'no altered numbers']}
];
const allQuestions4 = [
  {questionAsked: 'Which of these is an<br>inline element?', correctAnswer: 'span', options: ['span', 'p', 'div']},
  {questionAsked: 'When would you use the alt element?', correctAnswer: 'on images', options: ['on images', 'to be<br>alternative', 'to alter<br>a heading']},
  {questionAsked: 'Where would meta-data go?', correctAnswer: 'in the head', options: ['in the head', 'in the body', 'in tesco']},
  {questionAsked: 'How many h1s should you have on a page?', correctAnswer: '1', options: ['1', '2', 'as many as possible']},
  {questionAsked: 'What is the difference between<br>< ol > and < ul >', correctAnswer: 'numbered/bullets', options: ['numbered/bullets', 'ordinary/ugly', 'over/under']}
];
const allQuestions5 = [
  {questionAsked: 'What does the G in RGBA stand for?', correctAnswer: 'green', options: ['green', 'google', 'gold']},
  {questionAsked: 'What does the A in RGBA stand for?', correctAnswer: 'alpha', options: ['alpha', 'aubergine', 'auric']},
  {questionAsked: 'What colour would # ff0000 make?', correctAnswer: 'red', options: ['red', 'blue', 'green']},
  {questionAsked: 'How would you declare<br>that a box is a flex-box', correctAnswer: 'display : flex', options: ['display : flex', 'flexible', 'flex-wrap']},
  {questionAsked: 'in what order does CSS run? ', correctAnswer: 'top to bottom', options: ['top to bottom', 'bottom to top', 'right to left']}
];
const allQuestions6 = [
  {questionAsked: 'Which of these can contain objects?', correctAnswer: 'both', options: ['both', 'object', 'array']},
  {questionAsked: 'Which of these would<br>you use print into HTML?', correctAnswer: 'the DOM', options: ['the DOM', '.push', '.pull']},
  {questionAsked: 'Which of these would<br>you use to remove<br>an item from an array?', correctAnswer: '.pull', options: ['.pull', '.push', '.event']},
  {questionAsked: 'Which of these would<br>you use to call a function?', correctAnswer: '()', options: ['()', '.call', 'call-function']},
  {questionAsked: 'How would you check the length of an array', correctAnswer: '.length', options: ['.length', 'how.long', 'length.checker']}
];
const allQuestions7 = [
  {questionAsked: 'Which semantic tag is designed for<br> content which would make sense on another page? ', correctAnswer: 'article', options: ['article', 'section', 'div']},
  {questionAsked: 'Which event is fired when a form button is clicked?', correctAnswer: 'onsubmit', options: ['onsubmit', 'onclick', 'onload']},
  {questionAsked: 'Where would meta-data go?', correctAnswer: 'in the head', options: ['in the head', 'in the body', 'in tesco']},
  {questionAsked: 'How many h1s should you have on a page?', correctAnswer: '1', options: ['1', '2', 'as many as possible']},
  {questionAsked: 'What is the difference between<br>< ol > and < ul >', correctAnswer: 'numbered/bullets', options: ['numbered/bullets', 'ordinary/ugly', 'over/under']}
];
const allQuestions8 = [
  {questionAsked: 'What does the G in RGBA stand for?', correctAnswer: 'green', options: ['green', 'google', 'gold']},
  {questionAsked: 'What does the A in RGBA stand for?', correctAnswer: 'alpha', options: ['alpha', 'aubergine', 'auric']},
  {questionAsked: 'What colour would # ff0000 make?', correctAnswer: 'red', options: ['red', 'blue', 'green']},
  {questionAsked: 'How would you declare<br>that a box is a flex-box', correctAnswer: 'display : flex', options: ['display : flex', 'flexible', 'flex-wrap']},
  {questionAsked: 'in what order does CSS run? ', correctAnswer: 'top to bottom', options: ['top to bottom', 'bottom to top', 'right to left']}
];
const allQuestions9 = [
  {questionAsked: 'Which of these can contain objects?', correctAnswer: 'both', options: ['both', 'object', 'array']},
  {questionAsked: 'Which of these would<br>you use print into HTML?', correctAnswer: 'the DOM', options: ['the DOM', '.push', '.pull']},
  {questionAsked: 'Which of these would<br>you use to remove<br>an item from an array?', correctAnswer: '.pull', options: ['.pull', '.push', '.event']},
  {questionAsked: 'Which of these would<br>you use to call a function?', correctAnswer: '()', options: ['()', '.call', 'call-function']},
  {questionAsked: 'How would you check the length of an array', correctAnswer: '.length', options: ['.length', 'how.long', 'length.checker']}
];
const allQuestions10 = [
  {questionAsked: 'Which of these can contain objects?', correctAnswer: 'both', options: ['both', 'object', 'array']},
  {questionAsked: 'Which of these would<br>you use print into HTML?', correctAnswer: 'the DOM', options: ['the DOM', '.push', '.pull']},
  {questionAsked: 'Which of these would<br>you use to remove<br>an item from an array?', correctAnswer: '.pull', options: ['.pull', '.push', '.event']},
  {questionAsked: 'Which of these would<br>you use to call a function?', correctAnswer: '()', options: ['()', '.call', 'call-function']},
  {questionAsked: 'How would you check the length of an array', correctAnswer: '.length', options: ['.length', 'how.long', 'length.checker']}
];

const allQuestions = [
  allQuestions1,
  allQuestions2,
  allQuestions3,
  allQuestions4,
  allQuestions5,
  allQuestions6,
  allQuestions7,
  allQuestions8,
  allQuestions9,
  allQuestions10
];

const chosenButton = [];
// for (let i = 0; i < answerBox.length; i++) {
//   const i = Math.floor((Math.random()* 3)+ 1);
//   allQuestions1
//   answerSorter.push(currentChoice);
// }

function qPopUp() {
  document.querySelector('.random-question').style.display = 'block';
  title.style.display = 'none';
  correctButton();
}


const i = Math.floor((Math.random()* 4)+ 1);
function randomQChoice(qAndA) {
  currentQ = qAndA[i];
  document.getElementById('randomQ').innerHTML = currentQ.questionAsked;
  const optionOrder = shuffleNumbersUpTo(currentQ.options.length);
  document.getElementById('a1').innerHTML = currentQ.options[optionOrder[0]];
  document.getElementById('a2').innerHTML = currentQ.options[optionOrder[1]];
  document.getElementById('a3').innerHTML = currentQ.options[optionOrder[2]];
}

function shuffleNumbersUpTo(maxNumber) {
  const numbers = [];
  for (let i = 0; i < maxNumber; i++) {
    numbers.push(i);
  }
  const shuffled = shuffleArray(numbers);
  return shuffled;
}

function shuffleArray(array) {
  const shuffled = [];
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    // Add random element to shuffled array
    shuffled.push(array[randomIndex]);
    // Remove that element from the original
    array.splice(randomIndex, 1);
  }
  return shuffled;
}

function correctButton() {
  const questionTime = document.querySelector('.main-page');
  questionTime.classList.add('question-box');
}
function firstColumn() {
  for (let i = 0; i < boxes1.length; i++) {
    boxes1[i].addEventListener('click', function() {
      const currentChoice = event.target;
      event.target.style.backgroundColor = '#66ff33';
      event.target = qPopUp();
      chosenButton.push(currentChoice);
      randomQChoice(allQuestions1);
      console.log(chosenButton);
    }
    );
  }
}
firstColumn();

function handleColumns(boxDivs, color, questionFunction) {
  for (let i = 0; i < boxDivs.length; i++) {
    boxDivs[i].addEventListener('click', function() {
      const currentChoice = event.target;
      event.target.style.backgroundColor = color;
      event.target = qPopUp();
      chosenButton.push(currentChoice);
      questionFunction;
      console.log(chosenButton);
    }
    );
  }
}

function closePopUp() {
  winPopUp.style.display = 'none';
  losePopUp.style.display = 'none';
}

function popUpClose() {
  setTimeout(closePopUp, 1600);
}
function closeQBox() {
  document.querySelector('.random-question').style.display = 'none';
}
const pushedClicks = [];

answerBox.addEventListener('click', function(event) {
  // winPopUp.style.display = 'block';
  pushedClicks.push('1');

  const chosenAnswer = event.target.innerHTML;
  console.log('Chosen an answer', chosenAnswer, 'Correct answer was', currentQ.correctAnswer);

  if (chosenAnswer === currentQ.correctAnswer) {
    winPopUp.style.display = 'block';
    // CORRECT!
    console.log('Correct!');
    correctAnswers += 1;
    const boxes = document.querySelectorAll(`.boxes${correctAnswers + 1}`);
    const questionSet = allQuestions[correctAnswers];
    handleColumns(boxes, '#66ff33', randomQChoice(questionSet));
  } else {
    losePopUp.style.display = 'block';
    // INCORRECT
    console.log('Incorrect');
    // event.target.style.backgroundColor = 'red';
    incorrectPopUp();
  }
  popUpClose();
  closeQBox();
});

function incorrectPopUp() {
  losePopUp.style.display = 'block';
  // event.target.style.background = 'red';
  popUpClose();
  closeQBox();
}
// wrongAnswer2.addEventListener('click', function() {
//   losePopUp.style.display = 'block';
//   event.target.style.color = 'red';
//   popUpClose();
//   closeQBox();
// });
// nextQ.addEventListener('click', function() {
//   closeQBox();
// });
// function correctWrong() {
//   if (allQuestions.questionAsked[2] === true) {
//     alert('woo');
//   } else {
//     alert('boo');
//   }
// }
// function wooHoo() {
//   winPopUp.style.display = 'block';
//   popUpClose();
//   handleColumns(boxes3, 'red',);
//   closeQBox();
// }

// const clickedButton = [
//   {color: 'yellow'}
// ];




// function changeColor() {
//   if (chosenButton.length >= 1) {
//
//   }
// }
// function changeButton()

// function secondColumn() {
//   for (let i = 0; i < boxes2.length; i++) {
//     boxes2[i].addEventListener('click', function() {
//       const currentChoice = event.target;
//       event.target.style.backgroundColor = 'green';
//       event.target = qPopUp();
//       chosenButton.push(currentChoice);
//       randomQChoice2();
//     }
//     );
//   }
// }
// function thirdColumn() {
//   for (let i = 0; i < boxes3.length; i++) {
//     boxes3[i].addEventListener('click', function() {
//       const currentChoice = event.target;
//       event.target.style.backgroundColor = 'purple';
//       event.target = qPopUp();
//       chosenButton.push(currentChoice);
//       randomQChoice3();
//     }
//     );
//   }
// }

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', event);
//   chosenButton.push([i]);
// }
// function randomQChoice() {
//   var qChoice = Math.floor((Math.random()* 3)+ 1);
//   var qChosen = qChoice.toString();
//   if (qChosen === '1') {
//     randomQ.innerHTML = allQuestions[0].questionAsked;
//     correctAnswer.innerHTML = allQuestions[0].answer1;
//     wrongAnswer1.innerHTML = allQuestions[0].answer2;
//     wrongAnswer2.innerHTML = allQuestions[0].answer3;
//   } if (qChosen === '2' ) {
//     randomQ.innerHTML = allQuestions[1].questionAsked;
//     correctAnswer.innerHTML = allQuestions[1].answer1;
//     wrongAnswer1.innerHTML = allQuestions[1].answer2;
//     wrongAnswer2.innerHTML = allQuestions[1].answer3;
//   } if (qChosen === '3') {
//     randomQ.innerHTML = allQuestions[2].questionAsked;
//     correctAnswer.innerHTML = allQuestions[2].answer1;
//     wrongAnswer1.innerHTML = allQuestions[2].answer2;
//     wrongAnswer2.innerHTML = allQuestions[2].answer3;
//   }
// }
