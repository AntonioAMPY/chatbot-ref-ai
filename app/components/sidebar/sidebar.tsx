import { useChats } from "@/hooks/useChats";
import { UserName } from "./username";
import WelcomeUser from "./welcome-user";
import { useCookies } from "next-client-cookies";
import { ChatControls } from "../chat/chat-controls";
import { ChatListContainer } from "../chat/chat-list-container";
import { HamburgerMenu } from "./hamburguer-menu";
import { useContext } from "react";
import { ChatContext } from "@/app/chat/page";

export function Sidebar() {
  const { chats, handleCreateChat, handleDeleteChat } = useChats();
  const { isOpenMenu, chatId } = useContext(ChatContext);
  const cookies = useCookies();
  const cookieUserName = cookies.get("userName") || "";

  return (
    <aside
      className={`flex flex-col justify-center bg-slate-950 h-full rounded-sm gap-y-10 transition-all ease-in-out duration-500 ${
        isOpenMenu
          ? "md:flex md:w-full md:items-end md:z-0 md:relative absolute items-center py-10 px-10 left-0 top-0 z-10 w-full"
          : "w-full items-center py-5 px-5"
      } w-28`}
      role="complementary"
      aria-label="Chat Sidebar"
    >
      <HamburgerMenu />
      {isOpenMenu ? (
        <div className="flex flex-col justify-center items-center gap-y-8 w-80">
          <WelcomeUser />
          <ChatControls onCreateChat={handleCreateChat} />
          <ChatListContainer
            chats={chats}
            selectedChatId={chatId}
            onDeleteChat={handleDeleteChat}
            isOpenMenu={isOpenMenu}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-y-5 justify-start h-full">
          <ChatListContainer
            chats={chats}
            isOpenMenu={isOpenMenu}
            selectedChatId={chatId}
            onDeleteChat={handleDeleteChat}
          />
          <ChatControls
            isOpenMenu={isOpenMenu}
            onCreateChat={handleCreateChat}
          />
        </div>
      )}
      <UserName userName={cookieUserName} />
    </aside>
  );
}
