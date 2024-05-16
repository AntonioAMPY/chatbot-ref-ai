export function InputMessage() {
  return (
    <form className="flex gap-x-2">
      <input
        type="text"
        id="message"
        name="message"
        className="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Type a message"
      />
      <button
        type="submit"
        className="bg-gray-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
      >
        Send
      </button>
    </form>
  );
}