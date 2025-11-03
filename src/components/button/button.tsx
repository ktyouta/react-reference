import type { ReactNode } from "react";

const colorStyle = {
    red: "bg-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-300",
    blue: "bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-300",
    green: "bg-green-500 text-white focus:outline-none focus:ring-2 focus:ring-green-300",
};
const sizeStyle = {
    small: "text-sm rounded-md",
    medium: "text-base rounded-md",
    large: "text-xl rounded-lg",
};

type Color = keyof typeof colorStyle;
type Size = keyof typeof sizeStyle;

// 引数の型
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
{
    color: Color,
    size: Size,
    children: ReactNode,
}

export const Button = (props: ButtonProps) => {

    return (
        <button
            className={`${colorStyle[props.color]} ${sizeStyle[props.size]} ${props.className}`}
            {...props}
        >
            {props.children}
        </button>
    );
};