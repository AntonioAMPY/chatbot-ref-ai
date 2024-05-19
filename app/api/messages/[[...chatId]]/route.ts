import { db } from "@/db/connection";
import { messages } from "@/db/schema/messages";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { chatId: string } }
) {
  const chatId = params.chatId;
  if (!chatId) {
    return NextResponse.json(
      { error: "Chat ID is required" },
      {
        status: 400,
      }
    );
  }

  const chatMessages = await db.query.messages.findMany({
    where: (messages, { eq }) => eq(messages.chat_id, chatId),
  });

  return NextResponse.json(chatMessages);
}


export async function POST(req: Request) {
  const { chatId, content } = await req.json();

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
  }).returning({
    id: messages.id,
    user_id: messages.user_id,
    timestamp: messages.timestamp,
    content: messages.content,
  });

  console.log("newMessage: ", newMessage);
  return NextResponse.json(newMessage);
}