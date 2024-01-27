const processResponse = (response) => {
  const { value: fetcher } = myFunction.next(response);

  fetcher.then(processData);
};

const processData = (data) => {
  myFunction.next(data);
};

const displayError = (error) => {
  console.log(error.message);
};

function* createFlow() {
  const response = yield fetch("https://api.github.com/orgs/bookingcom");

  if (response.ok) {
    const data = yield response.json();
    console.log(data);
  } else {
    throw new Error("OOPS");
  }
}

const myFunction = createFlow();
const { value: fetcher } = myFunction.next();

fetcher.then(processResponse).catch(displayError);
