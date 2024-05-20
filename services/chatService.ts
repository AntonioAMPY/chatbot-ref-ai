import { Chat } from "@/types/Chat";
import { Message } from "@/types/Message";

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

  const { chat }: { chat: Chat } = await response.json();
  return chat;
};

export const getChats = async (userId: string) => {
  const response = await fetch(`/api/chats/${userId}`);

  if (!response.ok) {
    throw new Error("An error occurred while fetching the chats.");
  }

  const { chats }: { chats: Chat[] } = await response.json();
  return chats;
};

export const getChatMessages = async (chatId: string) => {
  const response = await fetch(`/api/chat/${chatId}`);

  if (!response.ok) {
    throw new Error("An error occurred while fetching the chat messages.");
  }

  const { messages }: { messages: Message[] } = await response.json();
  return messages;
};

export const deleteChat = async (chatId: string) => {
  const response = await fetch(`/api/chat/${chatId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("An error occurred while deleting the chat.");
  }
};