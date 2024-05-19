"use server";

import { db } from "@/db/connection";
import { users } from "@/db/schema/users";

export const addUser = async (userName: string) => {
  try {
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.name, userName),
    });

    if (existingUser) {
      return;
    }

    const [newUser] = await db
      .insert(users)
      .values({
        name: userName,
        role_id: 2,
      })
      .returning({
        userId: users.id,
      });

    return newUser.userId;
  } catch (error) {
    throw new Error(`An error occurred while creating the user.`);
  }
};
