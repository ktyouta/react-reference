import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../button/Button";

const meta: Meta<typeof Modal> = {
    title: "Components/modal/Modal",
    component: Modal,
    tags: ["autodocs"],
    argTypes: {
        isCloseOuter: { control: "boolean" },
        overlayClassName: { control: "text" },
        containerClassName: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: (args) => {

        const [open, setOpen] = useState(false);

        return (
            <React.Fragment>
                <div
                    id="modal-root"
                >
                </div>
                <div className="p-6 text-white">
                    <Button
                        color="blue"
                        size="medium"
                        onClick={() => setOpen(true)}>
                        モーダルを開く
                    </Button>

                    <Modal
                        {...args}
                        isOpen={open}
                        onClose={() => setOpen(false)}
                        isCloseOuter={true}
                    >
                        <h2
                            className="text-xl font-bold mb-4"
                        >
                            Tailwind モーダル
                        </h2>
                        <p
                            className="mb-6"
                        >
                            これは Storybook 上で動作確認できるモーダルです。背景クリックで閉じます。
                        </p>
                        <div
                            className="text-right"
                        >
                            <Button
                                color="red"
                                size="small"
                                onClick={() => setOpen(false)}
                            >
                                閉じる
                            </Button>
                        </div>
                    </Modal>
                </div>
            </React.Fragment>
        );
    },
    args: {
        overlayClassName: "",
        containerClassName: "",
    },
};
