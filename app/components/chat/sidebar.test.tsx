import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Sidebar } from "./sidebar";
import fetch from 'node-fetch';

jest.mock('node-fetch', () => jest.fn());


describe("Sidebar", () => {
  test("renders the component", () => {
    render(<Sidebar />);
    const sidebarElement = screen.getByRole("complementary", {
      name: "Chat Sidebar",
    });
    expect(sidebarElement).toBeInTheDocument();
  });
});
