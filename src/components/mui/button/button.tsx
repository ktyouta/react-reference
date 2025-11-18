import React, { type ReactNode } from "react";
import { Button as MUIButton, type ButtonProps } from "@mui/material";

type Color = "red" | "blue" | "green";
type Size = "small" | "medium" | "large";

export type propsType = ButtonProps & {
    colorType: Color;
    sizeType: Size;
    children: ReactNode;
    className?: string;
};

const colorStyle: Record<Color, string> = {
    red: "bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300",
    blue: "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300",
    green: "bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300",
};

const sizeStyle: Record<Size, string> = {
    small: "text-sm rounded-md px-3 py-1.5",
    medium: "text-base rounded-md px-4 py-2",
    large: "text-xl rounded-lg px-5 py-3",
};

export const Button = (props: propsType) => {
    return (
        <MUIButton
            {...props}
            className={`${colorStyle[props.colorType]} ${sizeStyle[props.sizeType]} ${props.className}`}
        >
            {props.children}
        </MUIButton>
    );
};
