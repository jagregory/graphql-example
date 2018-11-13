const data = [
  {
    id: 1,
    firstName: "James",
    lastName: "Gregory",
    email: "jgregor@thoughtworks.com",
    billCode: "02",
    visits: 10,
    active: true
  },
  {
    id: 2,
    firstName: "Meaghan",
    lastName: "Waters",
    email: "mwaters@thoughtworks.com",
    billCode: "19",
    visits: 19,
    active: true
  },
  {
    id: 3,
    firstName: "Shuqian",
    lastName: "Hon",
    email: "sqhon@thoughtworks.com",
    billCode: "6",
    visits: 54,
    active: true
  },
  {
    id: 4,
    firstName: "Anirudh",
    lastName: "Bhatnagar",
    email: "anirudhb@thoughtworks.com",
    billCode: "10",
    visits: 5,
    active: false
  }
];

export const users = () => data;
export const updateUser = (id, delta) => {
  const existing = data.find(user => user.id.toString() === id);

  if (existing) {
    Object.assign(existing, delta);
  }

  return existing;
};
