import React from "react";
import Slider from "react-slick";
import images from "../../../constants/images";

export const Testimonials = () => {
    const testimonials = [
        {
            name: "John Doe",
            stars: 5,
            description: "Amazing service! The food was fantastic, and I’ll definitely come back.",
            image: images["johndoe"],
        },
        {
            name: "Jane Smith",
            stars: 4,
            description: "A great place to eat! Loved the ambiance and the friendly staff.",
            image: images["janesmith"],
        },
        {
            name: "Chris Johnson",
            stars: 5,
            description: "Highly recommended! The desserts are to die for.",
            image: images["chrisjohnson"],
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Only show one slide at a time
        slidesToScroll: 1,
        arrows: true,
        centerMode: false, // Disable center mode to remove edges
    };

    return (
        <section className="bg-primary py-10">
            <div className="max-w-[80%] lg:max-w-[30%] mx-auto">
                <h2 className="text-center text-4xl font-bold text-secondary mb-8">Testimonials</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-[16px] shadow-lg flex flex-col items-center text-center"
                        >
                            {/* Image */}
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-24 h-24 rounded-full object-cover mb-4 mx-auto"
                            />
                            {/* Name */}
                            <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                            {/* Stars */}
                            <div className="flex justify-center my-2">
                                {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                                    <span key={starIndex} className="text-yellow-500 text-lg">★</span>
                                ))}
                            </div>
                            {/* Description */}
                            <p className="text-gray-600">{testimonial.description}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};
