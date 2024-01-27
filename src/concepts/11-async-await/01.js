async function createFlow() {
  const response = await fetch("https://api.github.com/orgs/bookingcom");

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    throw new Error("OOPS");
  }
}

createFlow();
