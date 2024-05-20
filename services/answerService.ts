import { Answer } from "@/types/Answer";

export const getAnswer = async (question: string) => {
  const response = await fetch(`/api/answer?question=${question}`);

  if (!response.ok) {
    throw new Error("An error occurred while fetching the answer.");
  }

  const responseAnswer: Answer = await response.json();
  return responseAnswer;
};
