import Button from "./Button";


export interface CTAProps {
    title?: string;
    description?: string;
    buttonLabel?: string;
    buttonIcon?: React.ReactNode;
}

export default function CTA({ title, description, buttonLabel, buttonIcon }: CTAProps) {
    // This is a simple CTA component that can be used in any part of the website.
    return (
        <div className="h-[70vh] w-full mt-15 bg-[url('/LPG_worker.jpg')] bg-cover bg-center">
            <div className="h-full flex items-center justify-center bg-primarycolor/60">
                <div className="flex flex-col items-center justify-center bg-white w-4xl h-1/2 mx-auto text-2xl text-primarycolor text-center rounded-xl space-y-4">
                    <h2 className="text-4xl font-semibold">{title}</h2>
                    <p className="text-sm px-24 fadeInBottom">{description}</p>
                    <div>
                        <Button label={buttonLabel} size="large" rightIcon={buttonIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
}