const inquirer = require("inquirer");

const questions = [
  {
    message: "What is your first name?",
    name: "firstName",
  },
  {
    message: "What is your last name?",
    name: "lastName",
  },
];

const displayMessage = (answers) => {
  console.log(`Welcome ${answers.firstName} ${answers.lastName}`);
};

inquirer.prompt(questions).then(displayMessage);
