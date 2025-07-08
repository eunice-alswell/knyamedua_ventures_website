import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowsToCircle, faBuildingShield, faCertificate, faEye, faFireBurner, faMedal, faTemperatureArrowUp, faWrench } from "@fortawesome/free-solid-svg-icons";
import type { CardProps } from "../components/CardComponent";

export const cardDatails: CardProps[] = [
        {
            title:"Safe Energy Solutions, LPG systems & Pipping installation",
            description:" We specialize in delivering LPG systems and products that prioritize safety, compliance, and reliability for industrial and commercial use.",
            CTA: "Read more",
            icon: <FontAwesomeIcon icon={faBuildingShield} />
        },
        {
            title:"Certified Installations Team",
            description:"With over a decade of experience, our certified installers provide industry-standard LPG installations, maintenance, and safety systems for businesses across Ghana.",
            CTA: "Read more",
            icon: <FontAwesomeIcon icon={faCertificate} />
        },
        {
            title:"Quality LPG Products",
            description:" We supply high-grade LPG equipment—from measuring systems and regulators to industrial cookstoves—offering affordable, durable, and efficient solutions for homes, industries, and institutions.",
            CTA: "Read more",
            icon: <FontAwesomeIcon icon={faMedal} />
        }
    ]

export const serviceCardDetails: CardProps[] = [
        {
            title:"Installation of LPG Commercial Tanks",
            description:" We install high-capacity LPG storage tanks tailored for industrial and commercial use, ensuring safety, compliance, and durability.",
            CTA: "Read more",
            icon: <FontAwesomeIcon icon={faFireBurner} />
        },
        {
            title:"Heating Systems",
            description:"We supply and set up reliable heating systems designed to optimize energy use and enhance operational efficiency in industrial environments.",
            CTA: "Read more",
            icon: <FontAwesomeIcon icon={faTemperatureArrowUp} />
        },
        {
            title:"Maintenance Checks on Heating Systems",
            description:" We conduct regular inspections and maintenance on heating systems to ensure optimal performance, prevent hazards, and extend equipment life.",
            CTA: "Read more",
            icon: <FontAwesomeIcon icon={faWrench} />
        }
    ]

export const VisionMission: CardProps[] = [
    {
        title:"Our Mission",
        description:" To deliver safe, reliable, and cost-effective LPG infrastructure, industrial cookstove and solutions that power industries, businesses, and homes across Ghana—while prioritizing customer satisfaction, safety, and sustainability.",
        // CTA: "Read more",
        icon: <FontAwesomeIcon icon={faArrowsToCircle} />
    },
    {
        title:"Our Vision",
        description:"To be a leading provider of LPG energy solutions in West Africa, setting the standard for safety, innovation, and environmental responsibility.",
        // CTA: "Read more",
        icon: <FontAwesomeIcon icon={faEye} />
    },

]



