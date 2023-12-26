const inquirer = require("inquirer");

const getAnswers = async () => {
  // declare questions
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

  // prompt questions to get answers
  const answers = await inquirer.prompt(questions);

  // return answers
  return answers;
};

module.exports = { getAnswers };
