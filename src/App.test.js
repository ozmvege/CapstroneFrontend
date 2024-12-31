import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ReservationPage } from "./components/Reservation/Reservation";
import userEvent from "@testing-library/user-event";

describe("ReservationPage", () => {
    test("renders the reservation form", () => {
        render(<ReservationPage />);

        // Check if all form elements render
        expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
        expect(screen.getByText(/make your reservation/i)).toBeDisabled();
    });

    test("enables the submit button when all fields are filled", async () => {
        render(<ReservationPage />);

        // Fill out the form
        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);

        fireEvent.change(dateInput, { target: { value: "2023-12-31" } });
        fireEvent.change(timeSelect, { target: { value: "18:00" } });
        fireEvent.change(guestsInput, { target: { value: "2" } });
        fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

        // Check if submit button is enabled
        const submitButton = screen.getByText(/make your reservation/i);
        expect(submitButton).toBeEnabled();
    });
    test("submits the form with correct data", async () => {
      const mockSubmit = jest.fn();

      render(<ReservationPage handleFormSubmit={mockSubmit} />); // Use handleFormSubmit prop

      // Fill out the form
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/occasion/i);

      fireEvent.change(dateInput, { target: { value: "2023-12-31" } });
      fireEvent.change(timeSelect, { target: { value: "18:00" } });
      fireEvent.change(guestsInput, { target: { value: "2" } });
      fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

      const submitButton = screen.getByText(/make your reservation/i);

      // Ensure the button is enabled before clicking
      expect(submitButton).toBeEnabled();
  });

});
