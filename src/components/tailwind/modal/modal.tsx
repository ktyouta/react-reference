import React, { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
    isOpen: boolean;
    isCloseOuter?: boolean;
    onClose?: () => void;
    children: ReactNode;
    overlayClassName?: string;
    containerClassName?: string;
};


export const Modal = ({
    isOpen,
    isCloseOuter = false,
    onClose,
    children,
    overlayClassName = "",
    containerClassName = "",
}: ModalProps) => {

    const modalRoot = document.getElementById("modal-root");

    // モーダル開閉時にスクロールを制御
    useEffect(() => {

        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!modalRoot || !isOpen) {
        return null;
    }

    return createPortal(
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 ${overlayClassName}`}
            onClick={() => {
                if (isCloseOuter && onClose) {
                    onClose();
                }
            }}
        >
            <div
                className={`relative bg-gray-800 rounded-2xl p-6 border border-white shadow-lg w-3/4 max-w-2xl ${containerClassName}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>,
        modalRoot
    );
};
