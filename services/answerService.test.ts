import { getAnswer } from "@/services/answerService";
import { Answer } from "@/types/Answer";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("getAnswer", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("should fetch the answer successfully", async () => {
    const question = "What is the meaning of life?";
    const expectedAnswer: Answer = {
      id: 1,
      question: question,
      answer: "42",
    };

    jest.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(expectedAnswer),
    } as unknown as Response);

    const response = await getAnswer(question);

    expect(response).toEqual(expectedAnswer);

    expect(window.fetch).toHaveBeenCalledWith(
      `/api/answer?question=${question}`
    );
  });

  it("should throw an error if the response is not ok", async () => {
    const question = "What is the meaning of life?";

    jest.spyOn(window, "fetch").mockResolvedValueOnce({
      ok: false,
    } as Response);

    await expect(getAnswer(question)).rejects.toThrow(
      "An error occurred while fetching the answer."
    );

    expect(window.fetch).toHaveBeenCalledWith(
      `/api/answer?question=${question}`
    );
  });
});
