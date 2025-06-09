import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faBuildingShield, faCertificate, faMedal } from "@fortawesome/free-solid-svg-icons";


interface CardProps {
    title: string;
    description: string;
    CTA: string;
    icon?: React.ReactNode;
}

export default function CardComponent() {
    const cardDatails: CardProps[] = [
        {
            title:"Safe Energy Solutions",
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
  return (
    <div className="max-w-screen-7xl mx-auto px-6 lg:px-30 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardDatails.map((detail: CardProps)=>(
            <div key={detail.title} className="bg-white p-6 rounded-lg shadow-md mb-6 text-center">
                {detail.icon && <div className="text-4xl text-secondary mb-4">{detail.icon}</div>}
                <h1 className="text-primarycolor text-xl font-semibold">{detail.title}</h1>
                <p className="text-accent text-base p-4">{detail.description}</p>
                <Button label={detail.CTA} variantStyle="noByStyle" rightIcon ={<FontAwesomeIcon icon={faArrowRightLong} />} />
            </div>

        ))}
    </div>
  )
}
