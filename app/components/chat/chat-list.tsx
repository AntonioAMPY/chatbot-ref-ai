"use client";

import { useChatMessages } from "@/hooks/useChatMessages";
import { Chat } from "@/types/Chat";
import { Fragment } from "react";
import { ChatButton } from "./chat-button";

interface ChatListProps {
  chat: Chat;
  selectedChatId: string | null;
  isOpenMenu: boolean;
}

export function ChatList({ chat, selectedChatId, isOpenMenu }: ChatListProps) {
  const { fetchChatMessages } = useChatMessages();
  return (
    <Fragment>
      {isOpenMenu ? (
        <ChatButton
          chat={chat}
          selectedChatId={selectedChatId}
          width="w-80"
          fetchChatMessages={fetchChatMessages}
          showTimestamp
        />
      ) : (
        <ChatButton
          chat={chat}
          selectedChatId={selectedChatId}
          width="w-[50px]"
          fetchChatMessages={fetchChatMessages}
        />
      )}
    </Fragment>
  );
}
