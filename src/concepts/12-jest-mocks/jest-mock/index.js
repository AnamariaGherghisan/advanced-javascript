import { increment, decrement, display } from "./utils";

export const myCounter = () => {
  increment();
  increment();
  increment();
  decrement();
  display();
};
