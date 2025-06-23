import Footer from "./Footer";
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
    <div>
        <Navbar/>
        <main className="">
          <Header title={productHeader.title} subtitle={productHeader.subtitle} description={productHeader.description}/>
          <div className="max-w-screen-xl mx-auto px-4 py-8">
            <ProductCard products={productData}/>
          </div>
          <div>
            <CTA title={productCTA.title} description={productCTA.description} buttonLabel={productCTA.buttonLabel} buttonIcon={productCTA.buttonIcon} />
          </div>
        </main>
        <Footer/>
    </div>
  );
}