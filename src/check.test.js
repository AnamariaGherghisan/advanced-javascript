import { check } from "./check";

describe("check", () => {
  it("should pass the checks", () => {
    expect(check()).toBeUndefined();
  });
});
