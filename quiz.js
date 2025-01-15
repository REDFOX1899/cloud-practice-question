const questions = {
    'gcp-associate': [
        { question: 'What is GCP?', answers: [{ text: 'Google Cloud Platform', correct: true }, { text: 'Google Compute Platform', correct: false }] },
        // Add more questions
    ],
    'gcp-cloud-architect': [
        { question: 'What is a VPC?', answers: [{ text: 'Virtual Private Cloud', correct: true }, { text: 'Virtual Public Cloud', correct: false }] },
        // Add more questions
    ],
    'devops': [
        { question: 'What is CI/CD?', answers: [{ text: 'Continuous Integration/Continuous Deployment', correct: true }, { text: 'Continuous Inspection/Continuous Deployment', correct: false }] },
        // Add more questions
    ]
};

const selectedExam = localStorage.getItem('selectedExam');
const examQuestions = questions[selectedExam];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-btns');
const nextButton = document.getElementById('next-btn');
const correctAnswerElement = document.getElementById('correct-answer');
const answerTab = document.getElementById('answer-tab');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = examQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    answerTab.style.display = 'none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        showCorrectAnswer();
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showCorrectAnswer() {
    const currentQuestion = examQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers.find(answer => answer.correct).text;
    correctAnswerElement.innerHTML = correctAnswer;
    answerTab.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${examQuestions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < examQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < examQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
