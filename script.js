"use strict";

const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".faq-answer");
const questions = document.querySelectorAll(".faq-question");

const answerList = [...answers];
const arrowList = [...arrows];
const questionList = [...questions];

// Define starting conditions
const init = function () {
  answerList.forEach((answer) => answer.classList.add("hidden"));
};

init();

const boldenQuestion = function () {
  arrowList.forEach((arrow, index) => {
    for (const answer of answerList)
      if (answerList.indexOf(answer) === index)
        for (const question of questionList)
          if (
            answerList.indexOf(answer) === questionList.indexOf(question) &&
            !answer.classList.contains("hidden")
          ) {
            arrow.classList.add("rotate");
            question.classList.add("bold");
          } else if (
            answerList.indexOf(answer) === questionList.indexOf(question) &&
            answer.classList.contains("hidden")
          ) {
            arrow.classList.remove("rotate");
            question.classList.remove("bold");
          }
  });
};

//Hide and show answers (arrow)
arrowList.forEach((image) => {
  image.addEventListener("click", function () {
    for (const answer of answerList)
      if (
        answerList.indexOf(answer) === arrowList.indexOf(image) &&
        answer.classList.contains("hidden")
      ) {
        answer.classList.remove("hidden");
        boldenQuestion();
      } else if (
        answerList.indexOf(answer) === arrowList.indexOf(image) &&
        !answer.classList.contains("hidden")
      ) {
        answer.classList.add("hidden");
        boldenQuestion();
      }
  });
});

// Hide and show answers (question)
questionList.forEach((q) => {
  q.addEventListener("click", function () {
    for (const answer of answerList)
      if (
        answerList.indexOf(answer) === questionList.indexOf(q) &&
        answer.classList.contains("hidden")
      ) {
        answer.classList.remove("hidden");
        boldenQuestion();
      } else if (
        answerList.indexOf(answer) === questionList.indexOf(q) &&
        !answer.classList.contains("hidden")
      ) {
        answer.classList.add("hidden");
        boldenQuestion();
      }
  });
});
