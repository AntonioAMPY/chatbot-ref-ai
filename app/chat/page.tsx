import Chat from "../components/chat/chat";
import { CookiesProvider } from "next-client-cookies/server";

export default function ChatRoute() {
  return (
    <CookiesProvider>
      <Chat />
    </CookiesProvider>
  );
}
