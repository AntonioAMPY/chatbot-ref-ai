"use client";
interface TextMessageProps {
  isBotMessage?: boolean;
  message: string;
  timestampString: string;
}

export function TextMessage({
  isBotMessage,
  message,
  timestampString,
}: TextMessageProps) {
  return (
    <div
      className={`flex flex-col w-full ${
        isBotMessage ? "items-start" : "items-end"
      } animate-fade-in`}
    >
      <p
        className={`bg-gray-800 text-white font-bold py-2 px-4 rounded-md text-pretty max-w-[80%] text-left`}
      >
        {message}
      </p>
      <p className={`text-sm text-gray-400 mt-1`}>{timestampString}</p>
    </div>
  );
}
