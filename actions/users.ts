"use server";

import { db } from "@/db/connection";
import { users } from "@/db/schema/users";
import { cookies } from "next/headers";

export const addUser = async (userName: string) => {
  try {
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.name, userName),
    });

    if (existingUser) {
      cookies().set("userId", existingUser.id);
      cookies().set("userName", existingUser.name);
      return;
    }

    const [newUser] = await db
      .insert(users)
      .values({
        name: userName,
        role_id: 2,
      })
      .returning({
        id: users.id,
        userName: users.name,
      });

    cookies().set("userId", newUser.id);
    cookies().set("userName", newUser.userName);

    return newUser.id;
  } catch (error) {
    throw new Error(`An error occurred while creating the user.`);
  }
};
