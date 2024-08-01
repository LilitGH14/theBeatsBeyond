import { describe,it } from "vitest";
import { imageLoader } from "./ImageLoader";

describe("hooks", () => {
  it("check the image loader is correct", () => {
    const result = imageLoader({ src: "src_img", width: 100 });
    expect(result).toEqual("src_img?w=100&q=75");
  });
  it("check the image loader is wrong", () => {
    const result = imageLoader({ src: "src_img", width: 150 });
    expect(result).toEqual("src_img?w=100&q=759");
  });
});
