import React from "react";
import Logo from "../Assets/icons8-quiz-64.png";

export default function Header() {
  return (
    <header className=" text-3xl md:text-4xl font-bold mt-11 tracking-widest text-darkBlue cursor-default flex flex-col justify-center items-center text-center">
      <img src={Logo} alt="Logo"  />
      <h1 className=" text-center ">QUIZZAT</h1>
    </header>
  );
}
