export interface ChatApiResponse {
  chatId: string;
  timestamp: number;
  userId: string;
}

export interface Chat {
  chat: ChatApiResponse;
}