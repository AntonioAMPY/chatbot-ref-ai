import { addMessage, getChatMessages } from "@/services/messageService";
import { EnumAuthor } from "@/db/enum/message";
import { Message } from "@/types/Message";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("messageService", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe("addMessage", () => {
    it("should add a message with default author", async () => {
      const chatId = "chat123";
      const content = "Hello, world!";
      const expectedAuthor = EnumAuthor.USER;

      fetchMock.mockResponseOnce(JSON.stringify({}));

      await addMessage(chatId, content);

      expect(fetchMock).toHaveBeenCalledWith("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chatId, content, author: expectedAuthor }),
      });
    });

    it("should throw an error if the response is not ok", async () => {
      const chatId = "chat123";
      const content = "Hello, world!";

      jest
        .spyOn(window, "fetch")
        .mockRejectedValueOnce(
          new Error("An error occurred while sending the message.")
        );

      await expect(addMessage(chatId, content)).rejects.toThrow(
        "An error occurred while sending the message."
      );
    });
  });

  describe("getChatMessages", () => {
    it("should return the chat messages", async () => {
      const chatId = "chat123";
      const expectedMessages: Message[] = [
        {
          id: "1",
          content: "Hello",
          author: EnumAuthor.USER,
          chat_id: "chat123",
          user_id: "user123",
          timestamp: 1716267297596,
        },
        {
          id: "2",
          content: "Hi",
          author: EnumAuthor.BOT,
          chat_id: "chat123",
          user_id: "bot123",
          timestamp: 1716267297596,
        },
      ];

      fetchMock.mockResponseOnce(
        JSON.stringify({ messages: expectedMessages })
      );

      const messages = await getChatMessages(chatId);

      expect(fetchMock).toHaveBeenCalledWith(`/api/messages/${chatId}`);
      expect(messages).toEqual(expectedMessages);
    });

    it("should throw an error if the response is not ok", async () => {
      const chatId = "chat123";

      jest
        .spyOn(window, "fetch")
        .mockRejectedValueOnce(
          new Error("An error occurred while fetching the chat messages.")
        );

      await expect(getChatMessages(chatId)).rejects.toThrow(
        "An error occurred while fetching the chat messages."
      );
    });
  });
});
