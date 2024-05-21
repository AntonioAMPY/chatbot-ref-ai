"use client";

import Image from "next/image";
import { UserForm } from "./user-form";
import Footer from "../common/footer";

export function WelcomeForm() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen gap-y-5"
      aria-label="Welcome Form"
    >
      <main
        className="flex flex-col justify-center items-center gap-x-5 gap-y-10 mt-auto"
        role="main"
      >
        <h1 className="text-6xl font-bold">Welcome to ReflexBot ✨</h1>
        <div className="flex flex-row justify-center items-center gap-x-10 border-dashed border-4 rounded-sm border-gray-400 px-10 py-10">
          <UserForm />
          <Image
            src="/assets/welcome.svg"
            alt="Image of Chat ReflexBot"
            width={472}
            height={315}
            priority
            />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default WelcomeForm;
