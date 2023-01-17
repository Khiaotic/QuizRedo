//////hey khi you're doin great! im proud of you//////
//  ${variables}
// const myQuestions = ["what's the difference between '==' and '==='", "_____ is a programming interface for HTML and XML documents","_______ f(x)s are used to create objects in javascript","function Person (name, age, gender) {this.name=name; this.age=age; this.gender=gender;} is an example of a ______ f(x)", "______ f(x)s can only be used as a f(x) expression" ]
var myAnswers= ["== compares the data type in value, while === compares the value and data type", "DOM", "constructor", "constructor", "arrow"];
var wrongAnswers=["'=== isn't real','=== and == are actually the same',who'","huh, 'stop', "]
var question =  document.getElementById("❔");
const startBtnPressed = document.getElementById('startBtn');
const questionContainer = document.getElementById;
const questionElement = document.getElementById ('❔');
const answerButtonElement = document.getElementById ('answer-btn');

//currently set to undefined
const shuffleQuestions, currentQuestionIndex 




//  when the start button is pressed the quiz and timer begins
startBtnPressed.addEventListener('click', startQuiz_Timer)


function startQuiz_Timer (){
   console.log('start?');
   shuffleQuestions = questions.sort(() => Math.random () - .5);
   currentQuestionIndex = 0;
   presentNextQuestion()
   
   
}

function presentNextQuestion ()  {
    displayQuestion(shuffleQuestions[currentQuestionIndex])
}

function displayQuestion (question)


const myQuestions = [
    {
        question:"what's the difference between '==' and '==='";
        answers: [
            {text: '== compares the data type in value, while === compares the value and data type', correct: true},
            {text: '== is a programming interface for HTML and XML documents', correct: false},
            {text: '', correct: false},
            {text: '', correct: false},

        ]
    }
]



// WHEN I answer a question THEN I am presented with another question
//if question index 0 and answer index 0 match go to next question
for (var i = 0; i < myQuestions.length; i++) {
    console.log('question:' + myQuestions[i]);
    
}

function selectAnswer () {

}

function stopMyTimer (){
    clearInterval(startTimer);
}
// WHEN I answer a question incorrectly THEN time is subtracted from the clock






// WHEN all questions are answered or the timer reaches 0 THEN the game is over





// THEN I can save my initials and my score




// on click for random button href to video//
// function visitPage () {
//     document.getElementById(whatIsThis).innerHTML;

// const whatIsThisButton= document.getElementById("whatIsThis");
// whatIsThisButton.addEventListener("click", visitPage);


//Start the GAME//