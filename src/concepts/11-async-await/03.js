const inquirer = require("inquirer");

const userQuestions = [
  {
    message: "What is your first name?",
    name: "firstName",
    type: "input",
  },
  {
    message: "What is your last name?",
    name: "lastName",
    type: "input",
  },
  {
    message: "What is your age?",
    name: "age",
    type: "number",
  },
];

const verificationQuestions = [
  {
    message: "What is the name of your school?",
    name: "school",
  },
];

const validSchools = ["booking", "apple", "google", "amazon"];

const init = async () => {
  const { firstName, lastName, age } = await inquirer.prompt(userQuestions);

  console.log(`Welcome ${firstName} ${lastName} [${age}]`);

  if (age < 18) {
    console.log(`****** Verification questions ******`);

    const { school } = await inquirer.prompt(verificationQuestions);

    if (validSchools.includes(school.toLowerCase())) {
      console.log(`Your school ${school} is valid ✅`);
    } else {
      console.log(`Your school ${school} is NOT valid ❌`);
    }
  }
};

init();
