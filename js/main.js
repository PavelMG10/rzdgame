const quizData = [
    {
        question: "Как в позапрошлом веке называли железнодорожников?",
        a: "Ямщиками",
        b: "Путейцами",
        c: "Возницами",
        correct: "b",
    },
    {
        question: "Какая из этих профессий существует?",
        a: "Облетчик магистралей",
        b: "Обходчик путей",
        c: "Контроллёр перонов",
        correct: "b",
    },
    {
        question: "Профессиональный переносчик чемоданов на железнодорожном вокзале?",
        a: "Несун",
        b: "Носитель",
        c: "Носильщик",
        correct: "c",
    },
    {
        question: "Человек этой профессии имеет музыкальный слух, с его помощью он определяет неисправности колесных пар и буксовых узлов.?",
        a: "Осмоторщик вагонов",
        b: "Электромеханик",
        c: "Электромонтер",
        correct: "a",
    },
    {
        question: "Этого работника железной дороги не видит ни один пассажир, зато его всем слышно?",
        a: "Кассир",
        b: "Диктор",
        c: "Сигналист",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Завершить</button>
            `;
        }
    }
});
