import CardComponent from "./CardComponent";
import Footer from "./Footer";
import Navbar from "./Header";
import { VisionMission } from "../utils/cardData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHandshake, faHelmetSafety, faRankingStar, faMedal} from "@fortawesome/free-solid-svg-icons";
import CollapseComponent from "./collapseComponent";
import { collapsedData } from "../utils/collapsedData";
import { faPeopleCarryBox } from "@fortawesome/free-solid-svg-icons/faPeopleCarryBox";
import Button from "./Button";
// import Button from "./Button";

export default function AboutPageComponent() {
  // This is a simple home page component that can be used in the in any part of the website.
  return (
    <div>
        <Navbar/>
        <main className="font-primary space-y-20">
          {/* header section */}
          <div className="h-[40vh] w-full mt-15 bg-[url('/LPG_worker.jpg')] bg-cover bg-center">
            <div className="flex flex-col items-center justify-center h-full text-2xl text-white text-center bg-primarycolor/60 space-y-4">
              <h1 className="text-sm">About Us</h1>
              <p className="text-4xl font-semibold mb-6 w-1/2 fadeInBottom">Your Trusted Partner in LPG Commercial services and Products</p>
            </div>
          </div>
          {/* ----who we are section---- */}
          <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-6 py-5">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10">
                {/* SVG Section */}
                <div className="flex items-center justify-center w-1/2 h-full">
                  <div className="relative w-[300px] h-[300px] lg:w-[460px] lg:h-[480px]">
                    <svg
                      className="absolute top-0 left-0 w-[370px] h-[350px] lg:w-[450px] lg:h-[460px]"
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
                      className="absolute top-0 left-0 w-[370px] h-[350px] lg:w-[470px] lg:h-[480px]"
                      height="480"
                      width="470"
                      viewBox="0 0 3252 3070"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="3252" height="3070">
                          <image
                            href="/LPG_worker.jpg"
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
                        fill="url(#imgPattern)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center">
                  <div>
                    <div className="flex items-center justify-center lg:justify-start gab-6">
                      <hr className="w-20 border-1 border-secondary"/>
                      <h1 className="text-xl font-normal text-primarycolor p-4 fadeInBottom">Who We Are</h1>
                    </div>
                    <p className="text-base text-accent mb-6 fadeInBottom">
                      K.Nyamedua Valley Ventures is an indigenous Ghanaian firm in the oil and gas industry, committed to delivering responsible and efficient energy solutions that serve people and protect the planet. Our expertise spans the design, installation, and supply of commercial LPG systems and accessories tailored to the unique needs of commercial and industrial clients.
                    </p>
                    <p className="text-base text-accent mb-6 fadeInBottom">
                      With a reputation built on trust, safety, and technical excellence, we serve businesses across Ghana by offering high-quality LPG products, certified installations, and dependable after-sales support. We believe in building lasting relationships with our clients by consistently delivering value, reliability, and peace of mind.
                    </p>
                    {/* <div className="flex justify-center lg:justify-start fadeInBottom">
                      <Button label="More About Us" size="large"/>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mission & Vision section */}
          <div className="">
            <div className="max-w-screen-xl mx-auto p-6 bg-primarycolor fadeOnScroll">
              <CardComponent cardDetails={VisionMission}/>
            </div>
          </div>
          {/* What we do section */}
          <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-6 py-5">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10">
                {/* SVG Section */}
                <div className="flex items-center justify-center w-1/2 h-full lg:order-2">
                  <div className="relative w-[300px] h-[300px] lg:w-[460px] lg:h-[480px]">
                    <svg
                      className="absolute top-0 left-0 w-[370px] h-[350px] lg:w-[450px] lg:h-[460px]"
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
                      className="absolute top-0 left-0 w-[370px] h-[350px] lg:w-[470px] lg:h-[480px]"
                      height="480"
                      width="470"
                      viewBox="0 0 3252 3070"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="3252" height="3070">
                          <image
                            href="/LPG_worker.jpg"
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
                        fill="url(#imgPattern)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center justify-center lg:justify-start gab-6">
                      <hr className="w-20 border-1 border-secondary"/>
                      <h1 className="text-xl font-normal text-primarycolor p-4 fadeInBottom">What We Do</h1>
                    </div>  
                    <p className="text-base text-accent mb-6 fadeInBottom">
                      We provide safe, efficient LPG solutions — from commercial tank installations to heating systems and certified components — built to serve industrial and commercial needs. 
                    </p>
                    <CollapseComponent items={collapsedData}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-6 py-5">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-10 space-x-20">
                {/* SVG Section */}
                <div className="flex items-center justify-center w-1/2 h-full">
                  <div className="relative w-[300px] h-[300px] lg:w-[460px] lg:h-[480px]">
                    <svg
                      className="absolute top-0 left-0 w-[370px] h-[350px] lg:w-[450px] lg:h-[460px]"
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
                      className="absolute top-0 left-0 w-[370px] h-[350px] lg:w-[470px] lg:h-[480px]"
                      height="480"
                      width="470"
                      viewBox="0 0 3252 3070"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="3252" height="3070">
                          <image
                            href="/LPG_worker.jpg"
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
                        fill="url(#imgPattern)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-full flex items-center pb-15">
                  <div className="">
                    <div className="flex items-center justify-center lg:justify-start gab-6">
                      <hr className="w-20 border-1 border-secondary"/>
                      <h1 className="text-xl font-normal text-primarycolor p-4 fadeInBottom">Why Choose Us</h1>
                    </div>
                    <p className="text-base text-accent mb-6 fadeInBottom">
                      Trusted across Ghana, we combine expert service, certified products, reliable support, and great value to deliver complete, worry-free LPG solutions.
                    </p>
                    <ul className="text-primarycolor text-base space-y-4">
                      <li className="fadeInBottom">
                        <p>
                          <span><FontAwesomeIcon icon={faMedal} className="text-secondary mr-3" /></span>
                            Over 10 years of experience
                        </p>
                      </li>
                      
                      <li className="fadeInBottom">
                        <p>
                          <span><FontAwesomeIcon icon={faRankingStar} className="text-secondary mr-3" /></span>
                          Certified and accredited installers
                        </p>
                      </li>
                      <li className="fadeInBottom">
                        <p>
                          <span><FontAwesomeIcon icon={faHelmetSafety} className="text-secondary mr-3" /></span>
                          Full compliance with safety regulations
                        </p>
                      </li>
                      <li className="fadeInBottom">
                        <p>
                          <span><FontAwesomeIcon icon={faPeopleCarryBox} className="text-secondary mr-3" /></span>
                          Tailored solutions for every client
                        </p>
                      </li> 
                      <li className="fadeInBottom">
                        <p>
                          <span><FontAwesomeIcon icon={faHandshake} className="text-secondary mr-3" /></span>
                          Ongoing customer support and maintenance
                        </p>
                      </li> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[70vh] w-full mt-15 bg-[url('/LPG_worker.jpg')] bg-cover bg-center">
            <div className="h-full flex items-center justify-center bg-primarycolor/60">
              <div className="flex flex-col items-center justify-center bg-white w-4xl h-1/2 mx-auto text-2xl text-primarycolor text-center rounded-xl space-y-4">
                <h2 className="text-4xl font-semibold">Get In Touch</h2>
                <p className="text-sm px-24 fadeInBottom">Partner with K.Nyamedua Valley Ventures for reliable LPG solutions, expert installation, and quality products built to last.</p>
                <div>
                  <Button label="Contact Us" size="large" rightIcon={<FontAwesomeIcon icon={faHandshake} className="hover:text-white" />} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
    </div>
  );
}