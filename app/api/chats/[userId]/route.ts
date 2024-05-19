import { db } from "@/db/connection";
import { chats } from "@/db/schema/chats";
import { asc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userChats = await db.query.chats.findMany({
      where: (chats, { eq }) => eq(chats.user_id, params.userId),
      orderBy: [asc(chats.timestamp)],
    });

    return NextResponse.json({
      chats: userChats,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occurred while fetching the chats.",
      },
      {
        status: 500,
      }
    );
  }
}

