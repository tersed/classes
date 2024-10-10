import { expect } from "vitest";
import { classes } from "./classes.ts";

test("classes", () => {
  expect(classes()).toBe("");

  expect(
    classes(0, 1, ["a"], { a: true }, "", "  ", null, true, false, undefined)
  ).toBe("");

  expect(
    classes({}, "x", 1 / 0, "1", 1.2, "y", "2", NaN, "z", [], "", false, "3")
  ).toBe("x 1 y 2 z 3");
});
