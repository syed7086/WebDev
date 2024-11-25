const questions = [
    {
        question: 'Which is larget animal in the world',
        answers: [
            {text: "Whale", correct: false},
            {text: "Shark", correct: true},
            {text: "Dog", correct: false},
            {text: "Seahorse", correct: false},
        ]
    },
    {
        question: 'Which is larget animal in the world',
        answers: [
            {text: "Shark", correct: false},
            {text: "Shark", correct: true},
            {text: "Shark", correct: false},
            {text: "Shark", correct: false},
        ]
    },
    {
        question: 'Which is larget animal in the world',
        answers: [
            {text: "Shark", correct: false},
            {text: "Shark", correct: true},
            {text: "Shark", correct: false},
            {text: "Shark", correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

const showQuestion = () => {
    resetBtn();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
};

function resetBtn(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

const selectAnswer = (e) =>{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    };
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore() {
    resetBtn();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
};


nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();



