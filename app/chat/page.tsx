"use client";

import { createContext, useState } from "react";
import Chat from "../components/chat/chat";
import { Message } from "@/types/Message";

interface ChatContextProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  chatId: string;
  setChatId: (chatId: string) => void;
}

export const ChatContext = createContext<ChatContextProps>({
  messages: [],
  setMessages: () => {},
  setChatId: () => {},
  chatId: "",
});

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState("");

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        setChatId,
        chatId,
      }}
    >
      <Chat />
    </ChatContext.Provider>
  );
}
