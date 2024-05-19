import Image from "next/image";
import { useContext, useState } from "react";
import { addMessage } from "@/services/messageService";
import { Message } from "@/types/Message";
import { ChatContext } from "@/app/chat/page";

export function ChatForm() {
  let { chatId, setMessages } = useContext(ChatContext);

  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newMessage = await addMessage(chatId, message);
      console.log("newMessage", newMessage);
      setMessages(
        (prevMessages: Message[]) => [...prevMessages, newMessage] as Message[]
      );
      setMessage("");
    } catch (error) {
      console.error("An error occurred while sending the message.", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full px-5"
    >
      <div className="relative border border-gray-300 rounded-md w-full">
        <input
          type="text"
          id="message"
          name="message"
          className="py-2 pr-24 pl-4 w-full rounded-md"
          placeholder="Type a message..."
          value={message}
          onChange={handleChange}
        />
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
