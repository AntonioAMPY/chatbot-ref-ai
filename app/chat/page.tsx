"use client";

import { createContext, useState } from "react";
import Chat from "../components/chat/chat";
import { Message } from "@/types/Message";

interface ChatContextProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  chatId: string;
  setChatId: (chatId: string) => void;
  isOpenMenu : boolean;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
  toggleMenu: () => void;
}

export const ChatContext = createContext<ChatContextProps>({
  setMessages: () => {},
  messages: [],
  setChatId: () => {},
  chatId: "",
  setIsOpenMenu: () => {},
  isOpenMenu: false,
  toggleMenu: () => {},
});

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatId, setChatId] = useState("");
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        setChatId,
        chatId,
        isOpenMenu,
        setIsOpenMenu,
        toggleMenu: () => {
          setIsOpenMenu(!isOpenMenu);
        },
      }}
    >
      <Chat />
    </ChatContext.Provider>
  );
}
