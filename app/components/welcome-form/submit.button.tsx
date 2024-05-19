"use client";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import clsx from 'clsx';

export function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "flex flex-row justify-center items-center gap-x-5 text-white font-bold py-2 px-4 rounded-md transition duration-500 ease-in-out transform",
        pending ? "bg-gray-500 cursor-not-allowed" : "bg-gray-800 hover:bg-gray-900 hover:-translate-y-1 hover:scale-110"
      )}
      aria-label="Start Chatting Button"
    >
      <Image
        src="/icons/speech-bubble.svg"
        width={30}
        height={30}
        alt="bubble-icon"
        priority
      />
      Start Chatting
    </button>
  );
}