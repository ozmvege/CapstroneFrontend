import images from "../../../constants/images";

export const Specials = () => {
    const foodItems = [
        {
            name: 'Greek Salad',
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
            image: images['greek salad'],
        },
        {
            name: "Bruchetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            image: images['bruchetta'],
        },
        {
            name: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: images['lemon dessert'],
        },
    ];

    return (
        <section className="bg-primary py-8">
            <div className="max-w-[60%] mx-auto flex justify-between items-center mb-6">
                <h1 className="font-markazi text-[40px] text-secondary">Specials</h1>
                <button className="px-6 py-2 bg-secondary text-primary text-lg font-bold rounded-[16px] hover:bg-yellow-500">
                    Online Menu
                </button>
            </div>

            <div className="max-w-[60%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {foodItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-[16px] overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between"
                    >
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover rounded-t-[16px]"
                        />

                        {/* Card Content */}
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                            <p className="text-gray-600 flex-grow">{item.description}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <span className="text-lg font-semibold text-secondary">{item.price}</span>
                                <button className="px-4 py-2 bg-primary text-white rounded-[16px] hover:bg-secondary">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
