"use client";
import { useEffect, useState } from "react";
import Footer from "../common/footer";
import { ChatForm } from "./chat-form";
import { Sidebar } from "./sidebar";
import { getMessages } from "@/services/messageService";
import { Message } from "@/types/Message";
import { Messages } from "./messages";
import { useParams } from "next/navigation";
import { EnumAuthor } from "@/db/enum/message";

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const getMessagesService = async () => {
    // const messages = await getMessages();
    console.log("mensajes", messages);
    setMessages(messages);
  };

  const addNewMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    getMessagesService();
  }, []);

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
              {/* <Messages
                isBotMessage
                message={"Hello! How can I help you today?"}
                timestamp={new Date().getTime()}
              />
              <Messages
                isBotMessage
                message={"I can help you with anything you need."}
                timestamp={new Date().getTime()}
              /> */}
              {messages?.map((message) => (
                <Messages
                  key={message.id}
                  message={message.content}
                  timestamp={message.timestamp}
                  isBotMessage={message.author === EnumAuthor.BOT}
                />
              ))}
            </main>
            <ChatForm onNewMessage={addNewMessage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
