import { render, screen } from "@testing-library/react";
import Login from "./login";
import { useAppDispatch, useAppSelector } from "../../store/redux-hooks";
import { testUseAppSelector } from "../../store/test-app-selector";
import { BrowserRouter } from "react-router-dom";
jest.mock("../../store/redux-hooks");
describe("login", () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSelector);

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it("check for Email input", () => {
    const inputElement = screen.getByPlaceholderText(/Enter Email/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("check for password input", () => {

    const inputElement = screen.getByPlaceholderText(/Enter Password/i);
    expect(inputElement).toBeInTheDocument();

  })

  it("check if login button in the doc", () => {
    const buttonElement = screen.getByRole("button", { name: /LOGIN/i });
    expect(buttonElement).toBeInTheDocument();
  });


});
