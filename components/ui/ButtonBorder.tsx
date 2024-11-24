interface ButtonBorderProps{
    text: string,
    type?: "button" | "submit" | "reset",
    color?: string,
    bgColor?: string,
    hoverColor?: string,
    hoverBgColor?: string,
    borderColor?: string,
    hoverBorderColor?: string,
    newClass?: string,
    padding?: string,
    margin?: string,
    onClick?: ()=> void
}

const ButtonBorder: React.FC<ButtonBorderProps> = ({
    text,
    type="button",
    color="text-blue-600",
    bgColor="transparent",
    hoverColor="hover:text-white",
    hoverBgColor="hover:bg-blue-700",
    borderColor="border-blue-600",
    hoverBorderColor="border-blue-700",
    padding="md:px-6 md:py-2 px-4 py-2",
    margin="",
    newClass,
    onClick
}) => {
    return (
        <button type={type} className={` ${text} ${color} ${bgColor} ${hoverColor} ${hoverBgColor} ${borderColor} ${hoverBorderColor} ${padding} ${margin}
         border transition-all duration-400 rounded-full shadow shadow-blue-200 md:text-base text-xs ${newClass}`}
            onClick={onClick}>
            {text}
        </button>
    );
}


export default ButtonBorder