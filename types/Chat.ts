export interface ChatApiResponse {
  chatId: string;
  timestamp: number;
  userId: string;
}

export interface Chat {
  chat: ChatApiResponse;
}

export interface ChatState {
  id: string;
  timestamp: number;
  user_id: string;
}