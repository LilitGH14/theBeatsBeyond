import { describe, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

describe("login", () => {
  it("render changes username by input", async () => {
    const user = userEvent.setup();

    render(<LoginForm />);

    await user.type(screen.getByTestId("password"), "Dee");
    await user.type(screen.getByTestId("email"), "john.dee@someemail.com");

    await user.click(screen.getByTestId("button"));

    await waitFor(() =>
      expect(screen.getByTestId("email")).toHaveValue("john.dee@someemail.com")
    );
  });
});
