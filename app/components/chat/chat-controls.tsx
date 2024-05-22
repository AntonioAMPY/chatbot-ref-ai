import Image from "next/image";

interface ChatControlsProps {
  isOpenMenu?: boolean;
  onCreateChat: () => void;
}

export const ChatControls = ({
  isOpenMenu = true,
  onCreateChat,
}: ChatControlsProps) => (
  <button
    type="button"
    className={`${
      isOpenMenu ? "w-[344px]" : "w-[50px] bg-[#020617]"
    } text-[#00bf6f] bg-[#1d252d] hover:bg-[#2d2d2e] rounded-sm p-2 font-bold`}
    onClick={onCreateChat}
    aria-label="Create new chat"
  >
    {isOpenMenu ? (
      "New Chat"
    ) : (
      <Image
        src="/icons/plus-icon.svg"
        alt="Create new chat"
        width={40}
        height={40}
      />
    )}
  </button>
);
