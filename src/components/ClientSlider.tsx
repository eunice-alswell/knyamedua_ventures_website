import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clientTelData } from "../utils/clientTelData";

export interface clientdata {
  company_logo: string;
  company_name: string;
  location: string;
}

export default function ClientSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full text-primarycolor space-y-10 py-15">
        <div>
            <div className="flex items-center justify-center gab-6">
                <hr className="w-20 border-1 border-secondary"/>
                <h1 className="text-lg font-normal p-4 fadeInBottom">Our clients</h1>
            </div>
            <h2 className="text-2xl font-bold text-center">Who We've Worked for</h2>
        </div>
      <Slider {...settings} className="px-6 lg:px-30">
        {clientTelData.filter(client => client.company_logo !== "logo_url").map((client, index) => (
          <div key={index}>
            <div className="flex flex-col items-center justify-center text-center p-4">
              <img
                src={client.company_logo}
                alt={client.company_name}
                className="w-30 h-20 object-center mb-2"
              />
              <h3 className="text-base font-semibold">{client.company_name}</h3>
              <p className="text-xs text-gray-500">{client.location}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
