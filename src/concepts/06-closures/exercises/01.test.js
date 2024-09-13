import { generateArray } from "./01";

describe("generateArray", () => {
  describe("some", () => {
    it("should return true when the given condition is satisfied", () => {
      const myArray = generateArray([1, 3, 5, 7, 8]);

      const result1 = myArray.some((num) => num % 2 === 0);
      const result2 = myArray.some((num) => num % 2 === 0);

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
    });

    it("should return false when the given condition is satisfied", () => {
      const myArray = generateArray([1, 3, 5, 7, 9]);

      const result1 = myArray.some((num) => num % 2 === 0);
      const result2 = myArray.some((num) => num % 2 === 0);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });

    it("should return false when the array is an empty array", () => {
      const myArray = generateArray([]);

      const result = myArray.some((num) => num % 2 === 0);

      expect(result).toEqual(false);
    });
  });

  describe("every", () => {
    it("should return true when the given condition is satisfied", () => {
      const myArray = generateArray([2, 4, 6, 8]);

      const result1 = myArray.every((num) => num % 2 === 0);
      const result2 = myArray.every((num) => num % 2 === 0);

      expect(result1).toEqual(true);
      expect(result2).toEqual(true);
    });

    it("should return false when the given condition is satisfied", () => {
      const myArray = generateArray([1, 3, 5, 8, 7]);

      const result1 = myArray.every((num) => num % 2 === 0);
      const result2 = myArray.every((num) => num % 2 === 0);

      expect(result1).toEqual(false);
      expect(result2).toEqual(false);
    });

    it("should return false when the array is an empty array", () => {
      const myArray = generateArray([]);

      const result = myArray.every((num) => num % 2 === 0);

      expect(result).toEqual(false);
    });
  });
});
