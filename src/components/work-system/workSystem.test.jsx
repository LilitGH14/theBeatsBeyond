import { describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import WorkSystemArea from "./WorkSystemArea";

vi.mock("@/constants/constants", () => {
  return {
    WORFEATURES: [
      {
        id: 1,
        icon: null,
        title: "How_it_works_feature_1_title",
        description: "How_it_works_feature_1_description",
      },
    ],
  };
});

describe("work-system", () => {
  it("check the WorkSystemArea data from mock", async () => {
    render(<WorkSystemArea />);
    screen.debug();
  });
});
