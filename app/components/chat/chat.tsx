"use client";
import { useContext, useEffect, useRef } from "react";
import Footer from "../common/footer";
import { Sidebar } from "../sidebar/sidebar";
import { ChatContext } from "@/app/chat/page";
import { ChatContent } from "./chat-content";
import { useChatMessages } from "@/hooks/useChatMessages";

export function Chat() {
  const { isLoadingChatMessages, fetchChatMessages } = useChatMessages();
  let { chatId, messages } = useContext(ChatContext);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (chatId) {
      fetchChatMessages(chatId);
    }
  }, [chatId, fetchChatMessages]);

  return (
    <div
      className="flex flex-col justify-around h-screen gap-x-5"
      aria-label="Chat room"
    >
      <div className="flex justify-center items-center h-full gap-x-10 my-10">
        <div className="flex h-full bg-white gap-x-2 rounded-sm">
          <Sidebar />
          <ChatContent
            chatId={chatId}
            messages={messages}
            messagesEndRef={messagesEndRef}
            isLoadingChatMessages={isLoadingChatMessages}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
