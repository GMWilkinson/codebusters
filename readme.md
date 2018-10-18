# Codebusters

![Codebusters](screenshots/codebusters-screenshot.png)


Codebusters is a grid based quiz game that asks short multiple choice questions about HTML, CSS and JavaScript alternatively.

The aim of the game is to work your way across the board from left to right. If a question is answered correctly it will activate the next column of questions. If a question is answered incorrectly you will have to try again in the same column until you answer correctly.

After answering nine correct questions the final column will be activated. These questions will be much harder than the rest.

My instructor has very kindly allowed me to use images of him as the quiz master/teacher type character.
![Codebusters](/Users/grantwilkinson/development/my-experiments/screenshots/Screen Shot 2018-10-18 at 09.42.04.png)
This is my first project and I have received an abundance of help from the instructors at GA and my classmates.



# Future updates

* A winner screen for if the game is completed
* Instructions
* Available and completed columns will be distinguishable
* audio
* Mobile and tablet responsive. On mobile the CSS will be completely different eg; The questions will cover the whole screen
* Refactoring
* I may have to change the colour of the questions, I tried to make it look like whiteboard marker

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
}```
