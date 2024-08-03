import React, { useState, useCallback } from "react";
import Questions from "../questions";
import QuizFinished from "./QuizFinished";
import Question from "./Question";

export default function QuizBoard() {
  const [selectedAnswers, setSelectedAnswer] = useState([]);
  const activeQuestionIndx =selectedAnswers.length;
  const isQuizCompleted = activeQuestionIndx === Questions.length;


  const handleSelectedAns = useCallback(function handleSelectedAns(selectedAns) {
    setSelectedAnswer((prev) => [selectedAns, ...prev]);
  },
  []);

  const handleSkip = useCallback(
    () => handleSelectedAns(null),
    [handleSelectedAns]
  );


  if (isQuizCompleted) {
    return <QuizFinished userAnswers={selectedAnswers} />;
  }

  
  return (
    <main className="flex flex-col justify-start items-center w-full h-full mt-20 ">
      <Question
        key={activeQuestionIndx}
        handleSkip={handleSkip}
        qText={Questions[activeQuestionIndx].text}
        answers={Questions[activeQuestionIndx].answers}
        onSelected={handleSelectedAns}
      />
    </main>
  );
}
