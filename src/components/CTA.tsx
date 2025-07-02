import Button from "./Button";
import { useNavHandlers } from "../utils/navfunc";


export interface CTAProps {
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonIcon?: React.ReactNode;
}

export default function CTA({ title, description, buttonLabel, buttonIcon }: CTAProps) {
    const { handleContactUs } = useNavHandlers();
    // This is a simple CTA component that can be used in any part of the website.
    return (
        <div className="h-[50vh] lg:h-[70vh] w-full mt-15 bg-[url('/nyamedua_img/NYAMEDUA_GRUPP_BANNER.png')] bg-cover bg-center">
            <div className="h-full flex items-center justify-center bg-primarycolor/60">
                <div className="flex flex-col items-center justify-center bg-white w-4xl lg:h-1/2 mx-auto text-2xl text-primarycolor text-center rounded-xl space-y-4 p-6 lg:p-10 shadow-lg fadeInBottom">
                    <h2 className="lg:text-4xl font-semibold">{title}</h2>
                    <p className="text-sm px-10 lg:px-24 fadeInBottom">{description}</p>
                    <div>
                        <Button label={buttonLabel} size="large" rightIcon={buttonIcon} onClick={handleContactUs} />
                    </div>
                </div>
            </div>
        </div>
    );
}