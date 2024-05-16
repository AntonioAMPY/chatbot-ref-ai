export function UserForm() {
  return (
    <form className="flex flex-col gap-y-5" aria-label="User Name Form">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <label htmlFor="name" className="text-xl font-semibold">
          What&apos;s your name?
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Enter your name"
          required
          aria-required="true"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
        aria-label="Start Chatting Button"
      >
        Start Chatting
      </button>
    </form>
  );
}