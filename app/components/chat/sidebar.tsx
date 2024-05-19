import { useContext, useEffect, useState } from "react";
import { UserName } from "./username";
import { createChat, getChats, getChatMessages } from "@/services/chatService";
import { Chat } from "@/types/Chat";
import { useCookies } from "next-client-cookies";
import { ChatContext } from "@/app/chat/page";
import WelcomeUser from "./welcome";

export function Sidebar() {
  const { setMessages, setChatId } = useContext(ChatContext);
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const cookies = useCookies();
  const cookieUserId = cookies.get("userId") || "";
  const cookieUserName = cookies.get("userName") || "";

  useEffect(() => {
    fetchUserChats();
  }, []);

  useEffect(() => {
    if (selectedChatId) {
      fetchChatMessages(selectedChatId);
    }
  }, [selectedChatId]);

  async function fetchUserChats() {
    try {
      const chats = await getChats(cookieUserId);
      setChats(chats);
      if (chats.length > 0) {
        setSelectedChatId(chats[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchChatMessages(chatId: string) {
    setChatId(chatId);
    setSelectedChatId(chatId);
    try {
      const messages = await getChatMessages(chatId);
      setMessages(messages);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateChat() {
    try {
      const chat = await createChat(cookieUserId);
      setChats((prevChats) => [...prevChats, chat]);
      setSelectedChatId(chat.id);
      setChatId(chat.id);
      setMessages([]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <aside
      className="flex flex-col justify-center items-center bg-slate-950 py-10 px-10 h-full rounded-sm"
      role="complementary"
      aria-label="Chat Sidebar"
    >
      <div className="flex flex-col justify-center items-center gap-y-8">
        <WelcomeUser />
        <button
          type="button"
          className="bg-[#1d252d] text-[#00bf6f] hover:bg-[#404041] rounded-sm p-2 font-bold w-full"
          onClick={handleCreateChat}
          aria-label="Create new chat"
        >
          New chat
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
        {chats.length > 0 && (
          <h2 className="text-white font-semibold text-xl">Chats</h2>
        )}
        {chats.map((chat) => (
          <button
            key={chat.id}
            type="button"
            onClick={() => fetchChatMessages(chat.id)}
            className={`text-lg font-bold p-2 rounded-sm ${
              chat.id === selectedChatId ? "bg-[#00bf6f] hover:bg-[#069657]" : "bg-slate-500"
            } hover:bg-slate-700 text-white`}
            aria-label={`Chat from ${new Date(
              chat.timestamp
            ).toLocaleString()}`}
          >
            {new Date(chat.timestamp).toLocaleString()}
          </button>
        ))}
      </div>
      <UserName userName={cookieUserName} />
    </aside>
  );
}