import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const ReservationPage = () => {
    // Validation schema using Yup
    const validationSchema = Yup.object({
        resDate: Yup.string().required("Please choose a date"),
        resTime: Yup.string().required("Please choose a time"),
        guests: Yup.number()
            .required("Please enter the number of guests")
            .min(1, "At least 1 guest is required")
            .max(10, "No more than 10 guests allowed"),
        occasion: Yup.string().required("Please choose an occasion"),
    });

    // Initial values for the form
    const initialValues = {
        resDate: "",
        resTime: "",
        guests: "",
        occasion: "",
    };

    // Form submission handler
    const onSubmit = (values, { resetForm }) => {
        console.log("Form Data: ", values);
        alert("Reservation successfully submitted!");
        resetForm();
    };

    return (
        <section className="h-screen bg-[#333333] flex items-center justify-center">
            <div className="w-full max-w-[90%] sm:max-w-[500px] bg-primary p-8 rounded-[16px] shadow-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-highlight font-markazi rounded-[16px]">
                    Make a Reservation
                </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    >
                    {({ isValid, dirty }) => (
                        <Form className="grid gap-6">
                            {/* Date Selection */}
                            <label htmlFor="resDate" className="font-semibold font-karla text-lg text-highlight">
                                Choose date
                            </label>
                            <Field
                                type="date"
                                id="resDate"
                                name="resDate"
                                className="border border-gray-300 p-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <ErrorMessage
                                name="resDate"
                                component="div"
                                className="text-red-500 text-sm"
                            />

                            {/* Time Selection */}
                            <label htmlFor="resTime" className="font-semibold font-karla text-lg text-highlight">
                                Choose time
                            </label>
                            <Field
                                as="select"
                                id="resTime"
                                name="resTime"
                                className="border border-gray-300 p-3 text-lg rounded-[16px] focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select time</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                            </Field>
                            <ErrorMessage
                                name="resTime"
                                component="div"
                                className="text-red-500 text-sm"
                            />

                            {/* Number of Guests */}
                            <label htmlFor="guests" className="font-semibold font-karla text-lg text-highlight">
                                Number of guests
                            </label>
                            <Field
                                type="number"
                                id="guests"
                                name="guests"
                                placeholder="1"
                                min="1"
                                max="10"
                                className="border border-gray-300 p-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <ErrorMessage
                                name="guests"
                                component="div"
                                className="text-red-500 text-sm"
                            />

                            {/* Occasion Selection */}
                            <label htmlFor="occasion" className="font-semibold font-karla text-lg text-highlight">
                                Occasion
                            </label>
                            <Field
                                as="select"
                                id="occasion"
                                name="occasion"
                                className="border border-gray-300 p-3 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="">Select occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Field>
                            <ErrorMessage
                                name="occasion"
                                component="div"
                                className="text-red-500 text-sm"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={!isValid || !dirty} // Disable if the form is invalid or untouched
                                className={`p-3 text-lg rounded-md transition-colors ${
                                    isValid && dirty
                                        ? "bg-primary text-white hover:bg-secondary cursor-pointer"
                                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                            >
                                Make Your Reservation
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
};
