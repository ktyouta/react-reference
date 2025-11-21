import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./button";
import "@testing-library/jest-dom";

describe("Button component", () => {

    it("renders with children text", () => {

        render(
            <Button
                colorType="red"
                sizeType="medium">
                Click Me
            </Button>
        );
        expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("calls onClick handler when clicked", () => {

        const handleClick = vi.fn();

        render(
            <Button
                colorType="blue"
                sizeType="small"
                onClick={handleClick}
            >
                Test
            </Button>
        );

        fireEvent.click(screen.getByText("Test"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("applies correct color and size styles", () => {

        render(
            <Button
                colorType="green"
                sizeType="large">
                Styled Button
            </Button>
        );

        const button = screen.getByText("Styled Button");

        expect(button).toHaveStyle({
            backgroundColor: "#22c55e",
            fontSize: "1rem",
            padding: "10px 20px",
        });
    });
});
