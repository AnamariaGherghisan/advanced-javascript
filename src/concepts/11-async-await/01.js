const axios = require("axios");

const getApiData = async (url) => {
  try {
    const response1 = await axios.get(url);

    console.log(response1?.data?.login);
    console.log("me first");

    const response2 = await axios.get(url);

    console.log(response2?.data?.html_url);
    console.log("me second");
  } catch (error) {
    console.log(`[ERROR]: Failed to retrieve data | ${error.message}`);
  }
};

getApiData("https://api.github.com/users/surajverma2587");

// getApiData("https://api.github.com/something");
