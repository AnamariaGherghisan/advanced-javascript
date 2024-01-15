import { get } from "./axios";

export const myApp = () => {
  const { data } = get();

  const fullNames = data.users.map(
    ({ firstName, lastName }) => `${firstName} ${lastName}`
  );

  return fullNames;
};
