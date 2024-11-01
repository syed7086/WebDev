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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question; 
}



