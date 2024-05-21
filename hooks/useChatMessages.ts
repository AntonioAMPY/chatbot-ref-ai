import { useState, useCallback, useEffect, useContext } from "react";
import { getChatMessages } from "@/services/messageService";
import { ChatContext } from "@/app/chat/page";
import { getChat } from "@/services/chatService";

export function useChatMessages(selectedChatId: string | null) {
  const { setMessages, setChatId } = useContext(ChatContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchChatMessages = useCallback(async () => {
    if (!selectedChatId) return;
    setIsLoading(true);
    try {
      const messages = await getChatMessages(selectedChatId);
      setMessages(messages);
      const updatedChat = await getChat(selectedChatId);
      setChatId(updatedChat.id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedChatId, setMessages, setChatId]);

  useEffect(() => {
    fetchChatMessages();
  }, [fetchChatMessages]);

  return { isLoading, fetchChatMessages };
}
