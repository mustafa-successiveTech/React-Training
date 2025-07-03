import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm Component", () => {
  it("should accept user input in username and password fields", () => {
    render(<LoginForm onSubmit={() => {}} />);
    
    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    fireEvent.change(usernameInput, { target: { value: "mustafa" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(usernameInput.value).toBe("mustafa");
    expect(passwordInput.value).toBe("123456");
  });

  it("should call onSubmit with correct data on form submit", () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByTestId("username"), {
      target: { value: "mustafa" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "secret" },
    });

    fireEvent.click(screen.getByText("Login"));

    expect(mockSubmit).toHaveBeenCalledWith({
      username: "mustafa",
      password: "secret",
    });
  });
});
