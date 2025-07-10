import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Button from "./Button";
// import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faBox, faClockFour, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useNavHandlers } from "../utils/navfunc";

export default function Footer() {
    const { handleContactUs } = useNavHandlers();

  return (
    <footer className="bg-primarycolor text-white py-6">
        <div className="max-w-screen-xl mx-auto px-4 mt-10">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between mb-6 space-y-6 lg:space-y-0">
                <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-left space-y-3 rtl:space-y-reverse lg:w-1/3 ">
                    <h2 className="text-3xl font-medium">Join Our Newletter</h2>
                    <p className="text-base font-light">Subscribe to our newsletter for the latest updates and offers.</p>
                </div>
                <div className="flex items-center justify-between space-x-4 rtl:space-x-reverse bg-white p-2 rounded-full lg:w-[500px]">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="p-2 rounded-full text-primarycolor w-full focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300 ease-in-out"
                        aria-label="Subscribe to our newsletter"
                    />
                    <Button label="Subscribe" />
                </div>
            </div>
        
            <hr className="my-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8 text-center lg:text-left">
                <div>
                    <div className="flex items-center justify-center lg:justify-start space-x-3 rtl:space-x-reverse mb-4">
                        <Link to="/" className="flex items-center bg-white space-x-3 rtl:space-x-reverse">
                            <img src="/nyamedua_img/nyamedua_grupp_logo.png" className="h-16" alt="KNyamedua Logo" />
                        </Link>
                    </div>
                    <p className="text-sm font-light mb-4 text-center lg:text-left">We are expert provider of LPG systems and products in Ghana, specializing in safe, efficient, and reliable energy solutions for industrial and commercial applications.</p>
                    <div>
                        <ul className="flex flex-row items-center justify-center lg:justify-start space-x-5 mt-4 text-xl text-white">
                            <li className="">
                                <a href="https://wa.me/243516220" target="_blank" className="hover:text-secondary transition-colors duration-300 ease-in-out">
                                    <FontAwesomeIcon icon={faWhatsapp} className="bg-secondary hover:bg-transparent p-2 rounded-[100%]"/>
                                </a>
                            </li>
                            <li className="">
                                <a href="" target="_blank" className="hover:text-secondary transition-colors duration-300 ease-in-out">
                                    <FontAwesomeIcon icon={faInstagram} className="bg-secondary hover:bg-transparent p-2 rounded-[100%]"/>
                                </a>
                            </li>
                            <li className="">
                                <a href="" target="_blank" className="hover:text-secondary transition-colors duration-300 ease-in-out">
                                    <FontAwesomeIcon icon={faTiktok} className="bg-secondary hover:bg-transparent p-2 rounded-[100%]"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center lg:justify-start space-y-3 rtl:space-y-reverse ">
                    <h2 className="w-30 lg:w-2/3 text-lg text-center lg:text-left font-semibold mb-2 border-b-2 border-secondary">Quick Links</h2>
                    <ul className="space-y-2 mt-4 w-30 lg:w-2/3">
                        <li><Link to="/" className="hover:text-secondary transition-colors duration-300 ease-in-out">Home</Link></li>
                        <li><Link to="/about" className="hover:text-secondary transition-colors duration-300 ease-in-out">About Us</Link></li>
                        <li><Link to="/about" className="hover:text-secondary transition-colors duration-300 ease-in-out">Services</Link></li>
                        <li><Link to="/products" className="hover:text-secondary transition-colors duration-300 ease-in-out">Products</Link></li>
                        <li><Link to="/contact" className="hover:text-secondar transition-colors duration-300 ease-in-out">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center lg:justify-start space-y-3 rtl:space-y-reverse">
                    <h2 className="w-50 lg:w-2/3 text-lg font-semibold mb-2 border-b-2 border-secondary">Contact Information</h2>
                    <ul className="space-y-3 mt-4 w-50 lg:w-2/3">
                        <li>
                            <a href="tel:+233 55 0994 6300" className="hover:text-secondary transition-colors duration-300 ease-in-out">
                                <span className="mr-2">
                                    <FontAwesomeIcon icon={faPhone} className="bg-transparent text-secondary"/>
                                </span>
                                0509946300
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@nyameduagrupp.com" className="hover:text-secondary transition-colors duration-300 ease-in-out">
                                <span className="mr-2">
                                    <FontAwesomeIcon icon={faEnvelope} className="bg-transparent text-secondary"/>
                                </span>
                                info@nyameduagrupp.com
                            </a>
                        </li>
                        <li className="hover:text-secondary transition-colors duration-300 ease-in-out">
                            <span className="mr-2"><FontAwesomeIcon icon={faLocationDot} className="bg-transparent text-secondary"/></span>
                            GHACEM Flat, Sakumono - Estate, Ghana
                        </li>
                        <li className="hover:text-secondary transition-colors duration-300 ease-in-out">
                            <span className="mr-2"><FontAwesomeIcon icon={faBox} className="bg-transparent text-secondary"/></span>
                            P.O. Box SK 935, Sakumono - Estate, Tema
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center lg:justify-start space-y-3 rtl:space-y-reverse">
                    <h2 className="w-50 lg:w-2/3 text-lg font-semibold mb-2 border-b-2 border-secondary">Work Hours</h2>
                    <p className="text-base my-4"><span className="mr-2"><FontAwesomeIcon icon={faClockFour} className="bg-transparent text-secondary"/></span>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-sm mb-4 font-light">We are available to assist you during our working hours. Reach out for any inquiries or support.</p>
                    <Button label="Get In Touch" onClick={handleContactUs} />        
                </div>
            </div>
            <hr className="my-6"/>
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between space-y-2 ">
                <p className="text-xs">Designed by <a href="" className="text-white underline">Altynova Technoliges</a></p>
                <p className="text-sm">© {new Date().getFullYear()} Nyamedua Grupp. All rights reserved.</p>
            </div>
        </div>  
    </footer>
  );
}