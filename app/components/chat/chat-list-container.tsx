import { Chat } from "@/types/Chat";
import { ChatList } from "./chat-list";
import { DeleteChat } from "./delete-chat";
import { Fragment } from "react";

interface ChatListContainerProps {
  isLoading: boolean;
  chats: Chat[];
  selectedChatId: string | null;
  onDeleteChat: (chatId: string) => Promise<void>;
  onChatSelect: (chatId: string) => void;
}

export const ChatListContainer = ({
  isLoading,
  chats,
  selectedChatId,
  onDeleteChat,
  onChatSelect,
}: ChatListContainerProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
      {isLoading && chats.length === 0 ? (
        <>
          <h2 className="text-white font-semibold text-xl">Loading chats...</h2>
          <div className="flex flex-col justify-center items-center gap-y-2" />
          <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
          <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
          <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
        </>
      ) : (
        <Fragment>
          {chats.length === 0 ? (
            <h2 className="text-white font-semibold text-xl">No chats yet</h2>
          ) : (
            <Fragment>
              <h2 className="text-white font-semibold text-xl">Chats</h2>
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  className="flex flex-row gap-x-2 items-center"
                >
                  <ChatList
                    chat={chat}
                    selectedChatId={selectedChatId}
                    fetchChatMessages={() => onChatSelect(chat.id)}
                  />
                  <DeleteChat
                    chatId={chat.id}
                    handleDeleteChat={onDeleteChat}
                  />
                </div>
              ))}
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
};
