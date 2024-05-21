import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "./sidebar";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Sidebar", () => {
  beforeEach(() => {
    fetchMock.mockResponse(JSON.stringify({ chats: [] }));
  });

  test("renders the component", async () => {
    render(<Sidebar />);
    const sidebarElement = await waitFor(() =>
      screen.getByRole("complementary", {
        name: "Chat Sidebar",
      })
    );
    expect(sidebarElement).toBeInTheDocument();
  });
});
