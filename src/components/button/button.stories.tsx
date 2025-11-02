import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "./button";

const meta: Meta<ButtonProps> = {
    title: "Components/button/button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: "select",
            options: ["red", "blue", "green"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        onClick: { action: "clicked" },
    },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Red: Story = {
    args: {
        color: "red",
        size: "medium",
        child: "赤ボタン",
    },
};

export const Blue: Story = {
    args: {
        color: "blue",
        size: "medium",
        child: "青ボタン",
    },
};

export const Green: Story = {
    args: {
        color: "green",
        size: "medium",
        child: "緑ボタン",
    },
};

export const Large: Story = {
    args: {
        color: "blue",
        size: "large",
        child: "大きいボタン",
    },
};

export const Small: Story = {
    args: {
        color: "red",
        size: "small",
        child: "小さいボタン",
    },
};
