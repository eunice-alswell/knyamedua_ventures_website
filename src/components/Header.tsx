
export interface HeaderProps {
        title: string;
        subtitle: string;
        description?: string;
    }
export default function Header({ title, subtitle, description }: HeaderProps) {

    return (
        <header>
            <div className="h-[40vh] w-full mt-15 bg-[url('/LPG_worker.jpg')] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center h-full text-2xl text-white text-center bg-primarycolor/60 space-y-4">
                    <h1 className="text-sm">{title}</h1>
                    <p className="text-4xl font-semibold mb-6 w-1/2 fadeInBottom">{subtitle}</p>
                    {description && <p className="text-base lg:w-1/2">{description}</p>}
                </div>
            </div>
        </header>
    )
}