import React from "react";
import Header from "./Components/Header";
import QuizBoard from "./Components/QuizBoard";
import "./App.css";

function App() {
  return <div className="w-dvw h-dvh bg-seaLight flex flex-col items-center">
    <Header />
    <QuizBoard/>
  </div>;
}

export default App;
