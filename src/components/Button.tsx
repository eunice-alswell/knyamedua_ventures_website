
type VariantStyle = "defualtStyle" | "primarydefualtStyle" | "outlinestyle" | "iconstyle" | "noBgStyle" | "whiteStyle" | "disabledStyle";

type ButtonProps = {
    variantStyle?: VariantStyle;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
    label?: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    type?: "button" | "submit" | "reset";
};
export default function Button({variantStyle = "defualtStyle", size = "medium", onClick, label, rightIcon, leftIcon, type = "button"}: ButtonProps) {
    // This is a simple button component that can be used in the in any part of the website.
    const variantStyles = {
        defualtStyle: "text-white bg-orange hover:bg-transparent hover:border-2 hover:border-secondary hover:text-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-4xl text-sm text-center dark:bg-secondary dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary transition-colors duration-300 ease-in-out",
        noBgStyle: "text-secondary bg-none hover:bg-transparent hover:border-2 hover:border-secondary hover:text-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-4xl text-sm text-center dark:bg-none dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-secondary transition-colors duration-300 ease-in-out",
        primarydefualtStyle: "text-white bg-primarycolor hover:bg-transparent hover:border-2 hover:border-primarycolor hover:text-secondary focus:ring-4 focus:outline-none focus:ring-primarycolor font-medium rounded-4xl text-sm text-center dark:bg-primarycolor dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-secondary dark:hover:text-secondary dark:focus:ring-primarycolor transition-colors duration-300 ease-in-out",
        outlinestyle: "text-secondary border border-secondary bg-transparent hover:bg-secondary hover:text-white focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-4xl text-sm px-5 py-2 text-center transition-colors duration-300 ease-in-out",
        iconstyle: "text-secondary bg-transparent hover:bg-transparent hover:outline-2 hover:outline-secondary focus:ring-2 focus:outline-none focus:ring-secondary font-medium rounded-full text-sm px-5 py-2 text-center dark:bg-secondary dark:hover:bg-secondary dark:focus:ring-secondary transition-colors duration-300 ease-in-out",
        disabledStyle: "opacity-50 cursor-not-allowed",
        whiteStyle: "text-white bg-transparent hover:bg-transparent hover:border-2 hover:border-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-4xl text-sm text-center dark:bg-none dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-white dark:focus:ring-white transition-colors duration-300 ease-in-out",
    };

    const sizeStyle = {
        small: "text-xs px-3 py-1",
        medium: "text-sm px-5 py-2",
        large: "text-lg px-6 py-3",
    };
    const appliedVariantStyle = variantStyles[variantStyle]||variantStyles.defualtStyle; // You can change this to any variant you want
    const appliedSizeStyle = sizeStyle[size] || sizeStyle.medium; // Default to medium if size is not specified
  return (
    <button 
        type={type}
        className={`${appliedVariantStyle} ${appliedSizeStyle}`}
        onClick={onClick}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {label}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  )
}