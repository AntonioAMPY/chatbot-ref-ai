interface ChatControlsProps {
  onCreateChat: () => void;
}

export const ChatControls = ({ onCreateChat }: ChatControlsProps) => (
  <button
    type="button"
    className={`w-[344px] bg-[#1d252d] text-[#00bf6f] hover:bg-[#2d2d2e] rounded-sm p-2 font-bold`}
    onClick={onCreateChat}
    aria-label="Create new chat"
  >
    New chat
  </button>
);
