import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Button from Search Component", () => {
  test("should be able to render a button", () => {
    render(<Search />);

    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeTruthy();
  });
});
