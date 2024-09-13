import { myObject } from ".";

describe("jest spy", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should call func1 once", () => {
    const func1Spy = jest.spyOn(myObject, "func1");

    myObject.func1();

    expect(func1Spy).toHaveBeenCalled();
  });

  test("should call func1 twice", () => {
    const func1Spy = jest.spyOn(myObject, "func1");

    myObject.func1();
    myObject.func1();

    expect(func1Spy).toHaveBeenCalledTimes(2);
  });

  test("should call func2 with arguments", () => {
    const func2Spy = jest.spyOn(myObject, "func2");

    myObject.func2("foo bar");

    expect(func2Spy).toHaveBeenCalledWith("foo bar");
  });

  test("should call func1 with a mock implementation", () => {
    const func1Spy = jest.spyOn(myObject, "func1").mockImplementation();

    myObject.func1();

    expect(func1Spy).toHaveBeenCalled();
  });

  test("should call func1 and not func2", () => {
    const func1Spy = jest.spyOn(myObject, "func1");
    const func2Spy = jest.spyOn(myObject, "func2");

    myObject.func1();

    expect(func1Spy).toHaveBeenCalled();
    expect(func2Spy).not.toHaveBeenCalled();
  });
});
