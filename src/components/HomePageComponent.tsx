import Banner from "./Banner";
import Button from "./Button";
import CardComponent from "./CardComponent";
import Navbar from "./Navbar";
import { cardDatails, serviceCardDetails } from "../utils/cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandshake, faHelmetSafety, faRankingStar, faTruckRampBox} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./ProductCard";
import { productData } from "../utils/productData";
import Footer from "./Footer";
import CTA from "./CTA";
import type { CTAProps } from "./CTA";
import ClientSlider from "./ClientSlider";
import { useNavHandlers } from "../utils/navfunc";
import Carousel from "./Carousel";
import { Helmet } from "react-helmet-async";

const homeCTA: CTAProps = {
  title: "Your Trusted Partner in LPG Solutions",
  description: "Your Trusted Partner in LPG Solutions. We provide safe installations, reliable products, and expert support for businesses across Ghana’s energy sector.Let’s power your operations — safely and efficiently.",
  buttonLabel: "Get a Free Quote",
  buttonIcon: <FontAwesomeIcon icon={faHandshake} className="hover:text-white" />,
};

export default function HomePageComponent() {
  const { handleServices,handleAboutUs,handleProducts } = useNavHandlers();
  // This is a simple home page component that can be used in the in any part of the website.
  return (
    <>
        <Helmet>
          <title>Home | Nyamedua Grupp</title>
          <meta name="description" content="Reliable LPG storage, heating systems, and safety products designed for Ghana's energy and industrial sectors." />
          <meta name="keywords" content="LPG Ghana, Commercial LPG, Industrial Heating, Nyamedua Ventures, Gas Storage, Safety Systems, commercial cooking solutions" />
          <meta property="og:title" content="Home | Nyamedua Grupp" />
          <meta property="og:description" content="Trusted LPG solutions partner for safe, efficient energy in Ghana." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nyameduagrupp.com" />
          <meta property="og:image" content="https://www.nyameduagrupp.com/nyamedua_img/nyamedua_grupp_logo.png" />
          <link rel="canonical" href="https://www.nyameduagrupp.com" />
        </Helmet>

        <Navbar/>
        <main className="min-h-screen font-primary overflow-x-hidden ">
          <div className="relative h-[200vh] lg:h-[130vh] w-full mb-10">
            <Carousel/>
            {/* ----card section---- */}
            <div className="absolute left-1/2 bottom-[0.001%] lg:bottom-[1%] w-full z-10">
              <div className="max-w-screen-7xl mx-auto px-6 lg:px-30 transform -translate-x-1/2 fadeOnScroll">
                <CardComponent cardDetails={cardDatails} OnClick={handleAboutUs}/>
              </div>
            </div>
          </div>
          {/* ----About section---- */}
          <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-6 py-5">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 space-y-10 lg:space-y-0 lg:pb-20">
                {/* SVG Section */}
                <div className="flex items-center justify-center w-1/2 h-full ">
                  <div className="relative w-[300px] h-[260px] lg:w-[460px] lg:h-[480px]">
                    <svg
                      className="absolute top-0 left-0 w-[330px] h-[310px] lg:w-[450px] lg:h-[460px]"
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
                      className="absolute top-0 left-0 w-[330px] h-[310px] lg:w-[470px] lg:h-[480px]"
                      height="480"
                      width="470"
                      viewBox="0 0 3252 3070"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="imgPattern6" patternUnits="userSpaceOnUse" width="3252" height="3070">
                          <image
                            href="/nyamedua_img/nyamedua_ceo_tanks.jpeg"
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
                        fill="url(#imgPattern6)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center">
                  <div>
                    <div className="flex items-center justify-center lg:justify-start gab-6 fadeInLeft">
                      <hr className="w-20 border-1 border-secondary"/>
                      <h1 className="text-xl font-normal text-primarycolor p-4">About Us</h1>
                    </div>
                    <p className="text-2xl text-primarycolor text-center lg:text-left font-medium font-Poppins mb-6 fadeInBottom">
                      We provides safe, certified LPG solutions and high-quality energy products for commercial and industrial needs.
                    </p>
                    <p className="text-base text-accent mb-6 fadeInBottom">
                      At KNyamedua, we are committed to providing safe, reliable, and efficient LPG solutions for commercial and industrial applications. With over a decade of experience in the oil and gas industry, our certified team specializes in LPG installations, maintenance, and safety systems across Ghana.
                    </p>
                    <p className="text-base text-accent mb-6 fadeInBottom">
                      Our mission is to deliver high-quality LPG products and services that meet the highest standards of safety and compliance. We pride ourselves on our expertise, innovation, and dedication to customer satisfaction.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <Button label="More About Us" size="large" onClick={handleAboutUs}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* -----credibility banner----*/}
          <div className="mb-10">
            <Banner/>
          </div>
          {/* ------ services ------ */}

          <div className="max-w-screen-xl mx-auto">
            <div className="w-full px-6 py-10">
              <div className="flex items-center justify-center lg:justify-start gab-6 fadeInLeft">
                <hr className="w-20 border-1 border-secondary"/>
                <h1 className="text-xl font-normal text-primarycolor p-4">Our Services</h1>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-evenly">
                <h2 className="lg:w-2/4 text-3xl lg:text-4xl text-primarycolor font-semibold pb-5">What Services we offer</h2>
                <p className=" lg:w-2/4 text-sm text-accent pb-5">We offer expert LPG solutions tailored to meet the needs of commercial and industrial clients. From installation to maintenance, our services prioritize safety, efficiency, and compliance.</p>
                <div className="lg:w-60 flex justify-center lg:justify-end" >
                  <Button label="All Services" size="large" onClick={handleServices}/>
                </div>
              </div>
              <div className="w-full pt-10">
                <CardComponent cardDetails={serviceCardDetails}/>
              </div>
            </div>
          </div>

          {/* {our pride} */}
          <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-6 py-5">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-20 mb-29">
                {/* SVG Section */}
                <div className="flex items-center justify-center  h-full lg:order-2">
                  <div className="relative w-[300px] h-[300px] lg:w-[460px] lg:h-[480px] ">
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
                      className="absolute top-0 left-0 w-[330px] h-[310px] lg:w-[470px] lg:h-[480px]"
                      height="480"
                      width="470"
                      viewBox="0 0 3252 3070"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="imgPattern7" patternUnits="userSpaceOnUse" width="3252" height="3070">
                          <image
                            href="/serviceman-hired-condenser-checkup.jpg"
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
                        fill="url(#imgPattern7)"
                      />
                    </svg>
                  </div>
                </div>
                {/* Text Section */}
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center justify-center lg:justify-start gab-6 fadeInLeft">
                      <hr className="w-20 border-1 border-secondary"/>
                      <h1 className="text-xl font-normal text-primarycolor p-4 fadeInBottom">What Sets Us Apart</h1>
                    </div>
                    <p className="text-2xl text-primarycolor text-center lg:text-left font-medium font-Poppins mb-3 fadeInBottom">
                      We don’t just supply energy products — we deliver peace of mind.
                    </p>
                    <p className="text-base text-accent mb-6 fadeInBottom">
                      Whether you're installing a new LPG system, upgrading your heating infrastructure, or sourcing certified components, we are your trusted partner in quality and safety.
                    </p>
                    <ul>
                      <li className="inline-block text-base pb-6 fadeInBottom">
                        <div className="flex items-center justify-start pb-2">
                          <FontAwesomeIcon icon={faHelmetSafety} className="text-secondary mr-3 text-4xl" />
                          <h2 className="text-lg text-primarycolor font-medium ">Certified Expertise & End-to-End Service</h2>
                        </div>
                          <p className="text-accent text-sm">We partner with Ghana Atomic Energy to certify all gas pipes installations and works.</p>
                      </li>
                      <li className="inline-block text-base pb-6 fadeInBottom">
                        <div className="flex items-center justify-start pb-2">
                          <FontAwesomeIcon icon={faRankingStar} className="text-secondary mr-3 text-4xl" />
                          <h2 className="text-lg text-primarycolor font-medium ">Quality, Approved Products</h2>
                        </div>
                          <p className="text-accent text-sm">We supply only genuine, industry-certified LPG tanks, valves, regulators, and systems built for performance and safety.</p>
                      </li>
                      <li className="inline-block text-base pb-6 fadeInBottom">
                        <div className="flex items-center justify-start pb-2">
                          <FontAwesomeIcon icon={faTruckRampBox} className="text-secondary mr-3 text-4xl" />
                          <h2 className="text-lg text-primarycolor font-medium ">Reliable Support & Delivery</h2>
                        </div>
                          <p className="text-accent text-sm">We supply only genuine, industry-certified LPG tanks, valves, regulators, and systems built for performance and safety.</p>
                      </li>
                      <li className="inline-block text-base pb-6 fadeInBottom">
                        <div className="flex items-center justify-start pb-2">
                          <FontAwesomeIcon icon={faHandshake} className="text-secondary mr-3 text-4xl" />
                          <h2 className="text-lg text-primarycolor font-medium ">Affordable, Long-Term Value</h2>
                        </div>
                          <p className="text-accent text-sm">Our competitive pricing ensures you get durable, efficient products and services without breaking your budget.</p>
                      </li> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Products section */}
          <div className="w-full h-[230vh] lg:h-[110vh]">
            <div className=" bg-primarycolor h-[60vh]">
              <div className="max-w-screen-xl mx-auto">
                <div className="w-full px-6 py-10 ">
                  <div className="flex items-center justify-center gab-6 text-white fadeInLeft">
                    <hr className="w-20 border-1 border-secondary"/>
                    <h1 className="text-xl font-normal p-4 fadeInBottom">Our Products</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center text-white text-center">
                    <h2 className="text-3xl lg:text-4xl font-semibold pb-5">Expore our Available Products</h2>
                    <p className="text-sm pb-5 lg:px-50">We supply industry-tested and certified LPG equipment that meets the highest safety and efficiency standards. Our products are designed to support safe energy usage across homes, businesses, and industries.</p>
                  </div>
                  <div className="w-full pt-5">
                    <ProductCard products={productData} limit={3}/>
                  </div>
                  <div className="flex justify-center" >
                    <Button label="View More Products" onClick={handleProducts} size="large"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CTA title={homeCTA.title} description={homeCTA.description} buttonLabel={homeCTA.buttonLabel}/>
          </div>
          <div>
            <ClientSlider/>
          </div>
          
        </main>
        {/* Footer section */}
        <Footer/>
    </>
  );
}