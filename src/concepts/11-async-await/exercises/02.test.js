import inquirer from "inquirer";
import { getSessionFeedback } from "./02";

jest.mock("inquirer");

describe("getSessionFeedback", () => {
  it("should prompt the expected questions", async () => {
    inquirer.prompt.mockResolvedValue({
      fullName: "Bob Smith",
      attendance: true,
      rating: 5,
    });

    await getSessionFeedback();

    expect(inquirer.prompt).toHaveBeenCalledWith([
      {
        message: "Enter your full name:",
        name: "fullName",
        type: "input",
      },
      {
        message: "Did you attend the session in person?",
        name: "attendance",
        type: "confirm",
      },
      {
        message: "Rate the session on a scale of 1-5",
        name: "rating",
        type: "list",
        choices: ["1", "2", "3", "4", "5"],
      },
    ]);
  });

  it("should log the expected message for an in-person attendance", async () => {
    inquirer.prompt.mockResolvedValue({
      fullName: "Bob Smith",
      attendance: true,
      rating: 5,
    });
    const consoleSpy = jest.spyOn(console, "log");

    await getSessionFeedback();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Hello Bob Smith! Thank you for your in-person attendance. You rated this session a score of 5."
    );
  });

  it("should log the expected message for a remote attendance", async () => {
    inquirer.prompt.mockResolvedValue({
      fullName: "Bob Smith",
      attendance: false,
      rating: 3,
    });
    const consoleSpy = jest.spyOn(console, "log");

    await getSessionFeedback();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Hello Bob Smith! Thank you for your remote attendance. You rated this session a score of 3."
    );
  });
});
