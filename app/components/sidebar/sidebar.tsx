import { useChats } from "@/hooks/useChats";
import { UserName } from "./username";
import WelcomeUser from "./welcome-user";
import { useCookies } from "next-client-cookies";
import { useChatMessages } from "@/hooks/useChatMessages";
import { ChatControls } from "../chat/chat-controls";
import { ChatListContainer } from "../chat/chat-list-container";
import { HamburgerMenu } from "./hamburguer-menu";
import { useContext } from "react";
import { ChatContext } from "@/app/chat/page";

export function Sidebar() {
  const { chats, selectedChatId, handleCreateChat, handleDeleteChat } =
    useChats();
  const { isLoading, fetchChatMessages } = useChatMessages(selectedChatId);
  const { isOpenMenu } = useContext(ChatContext);
  const cookies = useCookies();
  const cookieUserName = cookies.get("userName") || "";

  return (
    <aside
      className={`flex flex-col justify-center bg-slate-950  h-full rounded-sm gap-y-10 ${
        isOpenMenu
          ? "md:w-full sm:w-full items-end py-10 px-10"
          : "w-full items-center py-5 px-5"
      } w-28`}
      role="complementary"
      aria-label="Chat Sidebar"
    >
      <HamburgerMenu />
      {isOpenMenu ? (
        <div className="flex flex-col justify-center items-center gap-y-8 w-80">
          <WelcomeUser />
          <ChatControls isLoading={isLoading} onCreateChat={handleCreateChat} />
          <ChatListContainer
            isLoading={isLoading}
            chats={chats}
            selectedChatId={selectedChatId}
            onDeleteChat={handleDeleteChat}
            onChatSelect={fetchChatMessages}
          />
        </div>
      ) : null}
      <UserName userName={cookieUserName} />
    </aside>
  );
}
