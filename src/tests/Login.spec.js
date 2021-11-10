import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import LoginPage from "../views/Login";

describe("Login", () => {
	describe("with valid inputs", () => {
		it("calls the onSubmit function", async () => {
			const mockOnSubmit = jest.fn();
			const { getByPlaceholderText, getByRole } = render(
				<LoginPage submitHandler={mockOnSubmit} />
			);

			await act(async () => {
				fireEvent.change(getByPlaceholderText("eve.holt@reqres.in"), {
					target: { value: "eve.holt@reqres.in" },
				});
				fireEvent.change(getByPlaceholderText("cityslicka"), { target: { value: "cityslicka" } });
			});

			await act(async () => {
				fireEvent.click(getByRole("button"));
			});

			expect(mockOnSubmit).toHaveBeenCalled();
		});
	});

	describe("with invalid email", () => {
		it("renders the email validation error", async () => {
			const { getByPlaceholderText, getByText, getByRole } = render(<LoginPage />);

			await act(async () => {
				const emailInput = getByPlaceholderText("eve.holt@reqres.in");
				fireEvent.change(emailInput, { target: { value: "invalid email" } });
				fireEvent.blur(emailInput);
				fireEvent.click(getByRole("button"));
			});

			expect(getByText("Must be a valid email address.")).toBeTruthy();
		});
	});

	describe("with invalid password", () => {
		it("renders the password validation error", async () => {
			const { getByPlaceholderText, getByText, getByRole } = render(<LoginPage />);

			await act(async () => {
				const passwordInput = getByPlaceholderText("cityslicka");
				fireEvent.change(passwordInput, { target: { value: "1" } });
				fireEvent.blur(passwordInput);
				fireEvent.click(getByRole("button"));
			});

			expect(getByText("Password must be at longer than 1 character.")).toBeTruthy();
		});
	});
});
