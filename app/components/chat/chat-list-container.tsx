import { Chat } from "@/types/Chat";
import { ChatList } from "./chat-list";
import { DeleteChat } from "./delete-chat";

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
      {isLoading ? (
        <>
          <h2 className="text-white font-semibold text-xl">Loading chats...</h2>
          <div className="flex flex-col justify-center items-center gap-y-2" />
          <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
          <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
          <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
        </>
      ) : chats.length === 0 ? (
        <h2 className="text-white font-semibold text-xl">No chats yet</h2>
      ) : (
        <>
          <h2 className="text-white font-semibold text-xl">Chats</h2>
          {chats.map((chat) => (
            <div key={chat.id} className="flex flex-row gap-x-2 items-center">
              <ChatList
                chat={chat}
                selectedChatId={selectedChatId}
                fetchChatMessages={() => onChatSelect(chat.id)}
              />
              <DeleteChat chatId={chat.id} handleDeleteChat={onDeleteChat} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

{
  /* <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
            <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
            <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
            <div className="w-80 h-10 bg-gray-500 animate-pulse rounded-sm"></div>
          </div>
        ) : (
          <>
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
                      key={chat.id}
                      chat={chat}
                      selectedChatId={selectedChatId}
                      fetchChatMessages={fetchChatMessages}
                    />
                    <div className="flex bg-white p-2 rounded-sm">
                      <Image
                        className="cursor-pointer"
                        src="/icons/trash-can.svg"
                        alt="Delete chat icon"
                        width={27}
                        height={27}
                        onClick={() => handleDeleteChat(chat.id)}
                      />
                    </div>
                  </div>
                ))}
              </Fragment>
            )}
          </>
        )}
      </div> */
}
