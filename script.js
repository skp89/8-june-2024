// Login Function
function login(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "fuddu" && password === "26052006") {
      document.getElementById("login-container").style.display = "none";
      document.getElementById("app").style.display = "block";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
}

let correctAnswers = {
    question1: "13",
    question3: "dadar"
};

let answers = {
    question1: null,
    question2: null,
    question3: null
};

function start() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('question1').classList.remove('hidden');
}

function nextQuestion(currentPageId, nextPageId) {
    if (currentPageId === 'question1') {
        let selectedAnswer = document.querySelector('input[name="gifts"]:checked');
        if (selectedAnswer) {
            answers.question1 = selectedAnswer.value;
        } else {
            alert('Please select an option.');
            return;
        }
    }
    document.getElementById(currentPageId).classList.add('hidden');
    document.getElementById(nextPageId).classList.remove('hidden');
}

function evaluateAnswers() {
    answers.question3 = document.getElementById('answer3').value.trim().toLowerCase();
    
    let results = `
        <p>Question 1: How many gifts have I given to you?</p>
        <p>Your answer: ${answers.question1}</p>
        <p>Question 2: How much do you love me?</p>
        <p>Your answer: ${answers.question2}</p>
        <p>Question 3: Where did we go on your birthday?</p>
        <p>Your answer: ${answers.question3}</p>
    `;
    
    let allCorrect = (answers.question1 === correctAnswers.question1) && (answers.question3 === correctAnswers.question3);
    
    document.getElementById('question3').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
    document.getElementById('results').innerHTML = results;

    if (allCorrect) {
        document.getElementById('correctBtn').classList.remove('hidden');
        document.getElementById("change").innerHTML = "nice!! you are right . now you will not punish. ";
        
    } else {
        document.getElementById('punishBtn').classList.remove('hidden');
        document.getElementById("change").innerHTML = "you are wrong . now you will be punished.click 'punish me' button ";
    }
}
function punish() {
    window.open("punishment.html", "_self");
}
function correct() {
    window.open("letter.html", "_self");
}






function resetQuiz() {
    document.getElementById('final').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    answers.question1 = null;
    answers.question2 = null;
    answers.question3 = null;
    document.getElementById('answer3').value = '';
    document.getElementById('answer2').value = '';
    document.getElementById('iLoveYouInput').value = '';
}
