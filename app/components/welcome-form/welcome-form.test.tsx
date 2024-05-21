import { render } from "@testing-library/react";
import Footer from "../common/footer";
import "@testing-library/jest-dom";

// https://stackoverflow.com/questions/78434162/react-does-not-recognize-the-fetchpriority-prop-on-a-dom-element-warning-in

describe("Welcome Form", () => {
  describe("Footer", () => {
    test("renders powered by text", () => {
      const { getByText } = render(<Footer />);
      const poweredByText = getByText("Powered by");
      expect(poweredByText).toBeInTheDocument();
    });

    test("renders reflex-robot-image", () => {
      const { getByAltText } = render(<Footer />);
      const reflexRobotImage = getByAltText("reflex-robot-image");
      expect(reflexRobotImage).toBeInTheDocument();
    });
  });
});
