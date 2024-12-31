import React from "react";

export const ConfirmedBooking = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center bg-primary">
            <h1 className="text-4xl font-bold text-highlight">Booking Confirmed!</h1>
            <p className="text-lg text-highlight mt-4">
                Thank you for your reservation. We look forward to serving you!
            </p>
        </section>
    );
};
