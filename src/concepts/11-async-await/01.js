async function createFlow() {
  console.log("start");
  const response = await fetch("https://api.github.com/orgs/bookingcom");

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    throw new Error("OOPS");
  }
}

createFlow();

console.log("end");
