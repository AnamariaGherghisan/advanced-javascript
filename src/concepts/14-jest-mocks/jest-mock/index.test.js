import { myCounter } from ".";

import { increment, decrement, display } from "./utils";

jest.mock("./utils.js");

describe("my counter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call increment", () => {
    myCounter();
    expect(increment).toHaveBeenCalledTimes(3);
  });

  test("should call decrement", () => {
    myCounter();
    expect(decrement).toHaveBeenCalledTimes(1);
  });

  test("should call display", () => {
    myCounter();
    expect(display).toHaveBeenCalledTimes(1);
  });
});
