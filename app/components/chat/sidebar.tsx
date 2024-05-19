import { Fragment, useEffect, useState } from "react";
import { UserName } from "./username";
import { createChat, getChats } from "@/services/chatService";
import { ChatApiResponse } from "@/types/Chat";
import WelcomeUser from "./welcome";

export function Sidebar() {
  const [chats, setChats] = useState([]);

  const getUserChats = async () => {
    try {
      const chats = await getChats("1f14337c-3065-4a20-9e6c-8d844dde6bed");
      setChats(chats);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserChats();
  }, []);

  return (
    <aside className="flex flex-col justify-center items-center bg-slate-950 py-10 px-10 h-full rounded-sm">
      <div className="flex flex-col justify-center items-center gap-y-8">
        <WelcomeUser />
        <button
          type="button"
          className="bg-[#1d252d] text-[#00bf6f] hover:bg-[#404041] rounded-sm p-2 font-bold w-full"
          onClick={() => createChat("1f14337c-3065-4a20-9e6c-8d844dde6bed")}
        >
          New chat
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
        {chats.map((chat: ChatApiResponse) => (
          <Fragment key={chat.chatId}>
            <h3 className="text-white font-semibold text-xl">Chats</h3>
            <button className="text-lg font-bold bg-slate-500 hover:bg-slate-700 text-white p-2 rounded-sm">
              {new Date(chat.timestamp).toLocaleString()}
            </button>
          </Fragment>
        ))}
      </div>
      <UserName />
    </aside>
  );
}
