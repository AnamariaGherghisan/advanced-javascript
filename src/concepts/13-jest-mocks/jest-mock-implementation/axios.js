export const get = () => {
  const users = [
    {
      id: 1,
      firstName: "Bob",
      lastName: "Smith",
    },
    {
      id: 2,
      firstName: "Alice",
      lastName: "Green",
    },
    {
      id: 3,
      firstName: "Tim",
      lastName: "Roots",
    },
    {
      id: 4,
      firstName: "Jake",
      lastName: "Brown",
    },
    {
      id: 5,
      firstName: "Jane",
      lastName: "Smith",
    },
    {
      id: 6,
      firstName: "Julie",
      lastName: "Woo",
    },
    {
      id: 7,
      firstName: "Mark",
      lastName: "Lee",
    },
    {
      id: 8,
      firstName: "Mary",
      lastName: "Roots",
    },
    {
      id: 9,
      firstName: "Tom",
      lastName: "Brown",
    },
    {
      id: 10,
      firstName: "Joe",
      lastName: "Black",
    },
  ];

  return {
    data: {
      users,
      count: users.length,
    },
  };
};
