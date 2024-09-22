/*
    1.  Declare a vehicle object 
    2.  Add the following data properties:
        - make: String
        - model: String
        - year: Number
        - colour: String
        - dailyRentalPrice: Number
    3.  Add a method getInfo that returns a formatted string of the vehicle info
    4.  Add a method isMOTRequired that returns true if the year is less than 2024
    5.  Add a method getTotalPrice that returns the total rental price
    6.  Add a method getFormattedPrice that returns the formatted total rental price
*/
export const vehicle = {
  make: "Audi",
  model: "A1",
  year: 2023,
  colour: "Black",
  dailyRentalPrice: 49.99,
  getInfo() {
    return `Make: ${this.make} | Model: ${this.model} | Year: ${this.year} | Colour: ${this.colour}`;
  },
  isMOTRequired() {
    return this.year < 2024;
  },
  getTotalPrice(numberOfDays = 1) {
    const result = this.dailyRentalPrice * numberOfDays;

    return Math.round(result * 100) / 100;
  },
  getFormattedPrice(numberOfDays = 1) {
    return `Total Rental Price: $${this.getTotalPrice(numberOfDays)}`;
  },
};
