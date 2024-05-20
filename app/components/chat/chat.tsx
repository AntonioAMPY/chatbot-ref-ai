"use client";
import { useContext, useEffect, useRef } from "react";
import Footer from "../common/footer";
import { ChatForm } from "./chat-form";
import { Sidebar } from "./sidebar";
import { Messages } from "./messages";
import { EnumAuthor } from "@/db/enum/message";
import { ChatContext } from "@/app/chat/page";

export function Chat() {
  let { messages } = useContext(ChatContext);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="flex flex-col justify-around h-screen gap-x-5"
      aria-label="Chat room"
    >
      <div className="flex justify-center items-center h-full gap-x-10 my-10">
        <div className="flex h-full bg-white gap-x-2 rounded-sm">
          <Sidebar />
          <div className="flex flex-col justify-end items-center gap-y-2 h-full pb-5 max-h-[87dvh]">
            <main
              className="flex flex-col justify-center items-center gap-x-5 gap-y-5 overflow-y-auto w-full max-w-md"
              role="main"
            >
              {messages?.length === 0 && (
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
