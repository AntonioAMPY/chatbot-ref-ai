"use client";

import Image from "next/image";
import { UserForm } from "./user-form";
import { RobotImage } from "../common/robot-image";
import Link from "next/link";

export function WelcomeForm() {
  return (
    <div
      className="flex flex-col justify-evenly items-center h-screen gap-y-5"
      aria-label="Welcome Form"
    >
      <main
        className="flex flex-col justify-center items-center gap-x-5 gap-y-10"
        role="main"
      >
        <h1 className="text-4xl font-bold">Welcome to ReflexBot 👋🏼</h1>
        <div className="flex flex-row justify-center items-center gap-x-10 border-dashed border-4 rounded-sm border-gray-400 px-10 py-20">
          <UserForm />
          <Image
            src="/assets/motivation.webp"
            alt="Image of Chat ReflexBot"
            width={400}
            height={400}
          />
        </div>
      </main>
      <footer
        className="flex flex-col justify-center items-center h-16 bg-gray-800 text-white rounded-md px-12 py-14"
        role="contentinfo"
      >
        Powered by <RobotImage />
        <div>
          <Link
            href="https://github.com/AntonioAMPY"
            target="_blank"
            rel="noopener noreferrer"
          >
            AntonioAMPY
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default WelcomeForm;
