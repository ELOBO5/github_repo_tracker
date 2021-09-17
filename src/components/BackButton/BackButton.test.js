import { screen } from "@testing-library/react";
import BackButton from ".";

describe("BackButton", () => {

  test("renders a back button", () => {
    renderWithReduxAndRouter(<BackButton />)
    const btn = screen.getByRole("button");
    expect(btn.textContent).toContain("Back");
  });
});
