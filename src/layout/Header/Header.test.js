import { screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {

    it("renders a header", () => {
        renderWithReduxAndRouter(<Header />);
        expect(screen.getByRole("heading").textContent).toBe(
            "Enter the GitHub username to get information about your public repos.");
  });

});
