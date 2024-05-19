import { db } from "@/db/connection";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const chatId = searchParams.get("chat_id");

  if (!chatId) {
    return NextResponse.json({ error: "Chat ID is required" });
  }

  const chatMessages = await db.query.messages.findMany({
    where: (messages, { eq }) => eq(messages.chat_id, chatId),
  });

  console.log("chatMessages: ", chatMessages);
  return NextResponse.json(chatMessages);
}
