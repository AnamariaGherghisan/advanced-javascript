import { Basket } from "./01";

describe("Basket", () => {
  it("should create a new instance of the Basket with the default currency", () => {
    const actual = new Basket();

    expect(actual).toBeInstanceOf(Basket);
    expect(actual).toEqual(
      expect.objectContaining({
        items: [],
        grandTotal: 0,
        currency: "USD",
        locale: "en-US",
      })
    );
  });

  it("should create a new instance of the Basket with EUR as currency", () => {
    const actual = new Basket("EUR");

    expect(actual).toBeInstanceOf(Basket);
    expect(actual).toEqual(
      expect.objectContaining({ items: [], grandTotal: 0, currency: "EUR" })
    );
  });

  describe("addItem", () => {
    it("should add a single item to an empty basket", () => {
      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      expect(basket.items.length).toEqual(1);
      expect(basket.items).toEqual([
        {
          id: "e8ed6104-c7c3-4e23-ae57-5f553dd74778",
          label: "Wireless Keyboard",
          price: 14.99,
          currency: "USD",
          quantity: 1,
        },
      ]);
    });

    it("should add a single item to a non-empty basket", () => {
      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      expect(basket.items.length).toEqual(1);
      expect(basket.items).toEqual([
        {
          id: "e8ed6104-c7c3-4e23-ae57-5f553dd74778",
          label: "Wireless Keyboard",
          price: 14.99,
          currency: "USD",
          quantity: 1,
        },
      ]);

      basket.addItem("2d9fe95a-11b9-4d9f-8d59-9ab285feec59");

      expect(basket.items.length).toEqual(2);
      expect(basket.items).toEqual([
        {
          id: "2d9fe95a-11b9-4d9f-8d59-9ab285feec59",
          label: "Wireless Mouse",
          price: 34.99,
          currency: "USD",
          quantity: 1,
        },
        {
          id: "e8ed6104-c7c3-4e23-ae57-5f553dd74778",
          label: "Wireless Keyboard",
          price: 14.99,
          currency: "USD",
          quantity: 1,
        },
      ]);
    });

    it("should add 2 of the same item", () => {
      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      expect(basket.items.length).toEqual(1);
      expect(basket.items).toEqual([
        {
          id: "e8ed6104-c7c3-4e23-ae57-5f553dd74778",
          label: "Wireless Keyboard",
          price: 14.99,
          currency: "USD",
          quantity: 2,
        },
      ]);
    });
  });

  describe("removeItem", () => {
    it("should remove a single items from an empty basket", () => {
      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.removeItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      expect(basket.items.length).toEqual(0);
      expect(basket.items).toEqual([]);
    });

    it("should add a single item from a non-empty basket", () => {
      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.addItem("2d9fe95a-11b9-4d9f-8d59-9ab285feec59");
      basket.removeItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      expect(basket.items.length).toEqual(1);
      expect(basket.items).toEqual([
        {
          id: "2d9fe95a-11b9-4d9f-8d59-9ab285feec59",
          label: "Wireless Mouse",
          price: 34.99,
          currency: "USD",
          quantity: 1,
        },
      ]);
    });

    it("should remove one item from a multi quantity item", () => {
      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.removeItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      expect(basket.items.length).toEqual(1);
      expect(basket.items).toEqual([
        {
          id: "e8ed6104-c7c3-4e23-ae57-5f553dd74778",
          label: "Wireless Keyboard",
          price: 14.99,
          currency: "USD",
          quantity: 1,
        },
      ]);
    });

    it("should remove multiple items from a multi quantity item", () => {
      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.removeItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.removeItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      expect(basket.items.length).toEqual(0);
      expect(basket.items).toEqual([]);
    });
  });

  describe("displayBasket", () => {
    it("should display the contents of the basket for single item", () => {
      const consoleSpy = jest.spyOn(console, "table");

      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      basket.displayBasket();

      expect(consoleSpy).toHaveBeenCalledWith([
        { label: "Wireless Keyboard", price: 14.99, quantity: 1 },
      ]);
    });

    it("should display the contents of the basket for multiple items", () => {});
  });

  describe("displayTotal", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should log the expected total for a single item", () => {
      const consoleSpy = jest.spyOn(console, "log");

      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      basket.displayTotal();

      expect(consoleSpy).toHaveBeenCalledWith("Total Price: $14.99");
    });

    it("should log the expected total for a single item multi quantity", () => {
      const consoleSpy = jest.spyOn(console, "log");

      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      basket.displayTotal();

      expect(consoleSpy).toHaveBeenCalledWith("Total Price: $29.98");
    });

    it("should log the expected total for a mixed items", () => {
      const consoleSpy = jest.spyOn(console, "log");

      const basket = new Basket();

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");
      basket.addItem("2d9fe95a-11b9-4d9f-8d59-9ab285feec59");

      basket.displayTotal();

      expect(consoleSpy).toHaveBeenCalledWith("Total Price: $64.97");
    });

    it("should log the expected total for a GBP currency and en-GB locale", () => {
      const consoleSpy = jest.spyOn(console, "log");

      const basket = new Basket("GBP", "en-GB");

      basket.addItem("e8ed6104-c7c3-4e23-ae57-5f553dd74778");

      basket.displayTotal();

      expect(consoleSpy).toHaveBeenCalledWith("Total Price: £11.84");
    });
  });
});
