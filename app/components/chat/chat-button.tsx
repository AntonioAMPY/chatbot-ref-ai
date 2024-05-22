"use client"

import { minutesAgo } from "@/utils/formatTime";
import { Chat } from "@/types/Chat";

interface ChatButtonProps {
  chat: Chat;
  selectedChatId: string | null;
  width: string;
  fetchChatMessages: (id: string) => void;
  showTimestamp?: boolean;
}
export function ChatButton({
  chat,
  selectedChatId,
  width,
  fetchChatMessages,
  showTimestamp,
}: ChatButtonProps) {
  return (
    <button
      key={chat.id}
      type="button"
      onClick={() => fetchChatMessages(chat.id)}
      className={`text-lg font-bold p-2 rounded-sm ${width} ${
        chat.id === selectedChatId
          ? "bg-[#00bf6f] hover:bg-[#069657]"
          : "bg-slate-500"
      } hover:bg-slate-700 text-white`}
      aria-label={`Chat from ${new Date(chat.timestamp).toLocaleString()}`}
    >
      <div className="flex flex-row gap-x-2 items-center">
        <span className="overflow-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
          {chat.firstMessage || "Chat"} -
        </span>
        {showTimestamp && (
          <span className="text-center">
            {/* timestamp from the time the chat was created */}
            {minutesAgo(chat.timestamp)} minutes ago
          </span>
        )}
      </div>
    </button>
  );
}
