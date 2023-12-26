const axios = require("axios");

const getApiData = (url) => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) =>
      console.log(`[ERROR]: Failed to retrieve data | ${err.message}`)
    );
};

getApiData("https://api.github.com/users/surajverma2587");

getApiData("https://api.github.com/something");
