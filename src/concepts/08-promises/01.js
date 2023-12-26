const displayData = (response) => {
  console.log(response);
};

const displayError = (error) => {
  console.log(error);
};

const URL1 = "https://api.github.com/users/surajverma2587";
const URL2 = "https://api.github.com/users/surajverma2587/repos";

const getDataFromServer1 = fetch(URL1);
const getDataFromServer2 = fetch(URL2);

getDataFromServer1.then(displayData).catch(displayError);
getDataFromServer2.then(displayData).catch(displayError);

console.log("End of app");
