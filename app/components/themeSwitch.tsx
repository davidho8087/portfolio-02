"use client";


import { useTheme } from '@/app/provider/ThemeContext'
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className='fixed bottom-5 right-11 bg-bodyGrey text-textLight w-10 h-10 rounded-full flex items-center justify-center hover:scale-[1.15] hover:text-textGreen active:scale-105 transition-all z-20'
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
