# Codebusters

![Codebusters](screenshots/codebusters-screenshot.png)


Codebusters is a grid based quiz game that asks short multiple choice questions about HTML, CSS and JavaScript alternatively.

The aim of the game is to work your way across the board from left to right. If a question is answered correctly it will activate the next column of questions. If a question is answered incorrectly you will have to try again in the same column until you answer correctly.

After answering nine correct questions the final column will be activated. These questions will be much harder than the rest.

My instructor has very kindly allowed me to use images of him as the quiz master/teacher type character.
![Codebusters](/Users/grantwilkinson/development/my-experiments/screenshots/Screen Shot 2018-10-18 at 09.42.04.png)
This is my first project and I have received an abundance of help from the instructors at GA and my classmates.

# Code snippets

This is the layout of the object arrays that contain the questions and answers.

```javascript
const allQuestions1 = [
  {questionAsked: 'Which of these has no closing tags?', correctAnswer: 'img', options: ['img', 'div', 'p']},
  {questionAsked: 'What does < p  > stand for?', correctAnswer: 'paragraph', options: ['paragraph', 'permanent', 'potato']},
  {questionAsked: 'Which of these can be used instead of <br>< div >?', correctAnswer: 'article', options: ['article', 'h1', 'span']},
  {questionAsked: 'Which of these best describes < a >?', correctAnswer: 'link', options: ['link', 'alpha', 'android']},
  {questionAsked: 'Which of these would go at the bottom of a page', correctAnswer: 'footer', options: ['footer', 'header', 'nav']}
];
```

This piece of javascript checks for clicks, activates the question pop up and adds color to the box that was clicked.

```javascript
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
}
```

# Technologies

* HTML
* CSS3
* JavaScript

# Challenges

* It took quite a long time to come up with the idea of using object arrays to separate each column of questions. By having all of the questions in an array it became much easier to randomise by column
* At first I had a separate function for each of the columns to check for clicks and activate the question popups. But the code looked terrible. This project taught me a lot about how to use loops to refactor your code
* I'd never heard of the z-index CSS key before this project but it is really helpful and is the only way that I could get the questions and correct/wrong answer popups to appear over the top
of the page

# Future updates

* Instructions
* Available and completed columns will be distinguishable
* audio
* Mobile and tablet responsive. On mobile the CSS will be completely different eg; The questions will cover the whole screen
* Refactoring
* I may have to change the colour of the questions, I tried to make it look like whiteboard marker

# Bugs

* When the user completes the board it gets stuck
* At any screen size other than MacBook Pro. The questions don't fit on the computer image. Looks terrible.
