import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Messages } from "./messages";

describe("Messages", () => {
  it("renders the correct components with the correct props", () => {
    const message = "Hello, world!";
    const timestamp = 1634567890;

    const { getByText, getByAltText } = render(
      <Messages message={message} timestamp={timestamp} />
    );

    expect(getByText(message)).toBeInTheDocument();
    expect(getByAltText("User profile photo")).toBeInTheDocument();
  });

  it("renders the correct components with isBotMessage prop set to true", () => {
    const message = "Hello, bot!";
    const timestamp = 1634567890;

    const { getByText, getByAltText } = render(
      <Messages isBotMessage message={message} timestamp={timestamp} />
    );

    expect(getByText(message)).toBeInTheDocument();
    expect(getByAltText("Bot profile photo")).toBeInTheDocument();
  });
});