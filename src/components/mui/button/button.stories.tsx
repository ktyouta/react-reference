import type { Meta, StoryObj } from "@storybook/react";
import { Button, type propsType } from "./button";

const meta: Meta<propsType> = {
    title: "Components/mui/button/button",
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
type Story = StoryObj<propsType>;

export const Red: Story = {
    args: {
        color: "red",
        size: "medium",
        children: "赤ボタン",
    },
};

export const Blue: Story = {
    args: {
        color: "blue",
        size: "medium",
        children: "青ボタン",
    },
};

export const Green: Story = {
    args: {
        color: "green",
        size: "medium",
        children: "緑ボタン",
    },
};

export const Large: Story = {
    args: {
        color: "blue",
        size: "large",
        children: "大きいボタン",
    },
};

export const Small: Story = {
    args: {
        color: "red",
        size: "small",
        children: "小さいボタン",
    },
};
