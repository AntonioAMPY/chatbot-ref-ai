import { Message } from "@/types/Message";

export const getMessages = async (chatId: string): Promise<Message[]> => {
  const response = await fetch(`/api/messages/${chatId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("An error occurred while fetching messages.");
  }
  const messages: Message[] = await response.json();
  return messages;
};

export const addMessage = async (
  chatId: string,
  content: string
): Promise<Message> => {
  const response = await fetch("/api/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatId, content }),
  });

  if (!response.ok) {
    throw new Error("An error occurred while sending the message.");
  }

  return response.json();
};
