const correctAnswers = ["C", "B", "A", "C"];
const form = document.querySelector(".quiz-form");

const quizScore = document.querySelector(".result span");

form.addEventListener("submit", e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    for (let i = 0; i < correctAnswers.length; i++)
        if (correctAnswers[i] === userAnswers[i]) {
            score += 25;
        }

        //skrolujemo, pokazujemo rezultat i uklanjamo klasu za d-none
    scrollTo(0, 0);

    const result = document.querySelector(".result").classList.remove("d-none");

    let output = 0;
    const timer = setInterval(() => {
        quizScore.innerText = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }



    }, 20)

})