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
  {
    id: "2",
    username: "testuser 2",
    password: "$2b$12$1hqJuFtAMg5camAzued57O8tPWSCcq5Vm2XvhDkscTQ3PBej/prbO",
    name: "testuse",
    email: "testuser2@gmail.com",
    url: "https://cdn.pixabay.com/photo/2016/11/04/13/19/students-1797753_960_720.jpg",
  },
  {
    id: "3",
    username: "testuser 3",
    password: "$2b$12$1hqJuFtAMg5camAzued57O8tPWSCcq5Vm2XvhDkscTQ3PBej/prbO",
    name: "testuse3",
    email: "testuser3@gmail.com",
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

export async function findById(id) {
  return users.find((user) => user.id === id);
}
