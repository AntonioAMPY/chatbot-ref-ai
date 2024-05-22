import { Chat } from "@/types/Chat";
import { ChatList } from "./chat-list";
import { DeleteChat } from "./delete-chat";
import { Fragment } from "react";

interface ChatListContainerProps {
  chats: Chat[];
  selectedChatId: string | null;
  onDeleteChat: (chatId: string) => Promise<void>;
}

export const ChatListContainer = ({
  chats,
  selectedChatId,
  onDeleteChat,
}: ChatListContainerProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
      {chats.length === 0 ? (
        <h2 className="text-white font-semibold text-xl">No chats yet</h2>
      ) : (
        <Fragment>
          <h2 className="text-white font-semibold text-xl">Chats</h2>
          {chats.map((chat) => (
            <div key={chat.id} className="flex flex-row gap-x-2 items-center">
              <ChatList chat={chat} selectedChatId={selectedChatId} />
              <DeleteChat chatId={chat.id} handleDeleteChat={onDeleteChat} />
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};
