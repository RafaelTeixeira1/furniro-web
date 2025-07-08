import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutPage from "../pages/CheckoutPage";
import "@testing-library/jest-dom";
import { CustomProviders } from "./utils/CustomProviders";
import { act } from "react";

jest.mock("axios", () => ({
  get: jest.fn((url) => {
    if (url.includes("01001000")) {
      return Promise.resolve({
        data: {
          logradouro: "Praça da Sé",
          localidade: "São Paulo",
          uf: "SP",
          erro: false,
        },
      });
    } else {
      return Promise.resolve({ data: { erro: true } });
    }
  }),
}));

describe("CheckoutPage", () => {
  it("renders CheckoutPage correctly", () => {
    render(
      <CustomProviders>
        <CheckoutPage />
      </CustomProviders>
    );
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  });

  it("shows validation errors when submitting empty form", async () => {
    render(
      <CustomProviders>
        <CheckoutPage />
      </CustomProviders>
    );

    const placeOrderButton = screen.getByRole("button", { name: /place order/i });

    await act(async () => {
      fireEvent.click(placeOrderButton);
    });

    expect(await screen.findByText(/First name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/Last name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/ZIP code must be 8 digits/i)).toBeInTheDocument();
    expect(await screen.findByText(/Valid email is required/i)).toBeInTheDocument();
  });

  it("fills form fields correctly, fetches address, selects payment, and places order", async () => {
    render(
      <CustomProviders>
        <CheckoutPage />
      </CustomProviders>
    );

    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/ZIP code/i), { target: { value: "01001000" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@example.com" } });

    const codRadio = screen.getByLabelText(/Cash On Delivery/i);
    fireEvent.click(codRadio);

    await waitFor(() => {
      expect(screen.getByDisplayValue("Brasil")).toBeInTheDocument();
      expect(screen.getByDisplayValue("Praça da Sé")).toBeInTheDocument();
      expect(screen.getByDisplayValue("São Paulo")).toBeInTheDocument();
      expect(screen.getByDisplayValue("SP")).toBeInTheDocument();
    });

    const placeOrderButton = screen.getByRole("button", { name: /place order/i });
    await act(async () => {
      fireEvent.click(placeOrderButton);
    });

    expect(screen.queryByLabelText(/First Name/i)).toHaveValue("");
    expect(screen.queryByLabelText(/Last Name/i)).toHaveValue("");
    expect(screen.queryByLabelText(/ZIP code/i)).toHaveValue("");
    expect(screen.queryByLabelText(/Email Address/i)).toHaveValue("");
  });

  it("handles CEP not found gracefully", async () => {
    render(
      <CustomProviders>
        <CheckoutPage />
      </CustomProviders>
    );

    fireEvent.change(screen.getByLabelText(/ZIP code/i), { target: { value: "99999999" } });

    await waitFor(() => {
      expect(screen.getByLabelText(/Country/i)).toHaveValue("");
    });
  });

  it("changes payment methods correctly", () => {
    render(
      <CustomProviders>
        <CheckoutPage />
      </CustomProviders>
    );

    const codRadio = screen.getByLabelText(/Cash On Delivery/i);
    fireEvent.click(codRadio);

    expect(codRadio).toBeChecked();
  });
});
