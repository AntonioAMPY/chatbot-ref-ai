import { db } from "@/db/connection";
import { chat } from "@/db/schema/chats";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json({ message: "Hello World!!" });
}

export async function POST(req: Request) {
  const { userId, message } = await req.json();

  try {
    const insertedChat = db.insert(chat).values({
      id: crypto.randomUUID(),
      user_id: userId,
      message,
    });

    return NextResponse.json({
      message: "Chat was created successfully!",
      chat: insertedChat,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "An error occurred while creating the chat.",
    });
  }
}
