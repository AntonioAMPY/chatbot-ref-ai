"use client";
import { addUser } from "@/actions/users";
import { SubmitButton } from "./submit.button";
import { useRouter } from "next/navigation";

export function UserForm() {
  const route = useRouter();

  const handleOnSubmit = async (formData: FormData) => {
    const userName = formData.get("name")?.toString() ?? "";
    try {
      await addUser(userName);
      route.push(`/chat`);
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
