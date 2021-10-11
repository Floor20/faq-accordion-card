"use strict";

const arrows = document.querySelectorAll(".arrow");
const answers = document.querySelectorAll(".faq-answer");

const answerList = [...answers];
const arrowList = [...arrows];

// Define starting conditions
const init = function () {
  answerList.forEach((answer) => answer.classList.add("hidden"));
};

init();

// Hide and show answers
arrows.forEach((image) => {
  image.addEventListener("click", function () {
    for (let answer of answerList)
      if (
        answerList.indexOf(answer) === arrowList.indexOf(image) &&
        answer.classList.contains("hidden")
      )
        answer.classList.remove("hidden");
      else answer.classList.add("hidden");
  });
});
