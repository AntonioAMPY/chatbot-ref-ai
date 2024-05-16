import { CircleImage } from "../common/circle-image";

interface MessageProps {
  isBotMessage: boolean;
  message: string;
}

export function Messages({ isBotMessage, message }: MessageProps) {
  const conditionalImage = isBotMessage
    ? "/icons/robot-profile.svg"
    : "/icons/cat-user-profile.svg";
  const altText = isBotMessage ? "Bot profile photo" : "User profile photo";

  return (
    <div
      className={`flex px-5 items-start gap-x-2 break-all w-full ${
        isBotMessage ? "justify-start" : "justify-end"
      }`}
      role="presentation"
    >
      {isBotMessage ? (
        <>
          <div className="flex-shrink-0" role="img" aria-label={altText}>
            <CircleImage src={conditionalImage} alt={altText} />
          </div>
          <p className="flex-grow bg-gray-800 text-white font-bold py-2 px-4 rounded-md text-pretty text-right">
            {message}
          </p>
        </>
      ) : (
        <>
          <p className="flex-grow bg-gray-800 text-white font-bold py-2 px-4 rounded-md text-pretty text-right">
            {message}
          </p>
          <div className="flex-shrink-0" role="img" aria-label={altText}>
            <CircleImage src={conditionalImage} alt={altText} />
          </div>
        </>
      )}
    </div>
  );
}