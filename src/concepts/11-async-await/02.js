const axios = require("axios");

const getApiData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(response?.data?.login);
  } catch (error) {
    console.log(`[ERROR]: Failed to retrieve data | ${error.message}`);
  }
};

getApiData("https://api.github.com/users/surajverma2587");
// getApiData("https://api.github.com/something");
