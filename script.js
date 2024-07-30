const questions = [
    {
        question: "What does the map() method do in JavaScript?",
        answers: [
            { text: "It filters elements based on a condition.", correct: false },
            { text: "It sorts the elements of an array.", correct: false },
            { text: "It creates a new array with the results of calling a function on every element in the array.", correct: true },
            { text: "It reduces the array to a single value.", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
        answers: [
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "const", correct: false },
            { text: "variable", correct: true }
        ]
    },
    {
        question: "What is the purpose of the *this* keyword in JavaScript?",
        answers: [
            { text: "It refers to the global object.", correct: false },
            { text: "It refers to the current function's scope.", correct: false },
            { text: "It refers to the object that is executing the current code.", correct: true },
            { text: "It refers to the parent object.", correct: false }
        ]
    },
    {
        question: "How can you check if a value is an array in JavaScript?",
        answers: [
            { text: "Array.isArray(value)", correct: true },
            { text: "value instanceof Array", correct: false },
            { text: "typeof value === 'array'", correct: false },
            { text: "value.constructor === Array", correct: false }
        ]
    },
    {
        question: "What is the result of the following expression? '5' + 3 - 2",
        answers: [
            { text: "53", correct: false },
            { text: "51", correct: true },
            { text: "NaN", correct: false },
            { text: "55", correct: false }
        ]
    },
    {
        question: "Which method can be used to remove the last element from an array?",
        answers: [
            { text: "pop()", correct: true },
            { text: "shift()", correct: false },
            { text: "slice()", correct: false },
            { text: "splice()", correct: false }
        ]
    },
    {
        question: "What does the event.preventDefault() method do?",
        answers: [
            { text: "It prevents the default action associated with an event.", correct: true },
            { text: "It cancels the event from being triggered.", correct: false },
            { text: "It prevents the event from bubbling up the DOM.", correct: false },
            { text: "It removes the event listener.", correct: false }
        ]
    },
    {
        question: "How can you convert a string to a number in JavaScript?",
        answers: [
            { text: "parseInt(string)", correct: false },
            { text: "Number(string)", correct: false },
            { text: "parseFloat(string)", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionContainer = document.getElementById('question');
    questionContainer.innerText = question.question;

    const answerButtons = document.getElementById('answer-buttons');
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    // Disable all buttons after one is clicked
    const buttons = document.querySelectorAll('#answer-buttons .btn');
    buttons.forEach(btn => btn.disabled = true);

    // Increment correct answers count if the selected answer is correct
    if (answer.correct) {
        correctAnswers++;
    }

    // Move to next question after a short delay
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(questions[currentQuestionIndex]);
        } else {
            alert(`Quiz finished! You answered ${correctAnswers} questions correctly.`);
            startQuiz();
        }
    }, 500); // Delay for better user experience
}

// Start the quiz
startQuiz();
