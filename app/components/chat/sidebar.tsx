import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import { UserName } from "./username";
import {
  createChat,
  getChats,
  deleteChat,
  getChat,
} from "@/services/chatService";
import { useCookies } from "next-client-cookies";
import { ChatContext } from "@/app/chat/page";
import WelcomeUser from "./welcome";
import { Chat } from "@/types/Chat";
import { ChatList } from "./chat-list";
import Image from "next/image";
import { getChatMessages } from "@/services/messageService";
import { Message } from "@/types/Message";

export function Sidebar() {
  const { setMessages, setChatId } = useContext(ChatContext);
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const cookies = useCookies();
  const cookieUserId = cookies.get("userId") || "";
  const cookieUserName = cookies.get("userName") || "";

  const fetchUserChats = useCallback(async () => {
    setIsLoading(true);
    try {
      const chats = await getChats(cookieUserId);
      setChats(chats);
      if (chats.length > 0) {
        setSelectedChatId(chats[0].id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [cookieUserId, setChats, setSelectedChatId]);

  /* A more permanent solution involving backend schema modifications is recommended for future considerations */
  /* You have to click the chat to update the firstMessage or reload the page (fetchUserChats) */ 
  const fetchChatMessages = useCallback(
    async (chatId: string) => {
      async function fetchAndUpdateChat(chatId: string, messages: Message[]) {
        try {
          const updatedChat = await getChat(chatId);
          setChats((prevChats) =>
            prevChats.map((chat) =>
              chat.id === chatId
                ? {
                    ...chat,
                    firstMessage: messages.find(
                      (message) => message.chat_id === chatId
                    )?.content,
                    timestamp: updatedChat.timestamp,
                  }
                : chat
            )
          );
        } catch (error) {
          console.error(error);
        }
      }

      setChatId(chatId);
      setSelectedChatId(chatId);
      try {
        const messages = await getChatMessages(chatId);
        setMessages(messages);
        fetchAndUpdateChat(chatId, messages);
      } catch (error) {
        console.error(error);
      }
    },
    [setChatId, setSelectedChatId, setMessages, setChats]
  );

  async function handleCreateChat() {
    try {
      const chat = await createChat(cookieUserId);
      setChats((prevChats) => [...prevChats, chat]);
      setSelectedChatId(chat.id);
      setChatId(chat.id);
      setMessages([]);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteChat(chatId: string) {
    try {
      await deleteChat(chatId);
      setChats((prevChats) => prevChats.filter((chat) => chat.id !== chatId));
      setSelectedChatId(null);
      setChatId("");
      setMessages([]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUserChats();
  }, [fetchUserChats]);

  useEffect(() => {
    if (selectedChatId) {
      fetchChatMessages(selectedChatId);
    }
  }, [selectedChatId, fetchChatMessages]);

  return (
    <aside
      className="flex flex-col justify-center items-center bg-slate-950 py-10 px-10 h-full rounded-sm"
      role="complementary"
      aria-label="Chat Sidebar"
    >
      <div className="flex flex-col justify-center items-center gap-y-8 w-80">
        <WelcomeUser />
        <button
          type="button"
          className={`w-80 bg-[#1d252d] text-[#00bf6f] hover:bg-[#2d2d2e] rounded-sm p-2 font-bold ${
            isLoading && "bg-gray-600 cursor-not-allowed"
          }`}
          onClick={handleCreateChat}
          aria-label="Create new chat"
          disabled={isLoading}
        >
          New chat
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-2 flex-grow">
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
      </div>
      <UserName userName={cookieUserName} />
    </aside>
  );
}
