const inquirer = require("inquirer");

const displayMessage = (answers) => {
  console.log(`Welcome ${answers.firstName} ${answers.lastName}`);
};

const displayError = (err) => {
  console.log(`[ERROR]: Failed to prompt questions | ${err.message}`);
};

inquirer
  .prompt([
    {
      message: "What is your first name?",
      name: "firstName",
    },
    {
      message: "What is your last name?",
      name: "lastName",
    },
  ])
  .then(displayMessage)
  .catch(displayError);
