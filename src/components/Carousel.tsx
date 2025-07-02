import Slider from "react-slick";
import Button from "./Button";
import { useNavHandlers } from "../utils/navfunc";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideData {
  id: number;
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const heroSlides: SlideData[] = [
  {
    id: 1,
    backgroundImage: "/nyamedua_img/NYAMEDUA_GRUPP_BANNER.png",
    title: "Reliable LPG Solutions for Safer, Smarter Energy Use",
    subtitle:
      "Your trusted partner in LPG commercial storage, heating systems, and industrial safety components — delivering excellence, durability, and innovation across Ghana’s oil and gas industry.",
  },
  {
    id: 2,
    backgroundImage: "/nyamedua_img/COMMERCIAL_GAS_TANK_2.png",
    title: "Commercial LPG Storage Tanks with National Safety Compliance",
    subtitle:
      "Custom-built tank installations designed for durability, compliance, and peak performance across all commercial and industrial sectors.",
  },
  {
    id: 3,
    backgroundImage: "/nyamedua_img/GAUGE_3.jpg",
    title: "Your Trusted Source for Industrial LPG Products and Equipment",
    subtitle:
      "Discover top-quality grills, stoves, regulators, gauges, and safety devices—engineered for efficiency, safety, and reliability in demanding environments.",
  },
];

export default function Carousel() {
  const { handleContactUs, handleServices } = useNavHandlers();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings}>
      {heroSlides.map((slide) => (
        <div key={slide.id}>
          <div
            className="h-[100vh] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="flex items-center justify-center lg:justify-start h-full w-full bg-primarycolor/60">
              <div className="max-w-screen-xl mx-auto text-white px-6">
                <div className="w-full text-center space-y-8 lg:px-30">
                  <h1 className="text-3xl lg:text-5xl font-bold fadeInBottom">
                    {slide.title}
                  </h1>
                  <p className="text-base lg:text-xl fadeInBottom">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-4 justify-center">
                    <Button
                      label="Explore Our Services"
                      onClick={handleServices}
                    />
                    <Button
                      label="Get a Free Quote"
                      onClick={handleContactUs}
                      variantStyle="primarydefualtStyle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
