import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

//primary tests

test("input type email should be initially empty", () => {
  render(<App />);
  const emailInput = screen.getByRole("textbox");
  expect(emailInput).toBeEmptyDOMElement();
});

test("input type password should be initially empty", () => {
  render(<App />);
  const passwordInput = screen.getByLabelText(/password/);
  expect(passwordInput).toBeEmptyDOMElement();
});

test("inputs to confirm password should be initially empty", () => {
  render(<App />);
  const confirmPassword = screen.getByLabelText(/Confirm Password/);
  expect(confirmPassword).toBeEmptyDOMElement();
});

//testing using the userEvents

test("should be able to type an email", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", { name: /email/i });
  userEvent.type(emailInputElement, "selena@gmail.com");
  expect(emailInputElement.value).toBe("selena@gmail.com");
});

test("should be able to type an password", () => {
  render(<App />);
  const passwordInput = screen.getByLabelText("password");
  userEvent.type(passwordInput, "12sasf32");
  expect(passwordInput.value).toBe("12sasf32");
});

test("should be able to type to confirm a password", () => {
  render(<App />);
  const confirmPassword = screen.getByLabelText(/Confirm Password/);
  userEvent.type(confirmPassword, "12sasf32");
  expect(confirmPassword.value).toBe("12sasf32");
});

//testing error message

test("should return a error message when email is invalid", () => {
  render(<App />);
  const errorMessage = screen.queryByText(
    /email address should have a valid value/
  );
  const submitButton = screen.getByRole("button", { name: /submit/i });
  const emailInputElement = screen.getByRole("button", { name: /submit/i });

  expect(errorMessage).not.toBeInTheDocument();

  userEvent.type(emailInputElement, "12312sadfsa");
  userEvent.click(submitButton);

  const sameErrorMessage = screen.queryByText(
    /email address should have a valid value/
  );

  expect(sameErrorMessage).toBeInTheDocument();
});


