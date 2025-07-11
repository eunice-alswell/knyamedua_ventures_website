import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { productData } from "../utils/productData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CTA from "./CTA";
import type { CTAProps } from "./CTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";


const productCTA: CTAProps = {
  title: "Interested in this Product?",
  description: "Need more details or ready to place an order? Reach out to us for pricing, availability, and expert support.",
  buttonLabel: "Make an Enquiry",
  buttonIcon: <FontAwesomeIcon icon={faHandshake} className="hover:text-white" />,
};

export default function ProductPreview () {
    const { productSlug } = useParams<{ productSlug: string }>();
    const product = productData.find(p => p.slug === productSlug);
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
        <>
            <Helmet>
                <title>{product ? product.name : "Product"} | Nyamedua Grupp</title>
                <meta name="description" content="Explore our range of high-quality LPG products including commercial storage tanks, burners, regulators, and more." />
                <meta name="keywords" content="LPG Products, LPG Tanks, Gas Burners, Pressure Regulators, Industrial Equipment, Ghana" />
                <meta property="og:title" content={`${product?.name} | Nyamedua Grupp`} />
                <meta property="og:description" content="High-quality LPG products engineered for safety and performance across Ghana's industries." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nyameduagrupp.com/products" />
                <meta property="og:image" content="https://www.nyameduagrupp.com/nyamedua_img/nyamedua_grupp_logo.png" />
                <link rel="canonical" href="https://www.nyameduagrupp.com/products" />
            </Helmet>
            {/* Navbar */}
            <Navbar/>
            <main>
                <Header
                    title="Products"
                    subtitle={product?.name ?? ""}
                    description={product?.description ?? ""}
                />

                <div className="max-w-screen-xl mx-auto px-4 py-8 space-y-30">
                    {/* back button*/}
                    <div className="flex items-center justify-start mb-6">
                        <Button 
                            size="large"
                            variantStyle="noBgStyle"
                            leftIcon={<FontAwesomeIcon icon={faLongArrowLeft} />}
                            onClick={() => window.history.back()} 
                            label="Back to Products"
                        />
                        
                    </div>
                    {/* Product images */}
                    <div className="px-2 lg:px-30 py-8  h-[40vh] md:h-[70vh] lg:h-[70vh]">
                        <Slider {...settings}>
                            {product?.imageUrls.map((image, idx) => (
                                <div key={idx} className="flex justify-center items-center ">
                                    <h3 className="text-center text-lg font-semibold text-secondary mb-4">
                                        {image.productName}
                                    </h3>
                                    <img
                                        src={image.productImage}
                                        alt={image.productName ?? "Product Image"}
                                        width="100%"
                                        height="50%"
                                        className="object-fit w-full h-[40vh] md:h-[70vh] lg:h-[70vh] rounded-lg"
                                    />   
                                </div>
                            ))}
                        </Slider>

                    </div>
                    {/* Product Description section */}
                    <div className="w-full">
                        <div>
                            <div className="flex items-center justify-center lg:justify-start gab-6">
                                <hr className="w-20 border-1 border-secondary"/>
                                <h2 className="text-2xl font-bold text-primarycolor p-4 fadeInBottom">Product Details</h2>
                            </div>
                            <p className="text-base text-accent mb-6 fadeInBottom">
                                {product?.longDesc1}
                            </p>
                            <p className="text-base text-accent mb-6 fadeInBottom">
                                {product?.longDesc2}
                            </p>
                            <div>
                                <div className="flex items-center justify-center lg:justify-start gab-6">
                                    <hr className="w-20 border-1 border-secondary"/>
                                    <h2 className="text-2xl font-bold text-primarycolor p-4 fadeInBottom">Specification</h2>
                                </div>
                                <div className="text-base text-accent">
                                    {product?.specification && product.specification.map((spec, index) => (
                                        <div key={index} className="mb-10 fadeInBottom">
                                            <h3 className="text-lg font-semibold text-secondary mb-2">
                                                <span className="text-primarycolor">Product Name: </span>
                                                {spec.product_name}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-semibold text-primarycolor border-b border-secondary">Material</h3>
                                                    <p className="text-accent">
                                                        <span className="font-semibold text-primarycolor">Name: </span>
                                                        {spec.material}
                                                    </p>
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-semibold text-primarycolor border-b border-secondary">Specication</h3>
                                                    <ul className="list-disc pl-4">
                                                        {Object.entries(spec.specification).map(([key, value], idx) => (
                                                            <li key={idx} className="text-accent">
                                                                <span className="font-semibold text-primarycolor">{key}:</span> {value}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-semibold text-primarycolor border-b border-secondary">Features</h3>
                                                    <ul className="list-disc pl-4">
                                                        {spec.features.map((feature, idx) => (
                                                            <li key={idx} className="text-accent">{feature}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            </div>

                                          <hr className="my-6 border-accent/10 shadow-2xl" />  
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                    </div>        
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