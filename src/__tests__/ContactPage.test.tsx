import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactPage from "../pages/ContactPage";
import { CustomProviders } from "./utils/CustomProviders";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("ContactPage", () => {
  beforeEach(() => {
    render(
      <CustomProviders>
        <ContactPage />
      </CustomProviders>
    );
  });

  it("shows validation errors when submitting empty form", async () => {
    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/o nome é obrigatório\./i)).toBeInTheDocument();
      expect(screen.getByText(/o e-mail é obrigatório\./i)).toBeInTheDocument();
    });
  });

  it("submits the form successfully with valid data", async () => {
    const nameInput = screen.getByLabelText(/your name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "Rafael" } });
    fireEvent.change(emailInput, { target: { value: "rafael@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith(
        "Mensagem enviada com sucesso!"
      );
    });
  });
});
