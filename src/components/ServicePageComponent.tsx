import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import { serviceHeader } from "../utils/headerData";
import type { CTAProps } from "./CTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import CTA from "./CTA";

interface ServicePageProps {
  id: string;
  imageUrl?: string; 
  title: string;
  description1: string;
  description2: string;
  fillColor?: string;
  svgPatternId?: string;

}

const servicePageData: ServicePageProps[] = [
  {
    id: "1",
    title: "LPG Commercial Tank Installation",
    description1: "We provide expert installation of high-capacity LPG storage tanks for commercial and industrial use. Our installation process follows strict national safety guidelines and is executed by certified professionals to ensure maximum reliability and efficiency. Whether you’re a small enterprise or a large facility, we tailor each installation to suit your specific capacity and energy needs.",
    description2: "Our team handles everything from site assessment and design to delivery and setup, ensuring a seamless experience for our clients. We also advise on safe placement, piping connections, and compliance with Ghana's regulatory standards, giving you peace of mind and operational readiness from day one.",
    imageUrl: "/nyamedua_img/COMMERCIAL_GAS_TANK.png",
    fillColor: "imgPattern9", 
    svgPatternId: "url(#imgPattern9)"
  },
  {
    id: "2",
    title: "Heating Systems",
    description1: "Our industrial heating systems are designed to deliver consistent, efficient heat for a wide range of commercial applications. We offer customized setups that meet your facility’s energy requirements while ensuring safety and cost-efficiency. These systems are ideal for food processing, manufacturing, hospitality, and more.",
    description2: "We don’t just install heating systems — we build them to last. By combining durable components with expert design, we help clients reduce energy waste, increase productivity, and comply with industry standards. Every system we install comes with the option for performance checks and long-term service support.",
    imageUrl: "/serviceman-hired-condenser-checkup.jpg",
    fillColor: "imgPattern10",
    svgPatternId: "url(#imgPattern10)"
  },
  {
    id: "3",
    title: "Maintenance Checks on Heating Systems",
    description1: "Regular maintenance is critical to keeping heating systems running safely and efficiently. At K.Nyamedua Valley Ventures, we offer routine maintenance checks that detect wear, prevent breakdowns, and ensure your system operates at peak performance. Our checks cover everything from burner performance to safety valve function and pressure control.",
    description2: "We understand the cost of downtime, which is why our technicians work quickly and thoroughly to identify issues before they become costly problems. Our service ensures that your heating systems stay compliant, energy-efficient, and fully operational — saving you time, money, and risk in the long run.",
    imageUrl: "/man-image.jpg",
    fillColor: "imgPattern11", 
    svgPatternId: "url(#imgPattern11)"
  },
];

const serviceCTA: CTAProps = {
  title: "Need a Reliable LPG Service Partner?",
  description: "From expert tank installations to efficient heating systems and trusted maintenance, K.Nyamedua Valley Ventures is ready to support your energy needs.",
  buttonLabel: "Get a Service Quote",
  buttonIcon: <FontAwesomeIcon icon={faHandshake} className="hover:text-white" />,
};

export default function ServicePageComponent() {

  // This is a simple home page component that can be used in the in any part of the website.
  return (
    <>
        <Helmet>
          <title>Our Services | Nyamedua Grupp</title>
          <meta name="description" content="Discover our LPG installation, heating systems setup, maintenance, and industrial safety services — tailored for businesses in Ghana." />
          <meta name="keywords" content="LPG Services, Tank Installation Ghana, Industrial Heating Systems, Gas System Maintenance, Nyamedua Grupp" />
          <meta property="og:title" content="Our Services | Nyamedua Grupp" />
          <meta property="og:description" content="End-to-end LPG and safety services including installation, inspection, and system optimization." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nyameduagrupp.com/services" />
          <meta property="og:image" content="https://www.nyameduagrupp.com/nyamedua_img/nyamedua_grupp_logo.png" />
          <link rel="canonical" href="https://www.nyameduagrupp.com/services" />
        </Helmet>

        <Navbar/>
        <main>
            <Header title={serviceHeader.title} subtitle={serviceHeader.subtitle} description={serviceHeader.description}/>
            <div className="container mx-auto px-4 py-8">    
            </div>
            {servicePageData.map((service: ServicePageProps, index: number) => (
              <div key={service.id} className="w-full">
                <div className="max-w-screen-xl mx-auto px-6 py-5">
                  <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 space-y-10">
                    {/* SVG Section */}
                    <div className={`flex items-center justify-center w-1/2 h-full ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative w-[300px] h-[260px] lg:w-[460px] lg:h-[480px]">
                        <svg
                          className="absolute top-0 left-0  w-[330px] h-[310px] lg:w-[450px] lg:h-[460px]"
                          height="460"
                          width="450"
                          fill="none"
                          viewBox="0 0 2968 3006"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2271.82 101.485C2532.44 232.846 2747.75 453.514 2871.67 721.281C2994.06 985.75 2971.51 1284.57 2954.36 1576.38C2936.42 1881.61 2937.07 2201.29 2769.76 2455.28C2595.9 2719.21 2326.25 2930.81 2020.31 2994.31C1726.01 3055.39 1452.81 2860.78 1160.81 2789.2C863.777 2716.39 511.681 2782.85 289.029 2569.94C64.4694 2355.2 46.1465 2003.77 13.3679 1691.96C-17.5162 1398.18 1.8402 1104.46 105.977 828.66C212.042 547.751 357.374 263.401 611.113 108.862C859.142 -42.2005 1165.76 8.43448 1454.81 7.15064C1734.56 5.90815 2021.13 -24.8662 2271.82 101.485Z"
                            fill="#BE4204"
                          />
                        </svg>

                        <svg
                          className="absolute top-0 left-0  w-[330px] h-[310px] lg:w-[470px] lg:h-[480px]"
                          height="480"
                          width="470"
                          viewBox="0 0 3252 3070"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <pattern id={service.fillColor} patternUnits="userSpaceOnUse" width="3252" height="3070">
                              <image
                                href={service.imageUrl}
                                x="0"
                                y="0"
                                width="3252"
                                height="3070"
                                preserveAspectRatio="xMidYMid slice"
                              />
                            </pattern>
                          </defs>
                          <path
                            d="M2101.66 6.8135C2344.89 44.3319 2570.72 171.344 2740 339.413C2905.26 503.493 2958.2 733.262 3045.28 943.693C3130.95 1150.69 3241.4 1350.83 3250.39 1572.72C3259.74 1803.72 3230.86 2047.79 3097.88 2242.41C2966.4 2434.83 2712.51 2507.9 2517.65 2645.09C2317.21 2786.22 2175.3 3035.92 1926.86 3066.9C1677.31 3098.02 1471.52 2886.68 1235.31 2805.01C1015.59 2729.05 750.115 2747.97 576.897 2600.16C403.751 2452.41 393.239 2205.21 297.567 2004.83C199 1798.37 16.3751 1620.74 1.49544 1394.96C-13.713 1164.19 89.1861 939.002 214.193 739.738C337.803 542.7 503.225 363.257 717.293 253.963C923.99 148.433 1171.24 174.356 1402.42 133.083C1638.55 90.9263 1864.47 -29.7745 2101.66 6.8135Z"
                            fill={service.svgPatternId}
                          />
                        </svg>
                      </div>
                    </div>
                    <div className={`w-full lg:w-1/2 flex items-center fadeInBottom ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        <div className="flex items-center justify-center lg:justify-start gab-6 fadeInLeft">
                          <hr className="w-20 mr-2 border-1 border-secondary"/>
                          <h2 className="text-3xl font-bold text-primarycolor p-4 bg-primarycolor/40 rounded-3xl">{service.id}</h2>
                        </div>
                        <h3 className="text-3xl text-center lg:text-left font-bold text-primarycolor mb-6 fadeInBottom">
                          {service.title}
                        </h3>
                        <p className="text-base text-accent mb-6 fadeInBottom">
                          {service.description1}
                        </p>
                        <p className="text-base text-accent mb-6 fadeInBottom">
                          {service.description2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <CTA {...serviceCTA} />
            </div>        
        </main>
        <Footer/>
    </>
  );
}