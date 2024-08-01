import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import ErrorMsg from "./ErrorMsg";
import Pagination from "./Pagination";

describe("common", () => {
  it("check the ErrorMsg", () => {
    render(<ErrorMsg error="Error msg 1" />);
    screen.debug();
    expect(screen.getByTestId("error_msg_id")).toHaveTextContent("Error msg 1");
  });
  it("check the pagination", () => {
    render(<Pagination pagesCount="5" currentPage="1" />);
    const elArr = screen.getAllByTestId("pagination-item");

    expect(elArr[0]).toHaveTextContent("1");
    expect(elArr).toHaveLength(5);
  });
  it("check the pagination click", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Pagination
        pagesCount="5"
        currentPage="1"
        changeCurrentPage={handleClick}
      />
    );
    const elArr = screen.getAllByTestId("pagination-item");
    await user.click(elArr[0].getElementsByTagName("button")[0]);
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
