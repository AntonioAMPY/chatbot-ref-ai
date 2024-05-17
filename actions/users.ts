"use server";

import { db } from "@/db/connection";
import { user } from "@/db/schema/user";
import { revalidatePath } from "next/cache";

export const addUser = async (formData: FormData) => {
  const name = formData.get("name") as string;

  db.insert(user)
    .values({
      id: crypto.randomUUID() as string,
      name,
      role_id: 2,
    })
    .run();

  revalidatePath("/chat");
};
