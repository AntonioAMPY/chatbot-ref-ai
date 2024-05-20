import Image from "next/image";
import { useContext, useState } from "react";
import { addMessage } from "@/services/messageService";
import { Message } from "@/types/Message";
import { ChatContext } from "@/app/chat/page";

export function ChatForm() {
  let { chatId, setMessages } = useContext(ChatContext);

  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement | HTMLTextAreaElement> ) => {
    event.preventDefault();
    setIsSending(true);
    try {
      const newMessage = await addMessage(chatId, message);
      setMessages(
        (prevMessages: Message[]) => [...prevMessages, newMessage] as Message[]
      );
      setMessage("");
    } catch (error) {
      console.error("An error occurred while sending the message.", error);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center w-full px-5"
    >
      <div className="relative rounded-md w-full items-center">
        <textarea
          id="message"
          name="message"
          className="
              border-2 border-gray-300 rounded-md
              pr-10
              [--padding:10px] 
              [field-sizing:content] 
              p-[var(--padding)] 
              px-[calc(var(--padding)+(1lh-1ex)/2)] 
              min-h-[calc(1lh+2*var(--padding))] 
              max-h-[calc(4lh+2*var(--padding))]
              w-[400px]
              resize-none
            "
          placeholder="Ask me about emotional intelligence!"
          value={message}
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault();
              handleSubmit(event);
            }
          }}
          disabled={isSending}
        />
        <button
          type="submit"
          className="absolute right-2 top-[50%]"
          style={{ transform: "translate(-50%, -15px)" }}
          disabled={isSending}
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