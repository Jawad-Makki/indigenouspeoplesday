const answerContainer = document.querySelector(".answer-container");
const questionContainer = document.querySelector(".question-container");
const answer = document.querySelector(".answer");

const lastQuestion = document.querySelector(".last-question");
const nextQuestion = document.querySelector(".next-question");

const question1 = document.getElementsByClassName("question1");
const question2 = document.getElementsByClassName("question2");
const question3 = document.getElementsByClassName("question3");
const question4 = document.getElementsByClassName("question4");
const question5 = document.getElementsByClassName("question5");
const question6 = document.getElementsByClassName("question6");
const question7 = document.getElementsByClassName("question7");
const question8 = document.getElementsByClassName("question8");
const question9 = document.getElementsByClassName("question9");
const question10 = document.getElementsByClassName("question10");
const question11 = document.getElementsByClassName("question11");
const question12 = document.getElementsByClassName("question12");
const question13 = document.getElementsByClassName("question13");
const question14 = document.getElementsByClassName("question14");
const question15 = document.getElementsByClassName("question15");


const answer1 = document.getElementsByClassName("answer1");
const answer2 = document.getElementsByClassName("answer2");
const answer3 = document.getElementsByClassName("answer3");
const answer4 = document.getElementsByClassName("answer4");
const answer5 = document.getElementsByClassName("answer5");
const answer6 = document.getElementsByClassName("answer6");
const answer7 = document.getElementsByClassName("answer7");
const answer8 = document.getElementsByClassName("answer8");
const answer9 = document.getElementsByClassName("answer9");
const answer10 = document.getElementsByClassName("answer10");
const answer11 = document.getElementsByClassName("answer11");
const answer12 = document.getElementsByClassName("answer12");
const answer13 = document.getElementsByClassName("answer13");
const answer14 = document.getElementsByClassName("answer14");
const answer15 = document.getElementsByClassName("answer15");

const incorrect1 = document.getElementsByClassName("incorrect1");
const incorrect2 = document.getElementsByClassName("incorrect2");
const correct = document.getElementsByClassName("correct");

const continueBtn = document.querySelector(".continue");

var questionNumber = 1;

function changeQuestion(elemsCurrent, elemsLast) {
    for (var i = 0; i < elemsCurrent.length; i++) {
        elemsCurrent[i].style.display = "inline";
    }

    for (var i = 0; i < elemsLast.length; i++) {
        elemsLast[i].style.display = "none";
    }
}

function questNumUp() {
    if (questionNumber < 15) {
        questionNumber ++;        
    }

    if (questionNumber === 2) {
        changeQuestion(question2, question1)
        lastQuestion.style.opacity = "1";
        lastQuestion.style.cursor = "pointer"
    } else if (questionNumber === 3) {
        changeQuestion(question3, question2)
    } else if (questionNumber === 4) {
        changeQuestion(question4, question3)
    } else if (questionNumber === 5) {
        changeQuestion(question5, question4)
    } else if (questionNumber === 6) {
        changeQuestion(question6, question5)
    } else if (questionNumber === 7) {
        changeQuestion(question7, question6)
    } else if (questionNumber === 8) {
        changeQuestion(question8, question7)
    } else if (questionNumber === 9) {
        changeQuestion(question9, question8)
    } else if (questionNumber === 10) {
        changeQuestion(question10, question9)
    } else if (questionNumber === 11) {
        changeQuestion(question11, question10)
    } else if (questionNumber === 12) {
        changeQuestion(question12, question11)
    } else if (questionNumber === 13) {
        changeQuestion(question13, question12)
    } else if (questionNumber === 14) {
        changeQuestion(question14, question13)
    } else if (questionNumber === 15) {
        changeQuestion(question15, question14)
        nextQuestion.style.opacity = "0.4";
        nextQuestion.style.cursor = "default"
        continueBtn.style.opacity = "0.4";
        continueBtn.style.cursor = "default";
    }
}

function questNumDown() {
    if (questionNumber > 1) {
        questionNumber --;
    }

    if (questionNumber === 1) {
        changeQuestion(question1, question2)
        lastQuestion.style.opacity = "0.4";
        lastQuestion.style.cursor = "default"
    } else if (questionNumber === 2) {
        changeQuestion(question2, question3)
    } else if (questionNumber === 3) {
        changeQuestion(question3, question4)
    } else if (questionNumber === 4) {
        changeQuestion(question4, question5)
    } else if (questionNumber === 5) {
        changeQuestion(question5, question6)
    } else if (questionNumber === 6) {
        changeQuestion(question6, question7)
    } else if (questionNumber === 7) {
        changeQuestion(question7, question8)
    } else if (questionNumber === 8) {
        changeQuestion(question8, question9)
    } else if (questionNumber === 9) {
        changeQuestion(question9, question10)
    } else if (questionNumber === 10) {
        changeQuestion(question10, question11)
    } else if (questionNumber === 11) {
        changeQuestion(question11, question12)
    } else if (questionNumber === 12) {
        changeQuestion(question12, question13)
    } else if (questionNumber === 13) {
        changeQuestion(question13, question14)
    } else if (questionNumber === 14) {
        changeQuestion(question14, question15)
        nextQuestion.style.opacity = "1";
        nextQuestion.style.cursor = "pointer";
        continueBtn.style.opacity = "1";
        continueBtn.style.cursor = "pointer";
    }
}

function displayOnlyAns(elemsDisp, elems1, elems2, elems3, elems4, elems5, elems6, elems7, elems8, elems9, elems10, elems11, elems12, elems13, elems14) {
    for (var i = 0; i < elemsDisp.length; i++) {
        elemsDisp[i].style.display = "inline";
        elems1[i].style.display = "none";
        elems2[i].style.display = "none";
        elems3[i].style.display = "none";
        elems4[i].style.display = "none";
        elems5[i].style.display = "none";
        elems6[i].style.display = "none";
        elems7[i].style.display = "none";
        elems8[i].style.display = "none";
        elems9[i].style.display = "none";
        elems10[i].style.display = "none";
        elems11[i].style.display = "none";
        elems12[i].style.display = "none";
        elems13[i].style.display = "none";
        elems14[i].style.display = "none";
    }
}

function theAnswer() {
    if (questionNumber === 1) {
        displayOnlyAns(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 2) {
        displayOnlyAns(answer2, answer1, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 3) {
        displayOnlyAns(answer3, answer2, answer1, answer4, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 4) {
        displayOnlyAns(answer4, answer2, answer3, answer1, answer5, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 5) {
        displayOnlyAns(answer5, answer2, answer3, answer4, answer1, answer6, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 6) {
        displayOnlyAns(answer6, answer2, answer3, answer4, answer5, answer1, answer7, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 7) {
        displayOnlyAns(answer7, answer2, answer3, answer4, answer5, answer6, answer1, answer8, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 8) {
        displayOnlyAns(answer8, answer2, answer3, answer4, answer5, answer6, answer7, answer1, answer9, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 9) {
        displayOnlyAns(answer9, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer1, answer10, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 10) {
        displayOnlyAns(answer10, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer1, answer9, answer11, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 11) {
        displayOnlyAns(answer11, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer1, answer9, answer10, answer12, answer13, answer14, answer15);
    } else if (questionNumber === 12) {
        displayOnlyAns(answer12, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer1, answer9, answer11, answer10, answer13, answer14, answer15);
    } else if (questionNumber === 13) {
        displayOnlyAns(answer13, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer1, answer9, answer11, answer12, answer10, answer14, answer15);
    } else if (questionNumber === 14) {
        displayOnlyAns(answer14, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer1, answer9, answer11, answer12, answer13, answer10, answer15);
    } else if (questionNumber === 15) {
        displayOnlyAns(answer15, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer1, answer9, answer11, answer12, answer13, answer14, answer10);
    }
}

function incorrect1Function() {
    theAnswer();
    answerContainer.style.display = "flex";
    questionContainer.style.display = "none";
    lastQuestion.style.opacity = "0.4"
    nextQuestion.style.opacity = "0.4"
    for (var i = questionNumber * 2 - 2; i < questionNumber * 2; i++) {
        incorrect1[i].style.display = "inline";
        incorrect2[i].style.display = "none";
        correct[i].style.display = "none";
    }
}

function incorrect2Function() {
    theAnswer();
    answerContainer.style.display = "flex";
    questionContainer.style.display = "none";
    lastQuestion.style.opacity = "0.4"
    nextQuestion.style.opacity = "0.4"
    lastQuestion.style.cursor = "default"
    nextQuestion.style.cursor = "default"
    for (var i = questionNumber * 2 - 2; i < questionNumber * 2; i++) {
        incorrect1[i].style.display = "none";
        incorrect2[i].style.display = "inline";
        correct[i].style.display = "none";
    }
}

function correctFunction() {
    theAnswer();
    answerContainer.style.display = "flex";
    questionContainer.style.display = "none";
    lastQuestion.style.opacity = "0.4"
    nextQuestion.style.opacity = "0.4"
    lastQuestion.style.cursor = "default"
    nextQuestion.style.cursor = "default"
    for (var i = questionNumber * 2 - 2; i < questionNumber * 2; i++) {
        incorrect1[i].style.display = "none";
        incorrect2[i].style.display = "none";
        correct[i].style.display = "inline";
    }
}

function retry() {
    answerContainer.style.display = "none";
    questionContainer.style.display = "flex";
    if (questionNumber > 1){
        lastQuestion.style.opacity = "1";
        lastQuestion.style.cursor = "pointer";
    } 
    
    if (questionNumber < 15) {
        nextQuestion.style.opacity = "1";
        nextQuestion.style.cursor = "pointer";
    }
}

function continueFunction() {
    if (continueBtn.style.opacity != "0.4") {
        questNumUp();
        answerContainer.style.display = "none";
        questionContainer.style.display = "flex";
        lastQuestion.style.opacity = "1";
        nextQuestion.style.opacity = "1";
        lastQuestion.style.cursor = "pointer";
        nextQuestion.style.cursor = "pointer";
    }
}
