"use server";

import { db } from "@/db/connection";
import { EnumRole } from "@/db/enum/role";
import { roles } from "@/db/schema/roles";
import { users } from "@/db/schema/users";
import { cookies } from "next/headers";

const addDefaultRoles = async () => {
  const existingRoles = await db.query.roles.findMany();

  if (existingRoles.length) {
    return;
  }

  const userRole = await db
    .insert(roles)
    .values({
      name: EnumRole.USER,
    })
    .returning({
      id: roles.id,
    });

  if (!userRole) {
    throw new Error(`An error occurred while creating the user role.`);
  }

  return userRole;
};

export const addUser = async (userName: string) => {
  try {
    const [userRole] = await addDefaultRoles() || [];
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
        role_id: userRole.id,
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
