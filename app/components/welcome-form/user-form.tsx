"use client";
import { addUser } from "@/actions/users";
import { SubmitButton } from "./submit.button";
import { useRouter } from "next/navigation";
import { Chat } from "@/types/Chat";

export function UserForm() {
  const route = useRouter();

  const createChat = async (userId: string) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
      throw new Error("An error occurred while creating the chat.");
    }

    const data: Chat = await response.json();
    return data.chat;
  };

  const handleOnSubmit = async (formData: FormData) => {
    try {
      const userId = await addUser(formData);
      const chat = await createChat(userId);
      route.push(`/chat/${chat.chatId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      action={handleOnSubmit}
      className="flex flex-col gap-y-5"
      aria-label="User Name Form"
    >
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
      <SubmitButton />
    </form>
  );
}
