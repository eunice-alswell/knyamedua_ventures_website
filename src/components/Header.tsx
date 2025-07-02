
export interface HeaderProps {
        title: string;
        subtitle: string;
        description?: string;
    }
export default function Header({ title, subtitle, description }: HeaderProps) {

    return (
        <header>
            <div className="h-[35vh] w-full mt-15 bg-[url('/nyamedua_img/NYAMEDUA_GRUPP_BANNER.png')] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center h-full text-2xl text-white text-center bg-primarycolor/60 space-y-4 p-4">
                    <h1 className="text-sm">{title}</h1>
                    <p className="lg:text-4xl font-bold lg:w-1/2 fadeInBottom">{subtitle}</p>
                    {description && <p className="text-xs lg:text-base lg:w-1/2">{description}</p>}
                </div>
            </div>
        </header>
    )
}