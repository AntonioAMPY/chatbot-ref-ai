import { useChats } from "@/hooks/useChats";
import { UserName } from "./username";
import WelcomeUser from "./welcome-user";
import { useCookies } from "next-client-cookies";
import { useChatMessages } from "@/hooks/useChatMessages";
import { ChatControls } from "../chat/chat-controls";
import { ChatListContainer } from "../chat/chat-list-container";

export function Sidebar() {
  const { chats, selectedChatId, handleCreateChat, handleDeleteChat } =
    useChats();
  const { isLoading, fetchChatMessages } = useChatMessages(selectedChatId);
  const cookies = useCookies();
  const cookieUserName = cookies.get("userName") || "";

  console.log("isLoading", isLoading);
  return (
    <aside
      className="flex flex-col justify-center items-center bg-slate-950 py-10 px-10 h-full rounded-sm w-[450px]"
      role="complementary"
      aria-label="Chat Sidebar"
    >
      <div className="flex flex-col justify-center items-center gap-y-8 w-80">
        <WelcomeUser />
        <ChatControls isLoading={isLoading} onCreateChat={handleCreateChat} />
      </div>
      <ChatListContainer
        isLoading={isLoading}
        chats={chats}
        selectedChatId={selectedChatId}
        onDeleteChat={handleDeleteChat}
        onChatSelect={fetchChatMessages}
      />
      <UserName userName={cookieUserName} />
    </aside>
  );
}
