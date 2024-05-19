import { useEffect, useState } from "react";
import { UserName } from "./username";
import { createChat, getChats } from "@/services/chatService";
import { ChatState } from "@/types/Chat";
import WelcomeUser from "./welcome";
import { useCookies } from "next-client-cookies";

export function Sidebar() {
  const [chats, setChats] = useState<ChatState[]>([]);
  const cookies = useCookies();
  const cookieUserId = cookies.get("userId") || "";
  const cookieUserName = cookies.get("userName") || "";

  const getUserChats = async () => {
    try {
      const chats = await getChats(cookieUserId);
      setChats(chats);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserChats();
  }, []);

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
          onClick={() => createChat(cookieUserId)}
          aria-label="Create new chat"
        >
          New chat
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
        {chats.length !== 0 && (
          <h3 className="text-white font-semibold text-xl">Chats</h3>
        )}
        {chats.map((chat: ChatState) => (
          <button
            key={chat.id}
            className="text-lg font-bold bg-slate-500 hover:bg-slate-700 text-white p-2 rounded-sm"
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
