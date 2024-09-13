import { reduce } from "./01";

describe("reduce", () => {
  it("should return the expected sum of all numbers", () => {
    expect(reduce([1, 2, 3], "ADD", 0)).toEqual(6);
  });

  it("should return the expected difference of all numbers", () => {
    expect(reduce([1, 2, 3], "SUBTRACT", 0)).toEqual(-6);
  });

  it("should return the expected product of all numbers", () => {
    expect(reduce([1, 2, 3], "MULTIPLY", 1)).toEqual(6);
  });

  it("should return the expected error message for an invalid operator", () => {
    expect(reduce([1, 2, 3], "FOO", 0)).toEqual("Invalid operation!");
  });
});
