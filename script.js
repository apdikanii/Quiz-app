const quizdata = [
    {
        quesion: "Dadka somaliyeed maxe caan ku yihiin?",
        a: "Dagaal",
        b: 'Burcad Badeed',
        c: 'Qaxoti Nimo',
        d: 'Dhamaan',
        correct: 'd',
    },
    {
        quesion: "waa madkee Cuntada loogu jecel yahay Somaliya?",
        a: 'canjeero',
        b: 'xalwo',
        c: 'oodkac',
        d: 'muufo',
        correct: 'c',
    },
    {
        quesion: "Yaa ugu caan san dadka aduunka soo maray?",
        a: "Nabi Mohamed SCW",
        b: 'Nabi ciise CS',
        c: 'Fircoon',
        d: 'Hitler',
        correct: 'a',
    },
    {
        quesion: "Yaa dalka xakun kiisa heestay dagaalkii 1977?",
        a: "Aadan Cade",
        b: 'Farmajo',
        c: 'Siyad Bare',
        d: 'Hassan Sheikh',
        correct: 'c',
    },
];

const answersEL = document.querySelectorAll(".answers");
const quiz = document.getElementById("quiz");
const quesionsEl = document.getElementById("quesions");
const a_taxtEl = document.getElementById("a_taxt");
const b_taxtEl = document.getElementById("b_taxt");
const c_taxtEl = document.getElementById("c_taxt");
const d_taxtEl = document.getElementById("d_taxt");
const sbmBtn = document.getElementById("submit");

let current = 0;
let score = 0;
loadQuiz();


function loadQuiz(){
    deselected();

    const currenquizdata = quizdata[current];
    quesionsEl.innerText = currenquizdata.quesion;
    a_taxtEl.innerText = currenquizdata.a;
    b_taxtEl.innerText = currenquizdata.b;
    c_taxtEl.innerText = currenquizdata.c;
    d_taxtEl.innerText = currenquizdata.d;
}

function selected(){
    let answers = undefined;
    answersEL.forEach((answer)=>{
        if (answer.checked){
            answers = answer.id;
        }
    });
    return answers;
}
function deselected(){
    answersEL.forEach((answer)=>{
        answer.checked = false;
    });
}

sbmBtn.addEventListener("click", ()=>{
    const answer = selected();
    if (answer){
        if(answer === quizdata[current].correct){
            score++;
        }
        current++;
        if(current < quizdata.length){
            loadQuiz();
        }else{
        quiz.innerHTML = `<h2> wow! waxad si sax uga jawabtay ${score}/${quizdata.length} Su'aalod </h2>
        <button onClick="location.reload()">Dib ugu laabo</button>`;
        }
    }
}) 