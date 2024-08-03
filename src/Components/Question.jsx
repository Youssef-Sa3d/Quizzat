import React from 'react'
import QTimer from './QTimer';
import Answers from './Answers';

export default function Question({ handleSkip , qText , answers , onSelected}) {
  return (
    <div className="flex flex-col justify-center items-center bg-darkBlue w-[80%] md:w-[65%] gap-4 py-7 px-5 rounded-md">
      <QTimer timeout={10000} onTimeout={handleSkip} />
      <p className=" text-offWhite text-center text-wrap text-lg md:text-xl cursor-default">
        {qText}
      </p>
      <Answers answers={answers} onSelected={onSelected}/>
    </div>
  );
}
