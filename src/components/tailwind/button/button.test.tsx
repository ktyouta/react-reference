import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button component (Tailwind)", () => {

    it("renders children correctly", () => {

        render(<Button color="red" size="medium">Click Me</Button>);
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("calls onClick handler when clicked", () => {

        const handleClick = vi.fn();

        render(
            <Button
                color="blue"
                size="small"
                onClick={handleClick}
            >
                Test
            </Button>
        );

        fireEvent.click(screen.getByText("Test"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies correct tailwind classes based on color and size props", () => {

        render(<Button color="green" size="large">Styled Button</Button>);

        const button = screen.getByText("Styled Button");

        expect(button).toHaveClass("bg-green-500");
        expect(button).toHaveClass("text-xl");
        expect(button).toHaveClass("rounded-lg");
    });

    it("is disabled when disabled prop is passed", () => {

        const handleClick = vi.fn();

        render(
            <Button color="red" size="small" disabled onClick={handleClick}>
                Disabled Button
            </Button>
        );

        const btn = screen.getByText("Disabled Button");

        expect(btn).toBeDisabled();
        fireEvent.click(btn);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it("applies additional className if provided", () => {

        render(
            <Button color="blue" size="medium" className="extra-class">
                With Extra Class
            </Button>
        );

        const button = screen.getByText("With Extra Class");

        expect(button).toHaveClass("extra-class");
    });
});
