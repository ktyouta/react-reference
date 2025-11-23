import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ErrorFallback } from "./ErrorFallback";

describe("ErrorFallback", () => {

  it("ホームに戻るクリックで location.assign が呼ばれる", () => {

  const assignMock = vi.fn();

  delete (window as any).location;
  (window as any).location = { assign: assignMock };

  render(<ErrorFallback />);

  const button = screen.getByText("ホームに戻る");
  fireEvent.click(button);

  expect(assignMock).toHaveBeenCalledWith(window.location.origin);
});
});
