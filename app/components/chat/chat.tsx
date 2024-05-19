"use client";
import { useContext } from "react";
import Footer from "../common/footer";
import { ChatForm } from "./chat-form";
import { Sidebar } from "./sidebar";
import { Messages } from "./messages";
import { EnumAuthor } from "@/db/enum/message";
import { ChatContext } from "@/app/chat/page";

export function Chat() {
  let { messages } = useContext(ChatContext);
  return (
    <div
      className="flex flex-col justify-around h-screen gap-x-5"
      aria-label="Chat room"
    >
      <div className="flex justify-center items-center h-full gap-x-10 my-10">
        <div className="flex h-full bg-white gap-x-2 rounded-sm">
          <Sidebar />
          <div className="flex flex-col justify-end items-center gap-y-10 h-full pb-10">
            <main
              className="flex flex-col justify-center items-center gap-x-5 gap-y-10 max-w-md"
              role="main"
            >
              {messages?.map((message) => (
                <Messages
                  key={message.id}
                  message={message.content}
                  timestamp={message.timestamp}
                  isBotMessage={message.author === EnumAuthor.BOT}
                />
              ))}
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
