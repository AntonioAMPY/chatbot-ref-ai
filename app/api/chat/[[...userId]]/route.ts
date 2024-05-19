import { db } from "@/db/connection";
import { chats } from "@/db/schema/chats";
import { asc } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const allUserChats = await db.query.chats.findMany({
      where: (chats, { eq }) => eq(chats.user_id, params.userId),
      orderBy: [asc(chats.timestamp)],
    });

    return NextResponse.json({
      chats: allUserChats,
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
