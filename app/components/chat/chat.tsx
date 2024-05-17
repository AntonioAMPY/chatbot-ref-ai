import Footer from "../common/footer";
import { InputMessage } from "./input-message";
import { Messages } from "./messages";
import { Sidebar } from "./sidebar";

export function Chat() {
  return (
    <div
      className="flex flex-col justify-around h-screen gap-x-5"
      aria-label="Chat room"
    >
      <div className="flex justify-center items-center h-full gap-x-10 my-10">
        <Sidebar />
        <div className="flex flex-col justify-end items-center gap-y-10 h-full">
          <main
            className="flex flex-col justify-center items-center gap-x-5 gap-y-10 max-w-md"
            role="main"
          >
            <Messages
              isBotMessage
              message={"Hello! How can I help you today?"}
            />
            <Messages
              isBotMessage
              message={"I can help you with anything you need."}
            />
            <Messages
              isBotMessage={false}
              message={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            />
          </main>
          <InputMessage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chat;
