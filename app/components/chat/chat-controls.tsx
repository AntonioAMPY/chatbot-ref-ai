interface ChatControlsProps {
  isLoading: boolean;
  onCreateChat: () => void;
}

export const ChatControls = ({
  isLoading,
  onCreateChat,
}: ChatControlsProps) => (
  <button
    type="button"
    className={`w-[370px] bg-[#1d252d] text-[#00bf6f] hover:bg-[#2d2d2e] rounded-sm p-2 font-bold ${
      isLoading && "bg-gray-600 cursor-not-allowed"
    }`}
    onClick={onCreateChat}
    aria-label="Create new chat"
    disabled={isLoading}
  >
    New chat
  </button>
);
