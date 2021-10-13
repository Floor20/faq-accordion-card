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
  arrowList.forEach((_, index) => {
    for (const answer of answerList)
      if (answerList.indexOf(answer) === index)
        for (const question of questionList)
          if (
            answerList.indexOf(answer) === questionList.indexOf(question) &&
            !answer.classList.contains("hidden")
          )
            question.classList.add("bold");
          else if (
            answerList.indexOf(answer) === questionList.indexOf(question) &&
            answer.classList.contains("hidden")
          )
            question.classList.remove("bold");
  });
};

// Hide and show answers
arrowList.forEach((image) => {
  image.addEventListener("click", function () {
    for (let answer of answerList)
      if (
        answerList.indexOf(answer) === arrowList.indexOf(image) &&
        answer.classList.contains("hidden")
      ) {
        answer.classList.remove("hidden");
        image.classList.add("rotate");

        boldenQuestion();
      } else if (
        answerList.indexOf(answer) === arrowList.indexOf(image) &&
        !answer.classList.contains("hidden")
      ) {
        image.classList.remove("rotate");
        answer.classList.add("hidden");

        boldenQuestion();
      }
  });
});
