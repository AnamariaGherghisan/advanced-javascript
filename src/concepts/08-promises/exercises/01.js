const URL = "https://api.github.com/users/surajverma2587";

const greeting = () => {
  console.log("greeting function executed");
};

const longFunction = () => {
  for (let i = 0; i < 999999999; i++) {}
  console.log("longFunction executed");
};

const getJsonResponse = function (response) {
  console.log(response);
  return response.json();
};

const displayData = function (data) {
  console.log(data);
};

const handleError = (error) => {
  console.log(`[ERROR]: ${error.message}`);
};

setTimeout(greeting, 1);

fetch(URL).then(getJsonResponse).then(displayData).catch(handleError);

longFunction();

console.log("Done");
