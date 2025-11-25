import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "./CountUp";
import { faBuildingCircleCheck } from "@fortawesome/free-solid-svg-icons/faBuildingCircleCheck";
import { faBuildingFlag, faPeopleCarryBox, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
// import { clientTelData } from "../utils/clientTelData";



interface BannerProps {
    icon?: React.ReactNode;
    quantity?: number;
    text?: string;
}

export default function Banner() {
    const BannerData: BannerProps[] = [
        {
            icon: <FontAwesomeIcon icon={faBuildingCircleCheck} className="text-secondary text-3xl lg:text-4xl" />,
            quantity: 10,
            text: "years of experience"
        },
        {
            icon: <FontAwesomeIcon icon={faPeopleGroup} className="text-secondary text-3xl lg:text-4xl" />,
            quantity: 100,
            text: "satisfied clients"
        },
        {
            icon: <FontAwesomeIcon icon={faBuildingFlag} className="text-secondary text-3xl lg:text-4xl" />,
            quantity: 2,
            text: "Nyamedua Grupp Offices"
        },
        {
            icon: <FontAwesomeIcon icon={faPeopleCarryBox} className="text-secondary text-3xl lg:text-4xl" />,
            quantity: 10,
            text: "certified technicians"
        }

    ]
  return (
    <div className="max-w-screen-xl mx-auto h-50 lg:h-60 bg-primarycolor rounded-xl">
        <div className="flex h-full items-center justify-between lg:px-12 space-x-4 rtl:space-x-reverse"> 
            {BannerData.map((item:BannerProps) => (
                <div  key={item.text} className="flex flex-col items-center justify-center text-center text-white mb-4 font-primary">
                        {item.icon && <div className="mb-2">{item.icon}</div>
                        }
            
                    <div className="flex items-center justify-center  space-x-1 rtl:space-x-reverse">
                        <CountUp 
                            target={item.quantity || 0} 
                            duration={4000}
                            className="text:3xl lg:text-4xl font-bold" 
                        />
                        <p className="text-lg">+</p>
                    </div>
                    <p className="text-sm lg:text-base text-white/70">{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  );
}