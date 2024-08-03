import React from "react";
import Questions from "../questions";


export default function QuizFinished({ userAnswers }) {
  const cssClass = "flex flex-col p-2 text-center text-offWhite text-2xl md:text-4xl"
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswerShare = 100 - (correctAnswersShare + skippedAnswersShare);
  let label;
  if (correctAnswersShare >= 50) {
    label = 'You passed'
  } else if (correctAnswersShare < 50 && skippedAnswersShare > (correctAnswersShare || wrongAnswerShare)) {
    label = 'You skipped many questions'
  } else if (wrongAnswerShare >= 50) {
    label = 'You failed'
  }
  return (
    <main className="flex flex-col justify-start items-center w-full h-full mt-11 ">
      <div className="flex flex-col justify-between items-center bg-darkBlue w-[70%] md:w-[45em] h-[95%] gap-4 py-7 px-10 rounded-md">
        <h1 className=" text-offWhite text-center text-wrap text-xl md:text-2xl cursor-default">
          Completed
        </h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between w-full">
          <p className={cssClass}>
            <span>{correctAnswersShare}%</span>
            <span>Correct</span>
          </p>
          <p className={cssClass}>
            <span>{skippedAnswersShare}%</span>
            <span>Skipped</span>
          </p>
          <p className={cssClass}>
            <span>{wrongAnswerShare}%</span>
            <span>Wrong</span>
          </p>
        </div>
        <p className=" text-offWhite text-center text-wrap text-lg md:text-xl cursor-default">
          {label}
        </p>
      </div>
    </main>
  );
}
