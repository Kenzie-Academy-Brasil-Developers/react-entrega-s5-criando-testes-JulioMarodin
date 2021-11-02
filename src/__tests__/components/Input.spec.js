import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Input from Search Component", () => {
  test("should be able to render an input", () => {
    render(<Search type="number" placeholder="Insira o CEP" />);

    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
