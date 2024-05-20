"use client";

import { Chat } from "@/types/Chat";
import { minutesAgo } from "@/utils/formatTime";

interface ChatListProps {
  chat: Chat;
  selectedChatId: string | null;
  fetchChatMessages: (chatId: string) => void;
}

export function ChatList({
  chat,
  selectedChatId,
  fetchChatMessages,
}: ChatListProps) {
  return (
    <button
      key={chat.id}
      type="button"
      onClick={() => fetchChatMessages(chat.id)}
      className={`w-80 text-lg font-bold p-2 rounded-sm ${
        chat.id === selectedChatId
          ? "bg-[#00bf6f] hover:bg-[#069657]"
          : "bg-slate-500"
      } hover:bg-slate-700 text-white`}
      aria-label={`Chat from ${new Date(chat.timestamp).toLocaleString()}`}
    >
      <div className="flex flex-row gap-x-2 items-center">
        <span className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
          {chat.firstMessage || "No messages yet"} -
        </span>
        <span className="text-center">
          {/* timestamp from the time the chat was created */}
          {minutesAgo(chat.timestamp)} minutes ago
        </span>
      </div>
    </button>
  );
}
