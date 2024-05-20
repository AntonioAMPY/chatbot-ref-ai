import { Answer } from "@/types/Answer";
import fs from "fs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const question = url.searchParams.get("question");

  if (!question) {
    return NextResponse.json({ error: "Please provide a question." });
  }

  const jsonData = fs.readFileSync("./bot-answers.json", "utf-8");
  const parsedData = JSON.parse(jsonData);

  const response: Answer = parsedData.responses.find(
    (r: { question: string }) =>
      r.question.toLowerCase() === question.toLowerCase()
  );

  if (response) {
    return NextResponse.json(response);
  } else {
    return NextResponse.json({
      question: question,
      answer: "I'm sorry, I don't have an answer for that.",
    });
  }
}
