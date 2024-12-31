import { Hero } from "./Hero/Hero";
import { Specials } from "./Specials/Specials";
import { Testimonials } from "./Testimonials/Testimonials";
import { Chicago } from "./Chicago/Chicago";
export const Main = () => {
    return (
        <div>
            <Hero />
            <Specials />
            <Testimonials />
            <Chicago />
        </div>
    );
};