import { addUser } from "@/actions/users";
import Image from "next/image";

export function UserForm() {

  const handleOnSubmit = async (formData: FormData) => {
    try {
      await addUser(formData);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form action={handleOnSubmit} className="flex flex-col gap-y-5" aria-label="User Name Form">
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
        className="flex flex-row justify-center items-center gap-x-5 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        aria-label="Start Chatting Button"
      >
        <Image
          src="/icons/speech-bubble.svg"
          width={30}
          height={30}
          alt="bubble-icon"
          priority
        />
        Start Chatting
      </button>
    </form>
  );
}
