import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Header from "./Header";

const Hero = () => {
    const slides_count = 5;
    const slides = Array.from(Array(slides_count).keys());
    const mySlides = slides.map((index) => {
        return (
            <div
                key={index}
                className="embla__slide flex items-center justify-center bg-red-300"
            >
                Slide {index + 1}
            </div>
        );
    });
    const autoplayOptions = {
        stopOnInteraction: false,
        delay: 3000
    };
    const [emblaRef] = useEmblaCarousel({ loop: true, axis: 'y' }, [Autoplay(autoplayOptions)]);

    return (
        <>
            <section className="hero relative h-[500px] w-full">
                <Header />
                <section className="embla absolute inset-0 z-10" ref={emblaRef}>
                    <div className="embla__container h-full">
                        {mySlides}
                    </div>
                </section>
            </section>
        </>
    );
};
export default Hero;
