import images from "../../../constants/images";

export const Hero = () => {
    return (
        <section className="bg-primary">
            <div className="max-w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Content */}
                <div className="my-6">
                    <h2 className="text-[40px] font-markazi text-secondary">Little Lemon</h2>
                    <h4 className="text-[24px] mt-2 font-markazi text-highlight">Chicago</h4>
                    <p className="mt-2 text-highlight">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </p>
                    <button className="mt-6 px-6 py-2 bg-secondary text-primary rounded-[16px] hover:bg-secondary">
                        Reserve a table
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center items-center my-6">
                    <img
                        src={images['restauranfood']}
                        alt="hero logo"
                        className="w-full max-w-[400px] max-h-[300px] object-cover rounded-[16px] mt-6 mb-6"
                    />
                </div>
            </div>
        </section>
    );
};
