// abcd1234 : $2b$12$1hqJuFtAMg5camAzued57O8tPWSCcq5Vm2XvhDkscTQ3PBej/prbO
let users = [
  {
    id: "1",
    username: "bob",
    password: "$2b$12$1hqJuFtAMg5camAzued57O8tPWSCcq5Vm2XvhDkscTQ3PBej/prbO",
    name: " Bob",
    email: "bob@gmail.com",
    url: "https://cdn.pixabay.com/photo/2016/11/04/13/19/students-1797753_960_720.jpg",
  },
];

export async function findByUsername(username) {
  return users.find((user) => user.username === username);
}

export async function createUser(user) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
