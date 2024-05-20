import { useContext, useEffect, useState } from "react";
import { UserName } from "./username";
import { createChat, getChats, getChatMessages } from "@/services/chatService";
import { useCookies } from "next-client-cookies";
import { ChatContext } from "@/app/chat/page";
import WelcomeUser from "./welcome";
import { Chat } from "@/types/Chat";
import { ChatList } from "./chat-list";

export function Sidebar() {
  const { setMessages, messages, setChatId } = useContext(ChatContext);
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    try {
      const chats = await getChats(cookieUserId);
      setChats(chats);
      if (chats.length > 0) {
        setSelectedChatId(chats[0].id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
      <div className="flex flex-col justify-center items-center gap-y-8 w-80">
        <WelcomeUser />
        <button
          type="button"
          className={`w-80 bg-[#1d252d] text-[#00bf6f] hover:bg-[#2d2d2e] rounded-sm p-2 font-bold ${
            isLoading && "bg-gray-600 cursor-not-allowed"
          }`}
          onClick={handleCreateChat}
          aria-label="Create new chat"
          disabled={isLoading}
        >
          New chat
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
            <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
            <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
            <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
          </div>
        ) : (
          <>
            {chats.length === 0 ? (
              <h2 className="text-white font-semibold text-xl">No chats yet</h2>
            ) : (
              <h2 className="text-white font-semibold text-xl">Chats</h2>
            )}
            {chats.map((chat) => (
              <ChatList
                key={chat.id}
                chat={chat}
                selectedChatId={selectedChatId}
                fetchChatMessages={fetchChatMessages}
              />
            ))}
          </>
        )}
      </div>
      <UserName userName={cookieUserName} />
    </aside>
  );
}
