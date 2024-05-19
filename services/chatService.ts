import { Chat } from "@/types/Chat";

export const createChat = async (userId: string) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId }),
  });

  if (!response.ok) {
    throw new Error("An error occurred while creating the chat.");
  }

  const { chat }: Chat = await response.json();
  return chat;
};

export const getChats = async (userId: string) => {
  const response = await fetch(`/api/chat/${userId}`);

  if (!response.ok) {
    throw new Error("An error occurred while fetching the chats.");
  }

  const { chats } = await response.json();
  return chats;
};
