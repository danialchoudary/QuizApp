let questions=[{
    question:"What is color of sky?",
    answer:[
        {text:"red",correct:false},
        {text:"blue",correct:true},
        {text:"green",correct:false},
        {text:"black",correct:false},
    ]
},
{
    question:"Who is know as the Habib-ullah?",
    answer:[
        {text:"Ali(R.A)",correct:false},
        {text:"Abu Bakar(R.A)",correct:false},
        {text:"Muhammad (S.A.W)",correct:true},
        {text:"Omer(R.A)",correct:false},
    ]
},
{
    question:"What is in Hell?",
    answer:[
        {text:"Gold",correct:false},
        {text:"Fire",correct:true},
        {text:"Water",correct:false},
        {text:"Nothing",correct:false},
    ]
},
{
    question:"What is Dunia for momin?",
    answer:[
        {text:"Place to live",correct:false},
        {text:"jannat",correct:false},
        {text:"cell",correct:true},
        {text:"hell",correct:false},
    ]
},
]
let Ques=document.querySelector(".qsection");
let Ans=document.querySelector(".asection");
let Next=document.querySelector(".changebtn");
let currentquesindex=0;
let score=0;
let currentansindex=0;

function startQuiz() {
    currentquesindex=0;
    score=0;
    Next.innerText="Next";
    showQuestions();
}

function showQuestions() {
resetstate()
    let currentQuestion=questions[currentquesindex];
    let quesNo=currentquesindex+1;
    Ques.innerHTML=quesNo+" . "+currentQuestion.question;
    
    currentQuestion.answer.forEach(answer=>{
       let ansbtn= document.createElement("button");
       ansbtn.innerText=answer.text;
       
       ansbtn.setAttribute("class","ansbtn")
       Ans.appendChild(ansbtn);
       
        ansbtn.dataset.correct=answer.correct
       
       ansbtn.addEventListener('click',seleectAnswer)
    
    })
   
}

function resetstate() {
    while (Ans.firstChild) {
        Ans.removeChild(Ans.firstChild)
    }
}

function seleectAnswer(e) {
    let selectedans=e.target;
    let correctans=selectedans.dataset.correct === "true";
    if (correctans) {
        selectedans.classList.add("correct");
        score++;
    }
    else{
        selectedans.classList.add("incorrect")
    }
    Array.from(Ans.children).forEach((button)=>{
if (button.dataset.correct==="true") {
    button.classList.add("correct")
}
button.disabled=true;
    })
}

function showScore() {
    Ques.innerHTML="Your score is :"+ score +" out of "+ questions.length;
    resetstate();
    Next.innerHTML="Play Again"
}
function handelNext() {
    currentquesindex++;
    if (currentquesindex<questions.length) {
       showQuestions();
    }
    else{
        showScore()
    }
}
function checkNext() {
    if (currentquesindex<questions.length) {
        handelNext();
    }
    else{
        startQuiz();
    }
}
Next.addEventListener('click',checkNext)

startQuiz();
