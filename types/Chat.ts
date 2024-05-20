export interface Chat {
  id: string;
  timestamp: number;
  user_id: string;
  firstMessage?: string;
  lastMessage?: string;
  lastMessageTimestamp?: number;
}