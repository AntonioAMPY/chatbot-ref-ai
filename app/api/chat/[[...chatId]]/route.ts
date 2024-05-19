import { db } from "@/db/connection";
import { chats } from "@/db/schema/chats";
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

    return NextResponse.json(
      {
        message: "Chat was created successfully!",
        chat: insertedChat,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occurred while creating the chat.",
      },
      {
        status: 500,
      }
    );
  }
}
