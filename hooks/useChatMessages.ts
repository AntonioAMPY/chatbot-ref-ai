import { useCallback, useContext, useState } from "react";
import { getChatMessages } from "@/services/messageService";
import { ChatContext } from "@/app/chat/page";
import { getChat } from "@/services/chatService";

export function useChatMessages() {
  const { setMessages, setChatId } = useContext(ChatContext);
  const [isLoadingChatMessages, setIsLoadingChatMessages] = useState(false)

  const fetchChatMessages = useCallback(
    async (selectedChatId: string) => {
      if (!selectedChatId) return;
      setIsLoadingChatMessages(true)
      try {
        const updatedChat = await getChat(selectedChatId);
        setChatId(updatedChat.id);
        const messages = await getChatMessages(selectedChatId);
        setMessages(messages);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingChatMessages(false)
      }
    },
    [setMessages, setChatId]
  );

  return { isLoadingChatMessages, fetchChatMessages };
}
