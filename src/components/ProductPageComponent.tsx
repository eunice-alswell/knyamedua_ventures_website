import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { productHeader } from "../utils/headerData";
import { productData } from "../utils/productData";
import CTA from "./CTA";
import type { CTAProps } from "./CTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";


const productCTA: CTAProps = {
  title: "Looking for Trusted LPG Products?",
  description: "Get high-quality, certified LPG components — from storage tanks to valves and gauges — all in one place.  Equip your business with products built for performance, safety, and durability.",
  buttonLabel: "Request a Quote",
  buttonIcon: <FontAwesomeIcon icon={faHandshake} className="hover:text-white" />,
};

export default function ProductPageComponent() {
  
    // This is a simple product page component that can be used in the in any part of the website.
  return (
    <>
        {/* Helmet for SEO */}
        <Helmet>
          <title>Our Products | Nyamedua Grupp</title>
          <meta name="description" content="Explore our range of high-quality LPG products including commercial storage tanks, burners, regulators, and more." />
          <meta name="keywords" content="LPG Products, LPG Tanks, Gas Burners, Pressure Regulators, Industrial Equipment, Ghana" />
          <meta property="og:title" content="Our Products | Nyamedua Grupp" />
          <meta property="og:description" content="High-quality LPG products engineered for safety and performance across Ghana's industries." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.nyameduagrupp.com/products" />
          <meta property="og:image" content="https://www.nyameduagrupp.com/nyamedua_img/nyamedua_grupp_logo.png" />
          <link rel="canonical" href="https://www.nyameduagrupp.com/products" />
        </Helmet>
        {/* navbar */}
        <Navbar/>
        {/* Main content */}
        <main className="">
          {/* Header for the product page */}
          <Header title={productHeader.title} subtitle={productHeader.subtitle} description={productHeader.description}/>
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <ProductCard products={productData}/>
          </div>
          <div>
            <CTA title={productCTA.title} description={productCTA.description} buttonLabel={productCTA.buttonLabel} buttonIcon={productCTA.buttonIcon} />
          </div>
        </main>
        {/* Footer */}
        <Footer/>
    </>
  );
}