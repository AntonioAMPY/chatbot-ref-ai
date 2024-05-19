"use server";

import { db } from "@/db/connection";
import { users } from "@/db/schema/users";
import { redirect } from "next/navigation";

export const addUser = async (formData: FormData) => {
  const userName = formData.get("name") as string;
  const existingUser = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.name, userName),
  });

  if (existingUser) {
    try {
      const existingChat = await db.query.chats.findFirst({
        where: (chats, { eq }) => eq(chats.user_id, existingUser.id),
      });
      redirect(`chat/${existingChat?.id}`);
    } catch (error) {
      throw new Error(`An error occurred while looking for the chat.`);
    }
  }

  try {
    const [newUser] = await db
      .insert(users)
      .values({
        name: userName,
        role_id: 2,
      })
      .returning({
        userId: users.id,
      });

    console.log("userId", newUser.userId);
    return newUser.userId;
  } catch (error) {
    throw new Error(`An error occurred while creating the user.`);
  }
};
