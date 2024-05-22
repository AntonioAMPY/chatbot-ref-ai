import { Chat } from "@/types/Chat";
import { ChatList } from "./chat-list";
import { DeleteChat } from "./delete-chat";
import { Fragment } from "react";

interface ChatListContainerProps {
  chats: Chat[];
  selectedChatId: string | null;
  isOpenMenu: boolean;
  onDeleteChat: (chatId: string) => Promise<void>;
}

export const ChatListContainer = ({
  chats,
  selectedChatId,
  isOpenMenu,
  onDeleteChat,
}: ChatListContainerProps) => {

  const renderChats = () =>
    chats.map((chat) => (
      <div key={chat.id} className="flex flex-row gap-x-2 items-center">
        <ChatList
          chat={chat}
          selectedChatId={selectedChatId}
          isOpenMenu={isOpenMenu}
        />
        {isOpenMenu && (
          <DeleteChat chatId={chat.id} handleDeleteChat={onDeleteChat} />
        )}
      </div>
    ));

  return (
    <div
      className={`flex flex-col justify-center items-center gap-y-2 ${
        isOpenMenu ? "flex-grow" : "w-[50px]"
      }`}
    >
      {chats.length === 0 && isOpenMenu  ? (
        <h2 className="text-white font-semibold text-xl">No chats yet</h2>
      ) : (
        <Fragment>
          <h2 className="text-white font-semibold text-xl">Chats</h2>
          {renderChats()}
        </Fragment>
      )}
    </div>
  );
};
