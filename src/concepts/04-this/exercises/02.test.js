import { vehicle } from "./02";

describe("exercise-02", () => {
  it("should return the expected data properties", () => {
    expect(vehicle).toEqual(
      expect.objectContaining({
        make: expect.any(String),
        model: expect.any(String),
        year: expect.any(Number),
        colour: expect.any(String),
        dailyRentalPrice: expect.any(Number),
      })
    );
  });

  it("should return the expected string when getInfo is invoked", () => {
    expect(vehicle.getInfo()).toEqual(
      "Make: Audi | Model: A1 | Year: 2023 | Colour: Black"
    );
  });

  it("should return true when isMOTRequired is invoked", () => {
    expect(vehicle.isMOTRequired()).toEqual(true);
  });

  it("should return the expected total price for 1 day when getTotalPrice is invoked", () => {
    expect(vehicle.getTotalPrice()).toEqual(49.99);
  });

  it("should return the expected total price for 5 days when getTotalPrice is invoked", () => {
    expect(vehicle.getTotalPrice(5)).toEqual(249.95);
  });

  it("should return the expected total price for 5 days when getFormattedPrice is invoked", () => {
    expect(vehicle.getFormattedPrice(5)).toEqual("Total Rental Price: $249.95");
  });
});
