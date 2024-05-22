import { Message } from "@/types/Message";
import { Messages } from "../messages/messages";
import { EnumAuthor } from "@/db/enum/message";
import { Fragment } from "react";

interface ChatMessagesProps {
  messages: Message[] | null;
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <Fragment>
      {messages?.map((message) => (
        <Messages
          key={message.id}
          message={message.content}
          timestamp={message.timestamp}
          isBotMessage={message.author === EnumAuthor.BOT}
        />
      ))}
    </Fragment>
  );
}

export default ChatMessages;
