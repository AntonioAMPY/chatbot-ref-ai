import Image from "next/image";
import { InputMessage } from "./input-message";

export function ChatForm() {
  return (
    <form className="flex justify-center items-center w-full px-5">
      <div className="relative border border-gray-300 rounded-md w-full">
        <InputMessage />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Image
            src="/icons/right-arrow-message.svg"
            alt="send message"
            width={20}
            height={20}
          />
        </button>
      </div>
    </form>
  );
}