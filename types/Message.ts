import { EnumAuthor } from "@/db/enum/message";

export interface Message {
  chat_id: string;
  id: string;
  user_id: string;
  timestamp: number;
  content: string;
  author: EnumAuthor;
}