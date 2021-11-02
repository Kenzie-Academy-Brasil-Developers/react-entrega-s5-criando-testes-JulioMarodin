import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Search from "../../components/Search";
import Providers from "../../providers";
import api from "../../services";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(api);

describe("Search", () => {
  it("should be able to search for a cep", async () => {
    apiMock.onPost("/cep").replyOnce(200, {});
    render(
      <Providers>
        <Search />
      </Providers>
    );

    const inputField = screen.getByPlaceholderText("Insira o CEP");
    const submitButton = screen.getByRole("button");

    fireEvent.change(inputField, { target: { value: 84900000 } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(inputField).toHaveValue(84900000);
    });
  });
});
