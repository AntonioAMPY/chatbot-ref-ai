import { TextMessage } from "./text-message";
import ProfileImageMessage from "./profile-image-message";
import { timeStampFormat } from "@/utils/formatTime";

interface MessageProps {
  isBotMessage?: boolean;
  message: string;
  timestamp: number;
}

export function Messages({
  isBotMessage = false,
  message,
  timestamp,
}: MessageProps) {

  const profileImage = isBotMessage ? "/icons/robot-profile.svg" : "/icons/cat-user-profile.svg";
  const altText = `${isBotMessage ? "Bot" : "User"} profile photo`;

  return (
    <div className="flex flex-col h-full w-full">
      <div
        className={`flex px-5 items-start gap-x-2 break-words w-full ${
          isBotMessage
            ? "flex-row-reverse justify-end"
            : "flex-row justify-end"
        }`}
        role="presentation"
      >
        <TextMessage
          isBotMessage={isBotMessage}
          message={message}
          timestampString={timeStampFormat(timestamp)}
        />
        <ProfileImageMessage
          profileImage={profileImage}
          altText={altText}
        />
      </div>
    </div>
  );
}
