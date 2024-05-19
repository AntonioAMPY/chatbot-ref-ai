"use server";

import { db } from "@/db/connection";
import { users } from "@/db/schema/users";
import { redirect } from "next/navigation";

export const addUser = async (formData: FormData) => {
  const userName = formData.get("name") as string;
  const userExists = await db.query.users.findMany({
    where: (users, { eq }) => eq(users.name, userName),
  });
  if (!userExists.length) {
    try {
      db.insert(users)
        .values({
          id: crypto.randomUUID(),
          name: userName,
          role_id: 2,
        })
        .run();

      } catch (error) {
        console.error(error);
      }
      redirect("/chat");
    } else {
      redirect("/chat");
    }
};
