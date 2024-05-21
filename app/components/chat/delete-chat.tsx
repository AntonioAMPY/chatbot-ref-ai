"use client";
import Image from "next/image";

interface DeleteChatProps {
  chatId: string;
  handleDeleteChat(chatId: string): Promise<void>;
}

export function DeleteChat({ chatId, handleDeleteChat }: DeleteChatProps) {
  return (
    <button
      className="flex bg-white p-2 rounded-sm hover:bg-[#F0F0F0]"
      onClick={() => handleDeleteChat(chatId)}
    >
      <Image
        className="cursor-pointer"
        src="/icons/trash-can.svg"
        alt="Delete chat icon"
        width={27}
        height={27}
      />
    </button>
  );
}
