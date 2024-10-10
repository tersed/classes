import { describe, it, expect } from "vitest";
import { classes } from "./classes";

describe("classes", () => {
  it("classes", () => {
    expect(classes("a", "b")).toBe("a b");
  });
  it("classes with empty string", () => {
    expect(classes("a", "", "b", "   ", "c")).toBe("a b c");
  });
});
