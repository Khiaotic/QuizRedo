//////hey khi you're doin great! im proud of you//////
//  ${variables}

const startBtnPressed = document.getElementById('startBtn');
const questionContainer = document.getElementById ("question-container");
const questionElement = document.getElementById ('question');
const answerButtonElement = document.getElementById ('answer-buttons');
////////////////////////////////////////////////////////////////////////////////////////
const scorePoints = 100
const maxQuestions = 4

let score = 0

// for loop  scorre ++ when its correct

//currently set to undefined
let shuffleQuestions, currentQuestionIndex 




//  when the start button is pressed the quiz and timer begins
startBtnPressed.addEventListener('click', startQuiz_Timer)


function startQuiz_Timer (){
   console.log('start?');
   shuffleQuestions = questions.sort(() => Math.random () - .5);
   currentQuestionIndex = 0;
   presentNextQuestion()
   
   
   
}

function presentNextQuestion ()  {
    resetQuiz()
    displayQuestion(shuffleQuestions[currentQuestionIndex])
}

function displayQuestion (question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        //only want to set data if answer is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct
            
        }


        // ///////IT BREAKS HERE ////////////////////////
button.addEventListener('click',  selectAnswer)
//appending to the container and not the buttons themselves vvvv
document.getElementById('answer-buttons').append(button)
    })
    
}

function resetQuiz () {
 while (answerButtonElement.firstChild)   {
    answerButtonElement.removeChild
    (answerButtonElement.firstChild)
 }  
}


function selectAnswer () {
const selectButton =e.target
const correct = selectButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
//if the answer is correct proceed to the next question
if (selectAnswer.correct)currentQuestionIndex++
presentNextQuestion()
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct') 
    } else {
            element.classList.add('wrong')
        }
    }
    function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
    



const questions = [
    {
        question:"what's the difference between '==' and '==='",
        answers: [
            {text: '== compares the data type in value, while === compares the value and data type', correct: true},
            {text: '== is a programming interface for HTML and XML documents', correct: false},
            {text: 'there are no differences between the two', correct: false},
            {text: '2', correct: false}

        ]
    },
    {
        question:"what's the difference between function and algorithm",
        answers: [
            {text: '', correct: false},
            {text: 'algorithm is not apart of the developing process', correct: false},
            {text: '', correct: true},
            {text: 'there are no differences between the two', correct: false}

        ]
    },
    {
        question:"Do you have to use semicolons when coding in javascript?",
        answers: [
            {text: 'YES', correct: false},
            {text: 'NAH', correct: true},
           
        ]
    },
    
]





// WHEN I answer a question THEN I am presented with another question
//if question index 0 and answer index 0 match go to next question
// for (var i = 0; i < myQuestions.length; i++) {
//     console.log('question:' + myQuestions[i]);
    
// }

// function selectAnswer () {

// }

// function stopMyTimer (){
//     clearInterval(startTimer);
// }
// WHEN I answer a question incorrectly THEN time is subtracted from the clock






// WHEN all questions are answered or the timer reaches 0 THEN the game is over





// THEN I can save my initials and my score




// on click for random button href to video//
// function visitPage () {
//     document.getElementById(whatIsThis).innerHTML;

// const whatIsThisButton= document.getElementById("whatIsThis");
// whatIsThisButton.addEventListener("click", visitPage);


//Start the GAME//