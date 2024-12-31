import images from "../../../constants/images";

export const Chicago = () => {
    return (
        <section className="bg-primary py-10">
            <div className="max-w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Content */}
                <div>
                    <h2 className="text-[48px] font-markazi text-secondary">Little Lemon</h2>
                    <h4 className="text-[28px] font-markazi text-highlight mt-1">Chicago</h4>
                    <p className="mt-4 text-highlight font-karla leading-relaxed">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                        sunt nostrud amet.
                    </p>
                    <p className="mt-4 text-highlight font-karla leading-relaxed">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                    </p>
                </div>

                {/* Right Content - Overlapping Images */}
                <div className="relative">
                    {/* Bottom Image */}
                    <img
                        src={images["Mario and Adrian A"]}
                        alt="Chefs collaborating"
                        className="w-full h-[40%] rounded-lg shadow-lg"
                    />
                    {/* Top Image (Overlapping) */}
                    <img
                        src={images["Mario and Adrian b"]}
                        alt="Chef preparing food"
                        className="absolute top-4 left-4 w-[40%] h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};
