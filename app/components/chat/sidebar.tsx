import { useEffect, useState } from "react";
import { CircleImage } from "../common/circle-image";
import { UserName } from "./username";
import WelcomeUser from "./welcome";
import { createChat, getChats } from "@/services/chatService";
import { ChatApiResponse } from "@/types/Chat";

export function Sidebar() {
  const [chats, setChats] = useState([]);

  const getUserChats = async () => {
    try {
      const chats = await getChats("1f14337c-3065-4a20-9e6c-8d844dde6bed");
      setChats(chats);
    } catch (error) {}
  };

  useEffect(() => {
    getUserChats();
  }, []);

  return (
    <aside className="flex flex-col justify-center items-center bg-slate-950 py-10 px-10 h-full rounded-sm">
      <button
        className="bg-white rounded-sm p-2"
        onClick={() => createChat("1f14337c-3065-4a20-9e6c-8d844dde6bed")}
      >
        New chat
      </button>
      <h3 className="text-white">Chats:</h3>
      {chats.map((chat: ChatApiResponse) => (
        <div key={chat.chatId} className="flex flex-row gap-x-2 items-center">
          <h2 className="text-3xl font-bold text-white">{chat.timestamp}</h2>
        </div>
      ))}
      <div className="flex flex-col justify-center items-center gap-y-8 flex-grow">
        <div className="flex flex-row gap-x-2 items-center">
          <CircleImage src={"/icons/robot-profile.svg"} alt={"ReflexBot"} />
          <h1 className="text-3xl font-bold text-white">ReflexBot</h1>
        </div>
        <WelcomeUser />
      </div>
      <UserName />
    </aside>
  );
}
