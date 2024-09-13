const axios = require("axios");

axios
  .get("https://api.github.com/users/surajverma2587")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) =>
    console.log(`[ERROR]: Failed to retrieve data | ${err.message}`)
  );
