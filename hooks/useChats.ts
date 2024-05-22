import { useState, useCallback, useEffect, useContext } from "react";
import { createChat, getChats, deleteChat } from "@/services/chatService";
import { useCookies } from "next-client-cookies";
import { Chat } from "@/types/Chat";
import { ChatContext } from "@/app/chat/page";

export function useChats() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoadingChats, setIsLoadingChats] = useState(false);
  const { setChatId, setMessages} = useContext(ChatContext);
  const cookies = useCookies();
  const cookieUserId = cookies.get("userId") || "";

  const fetchUserChats = useCallback(async () => {
    setIsLoadingChats(true);
    try {
      const chats = await getChats(cookieUserId);
      setChats(chats);
      if (chats.length > 0) {
        setChatId(chats[0].id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingChats(false);
    }
  }, [cookieUserId, setChatId]);

  const handleCreateChat = useCallback(async () => {
    try {
      const chat = await createChat(cookieUserId);
      setChats((prevChats) => [...prevChats, chat]);
      setChatId(chat.id);
      setMessages([]);
    } catch (error) {
      console.error(error);
    }
  }, [cookieUserId, setMessages, setChatId]);

  const handleDeleteChat = useCallback(
    async (chatId: string) => {
      try {
        await deleteChat(chatId);
        setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
        if (chats.length > 1) {
          const chatIndex = chats.findIndex((chat) => chat.id === chatId);
          setChatId(chats[chatIndex === 0 ? 1 : chatIndex - 1].id);
        } else {
          setChatId("");
          setMessages([]);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [chats, setChatId, setMessages]
  );

  useEffect(() => {
    fetchUserChats();
  }, [fetchUserChats]);

  return { chats, isLoadingChats, handleCreateChat, handleDeleteChat };
}
