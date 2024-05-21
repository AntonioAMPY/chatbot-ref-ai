import { db } from "@/db/connection";
import { chats } from "@/db/schema/chats";
import { messages } from "@/db/schema/messages";
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

    const chatsWithFirstMessage = await Promise.all(
      userChats.map(async (chat) => {
        const [firstMessage] = await db.query.messages.findMany({
          where: (messages, { eq }) => eq(messages.chat_id, chat.id),
          orderBy: [asc(messages.timestamp)],
          limit: 1,
        });

        return {
          ...chat,
          firstMessage: firstMessage?.content || "",
        };
      })
    );
    return NextResponse.json({
      chats: chatsWithFirstMessage,
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
