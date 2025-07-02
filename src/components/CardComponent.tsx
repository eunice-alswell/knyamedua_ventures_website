import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";



export interface CardProps {
    title: string;
    description: string;
    CTA?: string;
    icon?: React.ReactNode;
}

export default function CardComponent({cardDetails,OnClick}: {cardDetails?: CardProps[], OnClick?: () => void}) {
    const lendata = cardDetails?.length ?? 0
    
    
  return (
    <div className={`py-10 grid grid-cols-1 md:grid-cols-2 ${lendata === 2 ?"lg:grid-cols-2":"lg:grid-cols-3"} gap-6`}>
        {cardDetails?.map((detail: CardProps, index : number)=>(
            <div 
                key={detail.title} 
                // className="bg-white p-6 rounded-lg shadow-md mb-6 text-center hover:text-white hover:bg-secondary transition-colors duration-300 ease-in-out"
                className= {`p-6 rounded-lg shadow-lg text-center transition-colors duration-300 ease-in-out 
                            ${index % 2 === 1 && lendata > 2 ? "bg-secondary" : "bg-white"}
                        `}
            >
                {detail.icon && <div className={`text-4xl mb-4 ${index % 2 === 1 && lendata > 2 ? "text-white":"text-secondary"}`}>{detail.icon}</div>}
                <h1 className={`text-xl font-semibold ${index % 2 === 1 && lendata > 2 ? "text-white": "text-primarycolor"}`}>{detail.title}</h1>
                <p className= {`text-sm p-4 ${index % 2 === 1 && lendata > 2 ? "text-white" : "text-accent"}`}>{detail.description}</p>
                <Button label={detail.CTA} variantStyle={index % 2 === 1 && lendata > 2 ?"whiteStyle": "noBgStyle"} onClick={OnClick} rightIcon ={detail.CTA ? <FontAwesomeIcon icon={faArrowRightLong} className="hover:text-white" /> :""} />
            </div>

        ))}
    </div>
  )
}
