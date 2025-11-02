import type { ReactNode } from "react";

const colorStyle = {
    red: "bg-red-500 text-white",
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
};
const sizeStyle = {
    small: "text-sm p-2 rounded-md",
    medium: "text-base p-4 rounded-md",
    large: "text-xl px-10 py-4 rounded-lg",
};

type Color = keyof typeof colorStyle;
type Size = keyof typeof sizeStyle;

// 引数の型
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
{
    color: Color,
    size: Size,
    child: ReactNode,
}

export const Button = (props: ButtonProps) => {

    return (
        <button
            className={`${colorStyle[props.color]} ${sizeStyle[props.size]} ${props.className}`}
            {...props}
        >
            {props.child}
        </button>
    );
};