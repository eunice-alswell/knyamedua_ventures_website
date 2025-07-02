import { useNavigate } from "react-router-dom";

export const useNavHandlers = () => {
    const navigate = useNavigate();

    const handleContactUs = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/contact");
        }
    };

    const handleServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/services");
        }
    };

    const handleProducts = () => {
        const productsSection = document.getElementById("products");
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/products");
        }
    }

    const handleAboutUs = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/about");
        }
    };

    return { handleContactUs, handleServices, handleProducts, handleAboutUs};
};

