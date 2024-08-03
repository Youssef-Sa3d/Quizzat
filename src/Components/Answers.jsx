import React, { useRef } from "react";

export default function Answers({ answers, onSelected }) {
  const shuffleAnswers = useRef();
  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answers];
    shuffleAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul className="flex flex-col w-full gap-3 md:gap-4 mt-4">
      {shuffleAnswers.current.map((answer) => (
        <li
          className="flex items-center text-center  justify-center w-full"
          key={answer}
        >
          <button
            className=" w-[90%] hover:bg-seaDark rounded-2xl px-4 text-center text-darkBlue bg-offWhite py-2 md:py-3 text-sm md:text-lg font-semibold"
            onClick={() => onSelected(answer)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}
