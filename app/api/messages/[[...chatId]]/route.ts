import { db } from "@/db/connection";
import { chats } from "@/db/schema/chats";
import { messages } from "@/db/schema/messages";
import { asc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const chatMessages = await db.query.messages.findMany({
      where: (messages, { eq }) => eq(messages.chat_id, params.chatId),
      orderBy: [asc(chats.timestamp)],
    });

    return NextResponse.json({
      messages: chatMessages,
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


export async function POST(req: Request) {
  const { chatId, content, author } = await req.json();

  if (!chatId || !content) {
    return NextResponse.json(
      { error: "Chat ID and message are required" },
      {
        status: 400,
      }
    );
  }

  const chatInfo = await db.query.chats.findFirst({
    where: (chats, { eq }) => eq(chats.id, chatId),
  });

  if (!chatInfo) {
    return NextResponse.json(
      { error: "Chat not found" },
      {
        status: 404,
      }
    );
  }

  const [newMessage] = await db.insert(messages).values({
    user_id: chatInfo?.user_id,
    chat_id: chatId,
    content,
    author
  }).returning({
    id: messages.id,
    user_id: messages.user_id,
    timestamp: messages.timestamp,
    content: messages.content,
    author: messages.author
  });

  console.log("newMessage: ", newMessage);
  return NextResponse.json(newMessage);
}
