import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ChatList } from "./chat-list";
import { jest } from "@jest/globals";

describe("Chat page", () => {
  test("renders ChatList component", async () => {
    const chat = {
      id: "chatId",
      timestamp: Date.now(),
      firstMessage: "Hello",
      user_id: "userId",
    };
    const selectedChatId = "selectedChatId";
    const fetchChatMessages = jest.fn();

    render(
      <ChatList
        chat={chat}
        selectedChatId={selectedChatId}
        fetchChatMessages={fetchChatMessages}
      />
    );

    const buttonText = chat.firstMessage || "Chat";
    const buttonElement = screen.getByText(buttonText, { exact: false });
    expect(buttonElement).toBeInTheDocument();
  });
});
