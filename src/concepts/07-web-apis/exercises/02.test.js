import { countdown } from "./02";

jest.useFakeTimers();

describe("countdown", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should countdown from 3 seconds", () => {
    const consoleSpy = jest.spyOn(console, "log");

    countdown(3);

    jest.advanceTimersByTime(3000);

    expect(consoleSpy).toHaveBeenCalledTimes(4);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Time remaining: 3s");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Time remaining: 2s");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Time remaining: 1s");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "THE END!!");
  });

  it("should countdown from 10 seconds as default", () => {
    const consoleSpy = jest.spyOn(console, "log");

    countdown();

    jest.advanceTimersByTime(10000);

    expect(consoleSpy).toHaveBeenCalledTimes(11);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Time remaining: 10s");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Time remaining: 9s");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "Time remaining: 8s");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "Time remaining: 7s");
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "Time remaining: 6s");
    expect(consoleSpy).toHaveBeenNthCalledWith(6, "Time remaining: 5s");
    expect(consoleSpy).toHaveBeenNthCalledWith(7, "Time remaining: 4s");
    expect(consoleSpy).toHaveBeenNthCalledWith(8, "Time remaining: 3s");
    expect(consoleSpy).toHaveBeenNthCalledWith(9, "Time remaining: 2s");
    expect(consoleSpy).toHaveBeenNthCalledWith(10, "Time remaining: 1s");
    expect(consoleSpy).toHaveBeenNthCalledWith(11, "THE END!!");
  });
});
