import { db } from "@/db/connection";
import { chats } from "@/db/schema/chats";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ message: "Hello World!!" });
}

export async function POST(req: Request) {
  const { userId } = await req.json();

  try {
    const [insertedChat] = await db
      .insert(chats)
      .values({
        user_id: userId,
      })
      .returning({
        chatId: chats.id,
        userId: chats.user_id,
        timestamp: chats.timestamp,
      });

    return NextResponse.json({
      message: "Chat was created successfully!",
      chat: insertedChat,
    });
  } catch (error) {
    return NextResponse.json({
      error: "An error occurred while creating the chat.",
    });
  }
}