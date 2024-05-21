import { RefObject } from "react";
import { Message } from "@/types/Message";
import { Messages } from "../messages/messages";
import { EnumAuthor } from "@/db/enum/message";
import { ChatForm } from "./chat-form";

interface ChatContentProps {
  chatId: string | null;
  messages: Message[] | null;
  messagesEndRef: RefObject<HTMLDivElement>;
}

export const ChatContent = ({
  chatId,
  messages,
  messagesEndRef,
}: ChatContentProps) => (
  <div className="flex flex-col justify-end items-center gap-y-2 h-full pb-5 max-h-[87vh] w-[450px]">
    <main
      className="flex flex-col justify-start pt-4 items-center gap-x-5 gap-y-5 overflow-y-auto w-full max-w-md"
      role="main"
    >
      {chatId && messages?.length === 0 && (
        <p className="text-gray-500">No messages yet</p>
      )}
      {messages?.map((message) => (
        <Messages
          key={message.id}
          message={message.content}
          timestamp={message.timestamp}
          isBotMessage={message.author === EnumAuthor.BOT}
        />
      ))}
      <div className="none" ref={messagesEndRef} />
    </main>
    <ChatForm />
  </div>
);
