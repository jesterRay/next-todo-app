"use client"
interface ButtonProps{
    text: string,
    type: "button" | "submit" | "reset",
    color?: string,
    bgColor?: string,
    hoverColor?: string,
    hoverBgColor?: string,
    newClass?: string,
    onClick?: ()=>{}
}

const Button: React.FC<ButtonProps> = ({
    text,
    type="button",
    color="text-gray-100",
    bgColor="bg-blue-600",
    hoverColor="hover:text-white",
    hoverBgColor="hover:bg-blue-700",
    newClass,
    onClick
}) => {
    return (
        <button type={type} className={` ${text} ${color} ${bgColor} ${hoverColor} ${hoverBgColor} 
        transition-all duration-300 rounded-lg px-7 py-2 sm:text-base text-sm  ${newClass}`} onClick={onClick}>
            {text}
        </button>
    );
}


export default Button