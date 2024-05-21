import { useState, useCallback, useEffect } from "react";
import { createChat, getChats, deleteChat } from "@/services/chatService";
import { useCookies } from "next-client-cookies";
import { Chat } from "@/types/Chat";

export function useChats() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const cookies = useCookies();
  const cookieUserId = cookies.get("userId") || "";

  const fetchUserChats = useCallback(async () => {
    try {
      const chats = await getChats(cookieUserId);
      setChats(chats);
      if (chats.length > 0) {
        setSelectedChatId(chats[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  }, [cookieUserId]);

  const handleCreateChat = useCallback(async () => {
    try {
      const chat = await createChat(cookieUserId);
      setChats((prevChats) => [...prevChats, chat]);
      setSelectedChatId(chat.id);
    } catch (error) {
      console.error(error);
    }
  }, [cookieUserId]);

  const handleDeleteChat = useCallback(async (chatId: string) => {
    try {
      await deleteChat(chatId);
      setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
      if (chats.length > 1) {
        const chatIndex = chats.findIndex((chat) => chat.id === chatId);
        setSelectedChatId(chats[chatIndex === 0 ? 1 : chatIndex - 1].id);
      } else {
        setSelectedChatId(null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [chats]);

  useEffect(() => {
    fetchUserChats();
  }, [fetchUserChats]);

  return { chats, selectedChatId, handleCreateChat, handleDeleteChat };
}