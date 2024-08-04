import { describe, expect, it } from "vitest";
import generalSlice, {
  initialState,
  setSelectedLanguage,
} from "./generalSlice";

describe("Reducers", () => {
  it("Should have initial state", () => {
    const newState = generalSlice.reducer(initialState, { type: "unknown" });
    expect(newState).toEqual({
      dictionary: null,
      selectedLang: "en",
    });
  });
  it("Should change state value by calling action", () => {
    const newState = generalSlice.reducer(
      initialState,
      setSelectedLanguage("ko")
    );
    expect(newState).toEqual({
      dictionary: null,
      selectedLang: "ko",
    });
  });
});
