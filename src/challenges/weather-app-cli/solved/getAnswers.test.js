const { getAnswers } = require("./getAnswers");
const { prompt } = require("inquirer");

jest.mock("inquirer");

describe("getAnswers", () => {
  const questions = [
    {
      message: "Enter city name",
      type: "input",
      name: "cityName",
    },
    {
      message: "Would you like to view the 5-day weather forecast?",
      type: "confirm",
      name: "requestForecast",
      default: false,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should return city name and forecast no", async () => {
    prompt.mockResolvedValue({
      cityName: "London",
      requestForecast: false,
    });

    const expected = {
      cityName: "London",
      requestForecast: false,
    };

    const actual = await getAnswers();

    expect(prompt).toHaveBeenCalledWith(questions);
    expect(actual).toEqual(expected);
  });

  test("should return city name and forecast yes", async () => {
    prompt.mockResolvedValue({
      cityName: "London",
      requestForecast: true,
    });

    const expected = {
      cityName: "London",
      requestForecast: true,
    };

    const actual = await getAnswers();

    expect(prompt).toHaveBeenCalledWith(questions);
    expect(actual).toEqual(expected);
  });
});
