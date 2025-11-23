import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { Modal } from "./Modal";
import "@testing-library/jest-dom";

describe("Modal Component", () => {

    let modalRoot: HTMLElement;

    beforeEach(() => {
        modalRoot = document.createElement("div");
        modalRoot.setAttribute("id", "modal-root");
        document.body.appendChild(modalRoot);
    });

    afterEach(() => {
        cleanup();
        document.body.innerHTML = "";
        document.body.style.overflow = "";
    });

    it("renders modal when isOpen is true", () => {

        render(
            <Modal isOpen={true}>
                <div>Modal Content</div>
            </Modal>
        );

        expect(screen.getByText("Modal Content")).toBeInTheDocument();
    });

    it("does not render when isOpen is false", () => {

        render(
            <Modal isOpen={false}>
                <div>Hidden Content</div>
            </Modal>
        );

        expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
    });

    it("calls onClose when overlay is clicked and isCloseOuter=true", () => {

        const handleClose = vi.fn();

        render(
            <Modal isOpen={true} isCloseOuter={true} onClose={handleClose}>
                <div>Click Test</div>
            </Modal>
        );

        const overlay = screen.getByText("Click Test").parentElement!.parentElement!;
        fireEvent.click(overlay);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not call onClose when clicking inside container", () => {

        const handleClose = vi.fn();

        render(
            <Modal isOpen={true} isCloseOuter={true} onClose={handleClose}>
                <div>Inside</div>
            </Modal>
        );

        const content = screen.getByText("Inside");
        fireEvent.click(content);

        expect(handleClose).not.toHaveBeenCalled();
    });

    it("locks body scroll when opened", () => {

        render(<Modal isOpen={true}>Scroll test</Modal>);

        expect(document.body.style.overflow).toBe("hidden");
    });

    it("restores body scroll when closed", () => {

        const { rerender } = render(<Modal isOpen={true}>Scroll test</Modal>);

        rerender(<Modal isOpen={false}>Scroll test</Modal>);

        expect(document.body.style.overflow).toBe("");
    });
});
