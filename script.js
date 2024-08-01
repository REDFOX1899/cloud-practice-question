const questions = [
    {
        question: 'What is the capital city of Japan?',
        answers: [
            { text: 'Tokyo', correct: true },
            { text: 'Kyoto', correct: false },
            { text: 'Osaka', correct: false },
            { text: 'Hiroshima', correct: false },
        ],
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Vincent van Gogh', correct: false },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Claude Monet', correct: false },
        ],
    },
    {
        question: 'What is the chemical symbol for Gold?',
        answers: [
            { text: 'Au', correct: true },
            { text: 'Ag', correct: false },
            { text: 'Pb', correct: false },
            { text: 'Fe', correct: false },
        ],
    },
    {
        question: 'Which planet is closest to the Sun?',
        answers: [
            { text: 'Venus', correct: false },
            { text: 'Earth', correct: false },
            { text: 'Mercury', correct: true },
            { text: 'Mars', correct: false },
        ],
    },
    {
        question: 'What is the hardest natural substance on Earth?',
        answers: [
            { text: 'Gold', correct: false },
            { text: 'Iron', correct: false },
            { text: 'Diamond', correct: true },
            { text: 'Platinum', correct: false },
        ],
    },
    {
        question: 'Who wrote "Pride and Prejudice"?',
        answers: [
            { text: 'Jane Austen', correct: true },
            { text: 'Charlotte Brontë', correct: false },
            { text: 'Emily Dickinson', correct: false },
            { text: 'Louisa May Alcott', correct: false },
        ],
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true },
        ],
    },
    {
        question: 'Who was the first person to walk on the moon?',
        answers: [
            { text: 'Buzz Aldrin', correct: false },
            { text: 'Yuri Gagarin', correct: false },
            { text: 'Neil Armstrong', correct: true },
            { text: 'Michael Collins', correct: false },
        ],
    },
    {
        question: 'Which country is known as the Land of the Rising Sun?',
        answers: [
            { text: 'China', correct: false },
            { text: 'Japan', correct: true },
            { text: 'South Korea', correct: false },
            { text: 'Thailand', correct: false },
        ],
    },
    {
        question: 'What is the longest river in the world?',
        answers: [
            { text: 'Amazon River', correct: true },
            { text: 'Nile River', correct: false },
            { text: 'Yangtze River', correct: false },
            { text: 'Mississippi River', correct: false },
        ],
    },
    {
        question: 'Who invented the telephone?',
        answers: [
            { text: 'Alexander Graham Bell', correct: true },
            { text: 'Thomas Edison', correct: false },
            { text: 'Nikola Tesla', correct: false },
            { text: 'Michael Faraday', correct: false },
        ],
    },
    {
        question: 'What is the smallest prime number?',
        answers: [
            { text: '1', correct: false },
            { text: '2', correct: true },
            { text: '3', correct: false },
            { text: '5', correct: false },
        ],
    },
    {
        question: 'Which element has the atomic number 1?',
        answers: [
            { text: 'Hydrogen', correct: true },
            { text: 'Helium', correct: false },
            { text: 'Oxygen', correct: false },
            { text: 'Carbon', correct: false },
        ],
    },
    {
        question: 'Who is known as the Father of Computers?',
        answers: [
            { text: 'Alan Turing', correct: false },
            { text: 'Charles Babbage', correct: true },
            { text: 'John von Neumann', correct: false },
            { text: 'Bill Gates', correct: false },
        ],
    },
    {
        question: 'What is the main ingredient in guacamole?',
        answers: [
            { text: 'Tomato', correct: false },
            { text: 'Avocado', correct: true },
            { text: 'Pepper', correct: false },
            { text: 'Onion', correct: false },
        ],
    },
    {
        question: 'What is the capital city of Australia?',
        answers: [
            { text: 'Sydney', correct: false },
            { text: 'Melbourne', correct: false },
            { text: 'Canberra', correct: true },
            { text: 'Brisbane', correct: false },
        ],
    },
    {
        question: 'Which Shakespeare play features the character of Hamlet?',
        answers: [
            { text: 'Macbeth', correct: false },
            { text: 'Othello', correct: false },
            { text: 'Hamlet', correct: true },
            { text: 'King Lear', correct: false },
        ],
    },
    {
        question: 'What is the largest desert in the world?',
        answers: [
            { text: 'Sahara Desert', correct: false },
            { text: 'Gobi Desert', correct: false },
            { text: 'Antarctic Desert', correct: true },
            { text: 'Arabian Desert', correct: false },
        ],
    },
    {
        question: 'What is the name of the first artificial Earth satellite?',
        answers: [
            { text: 'Voyager 1', correct: false },
            { text: 'Hubble Space Telescope', correct: false },
            { text: 'Sputnik 1', correct: true },
            { text: 'Apollo 11', correct: false },
        ],
    },
    {
        question: 'What is the largest island in the world?',
        answers: [
            { text: 'Greenland', correct: true },
            { text: 'New Guinea', correct: false },
            { text: 'Borneo', correct: false },
            { text: 'Madagascar', correct: false },
        ],
    },
    {
        question:
            'Which planet is known as the "Morning Star" or "Evening Star"?',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Venus', correct: true },
            { text: 'Mercury', correct: false },
            { text: 'Jupiter', correct: false },
        ],
    },
    {
        question: 'What is the name of the river that flows through Egypt?',
        answers: [
            { text: 'Nile', correct: true },
            { text: 'Amazon', correct: false },
            { text: 'Ganges', correct: false },
            { text: 'Mississippi', correct: false },
        ],
    },
    {
        question:
            'Which organ in the human body is primarily responsible for pumping blood?',
        answers: [
            { text: 'Liver', correct: false },
            { text: 'Lung', correct: false },
            { text: 'Kidney', correct: false },
            { text: 'Heart', correct: true },
        ],
    },
]

const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answer-btns')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = 'Next'
    showQuestion()
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1

    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = 'none'

    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === 'true'
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    } else {
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach( button => {
        if(button.dataset.correct === 'ture'){
            button.classList.add('correct')
        }
        button.disabled = true
    })

    nextButton.style.display = "block"
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function hadndleNextButton() {
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    } else{
        showScore()
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        hadndleNextButton()
    } else {
        startQuiz()
    }
})


startQuiz()