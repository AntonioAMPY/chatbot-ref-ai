import { Fragment, RefObject } from "react";
import { Message } from "@/types/Message";
import { ChatForm } from "./chat-form";
import { LoadingSpinner } from "../messages/loading-spinner";
import ChatMessages from "./chat-messages";

interface ChatContentProps {
  chatId: string | null;
  messages: Message[] | null;
  messagesEndRef: RefObject<HTMLDivElement>;
  isLoadingChatMessages: boolean;
}

export const ChatContent = ({
  chatId,
  messages,
  messagesEndRef,
  isLoadingChatMessages,
}: ChatContentProps) => {
  return (
    <div
      className={`flex flex-col justify-end items-center h-full pb-5 max-h-[87vh] w-[260px] sm:w-[450px] sm:gap-y-2`}
    >
      <main
        className="flex flex-col justify-start pt-4 items-center gap-x-5 gap-y-5 overflow-y-auto w-full max-w-md"
        role="main"
      >
        {isLoadingChatMessages ? (
          <LoadingSpinner />
        ) : !chatId ? (
          <p className="text-gray-500 pb-2">Create a chat to start 🎊</p>
        ) : messages?.length === 0 ? (
          <p className="text-gray-500 pb-2">No messages yet 📭</p>
        ) : (
          <Fragment>
            <ChatMessages messages={messages} />
            <div className="none" ref={messagesEndRef} />
          </Fragment>
        )}
      </main>
      <ChatForm />
    </div>
  );
};
