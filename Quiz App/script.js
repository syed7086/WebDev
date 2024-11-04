const questions = [
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

startQuiz();



