import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";

export interface collaspeItem{
    id: string;
    Title: string;
    Description: string;
}

interface collapseProps {
    items: collaspeItem[];
    initiallyOpen?: string[];
}

export default function CollapseComponent({items, initiallyOpen = []}: collapseProps) {
    const [collapsedpanal, setCollapsedpanal] = useState<Record<string,boolean>>(()=> {
        const initiateState: Record<string,boolean> ={};
        items.forEach((item)=>{
            initiateState[item.id] = initiallyOpen.includes(item.id);
        });
        return initiateState;
    });

    const toggleCollapsedpanal = (id:string) => {
        setCollapsedpanal((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };
    
  return (
    <div className="my-6">
        {items?.map(item => (
            <div key={item.id} className="mb-2 w-full text-primarycolor border-b border-gray-200">
                <button
                    className="w-full flex justify-between items-center p-2 focus:outline-none"
                    onClick={() => toggleCollapsedpanal(item.id)}
                    aria-expanded={collapsedpanal[item.id]}
                >
                    <span className="font-medium">{item.Title}</span>
                    <FontAwesomeIcon icon={collapsedpanal[item.id] ? faSubtract : faPlus} />
                </button>
                {collapsedpanal[item.id] && (
                    <div className="text-accent text-sm p-2">
                        {item.Description}
                    </div>
                )}
            </div>
        ))}
    </div>
  )
}
