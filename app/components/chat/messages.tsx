import { Fragment } from "react";
import { CircleImage } from "../common/circle-image";

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
  const conditionalImage = isBotMessage
    ? "/icons/robot-profile.svg"
    : "/icons/cat-user-profile.svg";

  const altText = isBotMessage ? "Bot profile photo" : "User profile photo";

  const ImageComponent = (
    <div className="flex-shrink-0" role="img" aria-label={altText}>
      <CircleImage src={conditionalImage} alt={altText} />
    </div>
  );

  const TextComponent = (
    <p className="flex-grow bg-gray-800 text-white font-bold py-2 px-4 rounded-md text-pretty text-right">
      {message}
    </p>
  );

  const timestampString = new Date(timestamp).toLocaleString();

  return (
    <div className="flex flex-col h-full">
      <div
        className={`flex px-5 items-center gap-x-2 break-all w-full ${
          isBotMessage ? "justify-start" : "justify-end"
        }`}
        role="presentation"
      >
        {isBotMessage ? (
          <Fragment>
            {ImageComponent}
            {TextComponent}
          </Fragment>
        ) : (
          <Fragment>
            {TextComponent}
            {ImageComponent}
          </Fragment>
        )}
      </div>
      <p className="text-sm text-gray-500">{timestampString}</p>
    </div>
  );
}
