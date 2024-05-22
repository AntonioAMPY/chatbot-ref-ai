"use client";

import { ChatContext } from "@/app/chat/page";
import { useContext } from "react";

export function HamburgerMenu() {
  const { isOpenMenu, toggleMenu } = useContext(ChatContext);

  return (
    <nav
      className={`flex ${
        isOpenMenu
          ? "h-16 justify-end items-center"
          : "h-16 items-start justify-center"
      }`}
    >
      <button
        type="button"
        className="focus:outline-none rounded-md hover:bg-slate-800 border border-transparent p-5"
        aria-label="Toggle menu"
        onClick={() => {
          toggleMenu();
        }}
      >
        <span className="block w-6 h-px bg-[#00bf6f] mb-1"></span>
        <span className="block w-6 h-px bg-[#00bf6f] mb-1"></span>
        <span className="block w-6 h-px bg-[#00bf6f] mb-1"></span>
      </button>
    </nav>
  );
}
