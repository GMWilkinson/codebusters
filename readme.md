# Codebusters
# Screenshot
![Codebusters](screenshots/codebusters-screenshot.png)
##Coding Quiz.

Codebusters is a grid based quiz game that asks short multiple choice questions about HTML, CSS and JavaScript alternatively.

The aim of the game is to work your way across the board from left to right. If a question is answered correctly it will activate the next column of questions. If a question is answered incorrectly you will have to try again in the same column until you answer correctly.

After answering nine correct questions the final column will be activated. This column will be much harder than the rest. My teacher has very kindly allowed me to use images of him as the quiz master/teacher.




# Future updates

* A winner screen for if the game is completed
* Instructions
* Available and completed columns will be distinguishable
* audio
* Mobile and tablet responsive. On mobile the CSS will be completely different eg; The questions will cover the whole screen


#Code snippets

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
