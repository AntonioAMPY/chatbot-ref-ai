import Image from "next/image";

export function InputMessage() {
  return (
    <form className="flex justify-center items-center w-full px-5">
      <div className="relative border border-gray-300 rounded-md w-full">
        <input
          type="text"
          id="message"
          name="message"
          className="p-2 w-full pl-3 rounded-md"
          placeholder="Type a message"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
        >
          <Image src="/icons/right-arrow-message.svg" alt="send message" width={20} height={20}/>
        </button>
      </div>
    </form>
  );
}