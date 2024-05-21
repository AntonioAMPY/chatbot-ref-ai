import {
  createChat,
  getChat,
  getChats,
  deleteChat,
} from "@/services/chatService";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("chatService", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  describe("createChat", () => {
    it("should create a new chat", async () => {
      const userId = "user123";

      fetchMock.mockResponseOnce(JSON.stringify({ chat: { user_id: userId } }));

      const chat = await createChat(userId);
      expect(chat).toBeDefined();
      expect(chat.user_id).toBe(userId);
    });
    it("should throw an error if an error occurs while creating the chat", async () => {
      const userId = "user123";
      jest
        .spyOn(window, "fetch")
        .mockRejectedValueOnce(
          new Error("An error occurred while creating the chat.")
        );
      await expect(createChat(userId)).rejects.toThrow(
        "An error occurred while creating the chat."
      );
    });
  });

  describe("getChat", () => {
    it("should get the chat with the specified chatId", async () => {
      const chatId = "chat123";

      fetchMock.mockResponseOnce(JSON.stringify({ chat: { id: chatId } }));

      const chat = await getChat(chatId);
      expect(chat).toBeDefined();
      expect(chat.id).toBe(chatId);
    });

    it("should throw an error if an error occurs while fetching the chat", async () => {
      const chatId = "chat123";
      jest
        .spyOn(window, "fetch")
        .mockRejectedValueOnce(
          new Error("An error occurred while fetching the chat.")
        );
      await expect(getChat(chatId)).rejects.toThrow(
        "An error occurred while fetching the chat."
      );
    });
  });

  describe("getChats", () => {
    it("should get the chats for the specified userId", async () => {
      const userId = "user123";

      fetchMock.mockResponseOnce(
        JSON.stringify({ chats: [{ user_id: userId }, { user_id: userId }] })
      );

      const chats = await getChats(userId);
      expect(chats).toBeDefined();
      expect(Array.isArray(chats)).toBe(true);
    });

    it("should throw an error if an error occurs while fetching the chats", async () => {
      const userId = "user123";
      jest
        .spyOn(window, "fetch")
        .mockRejectedValueOnce(
          new Error("An error occurred while fetching the chats.")
        );
      await expect(getChats(userId)).rejects.toThrow(
        "An error occurred while fetching the chats."
      );
    });
  });

  describe("deleteChat", () => {
    it("should delete the chat with the specified chatId", async () => {
      const chatId = "chat123";
      await expect(deleteChat(chatId)).resolves.not.toThrow();
    });

    it("should throw an error if an error occurs while deleting the chat", async () => {
      const chatId = "chat123";
      jest
        .spyOn(window, "fetch")
        .mockRejectedValueOnce(
          new Error("An error occurred while deleting the chat.")
        );
      await expect(deleteChat(chatId)).rejects.toThrow(
        "An error occurred while deleting the chat."
      );
    });
  });
});
