import { db } from "@/db/connection";
import { chats } from "@/db/schema/chats";
import { messages } from "@/db/schema/messages";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const chat = await db.query.chats.findFirst({
      where: (chats, { eq }) => eq(chats.id, params.chatId),
    });

    if (!chat) {
      return NextResponse.json(
        {
          error: "Chat not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      chat,
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
        id: chats.id,
        user_id: chats.user_id,
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

export async function DELETE(
  _: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    await db.delete(messages).where(eq(messages.chat_id, params.chatId));

    await db.delete(chats).where(eq(chats.id, params.chatId));

    return NextResponse.json(
      {
        message: "Chat and messages were deleted successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occurred while deleting the chat.",
      },
      {
        status: 500,
      }
    );
  }
}
