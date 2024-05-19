import Image from "next/image";
import { useState } from "react";
import { addMessage } from "@/services/messageService";
import { Message } from "@/types/Message";

interface ChatFormProps {
  onNewMessage: (newMessage: Message) => void;
}

export function ChatForm({ onNewMessage }: ChatFormProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newMessage = await addMessage(
        "6da87d4e-e4a0-4757-9f17-2cebcc89cb5a",
        message
      );
      console.log("newMessage", newMessage);
      onNewMessage(newMessage);
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
          className="p-2 w-full pl-3 rounded-md"
          placeholder="Feeling lost? We've got your back!"
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
