import { EnumAuthor } from "@/db/enum/message";
import { Message } from "@/types/Message";

export const addMessage = async (
  chatId: string,
  content: string,
  author: EnumAuthor = EnumAuthor.USER
): Promise<Message> => {
  const response = await fetch("/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatId, content, author }),
  });

  if (!response.ok) {
    throw new Error("An error occurred while sending the message.");
  }

  return response.json();
};

export const getChatMessages = async (chatId: string) => {
  const response = await fetch(`/api/messages/${chatId}`);

  if (!response.ok) {
    throw new Error("An error occurred while fetching the chat messages.");
  }

  const { messages }: { messages: Message[] } = await response.json();
  return messages;
};
