import { get } from "./axios";
import { myApp } from ".";

const manyUsersMock = {
  data: {
    users: [
      {
        id: 1,
        firstName: "Bob",
        lastName: "Smith",
      },
      {
        id: 2,
        firstName: "Alice",
        lastName: "Green",
      },
      {
        id: 3,
        firstName: "Tim",
        lastName: "Roots",
      },
    ],
  },
};

const noUsersMock = {
  data: {
    users: [],
  },
};

jest.mock("./axios");

describe("my app", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should get full names", () => {
    get.mockReturnValue(manyUsersMock);
    const expected = ["Bob Smith", "Alice Green", "Tim Roots"];

    const actual = myApp();

    expect(get).toHaveBeenCalled();
    expect(actual).toEqual(expected);
  });

  test("should get empty array", () => {
    get.mockReturnValue(noUsersMock);
    const expected = [];

    const actual = myApp();

    expect(get).toHaveBeenCalled();
    expect(actual).toEqual(expected);
  });
});
