const users = [
  {
    user_id: 3609,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password',
  },
  {
    user_id: 3610,
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@metropolia.fi',
    role: 'admin',
    password: 'password2',
  },
];

const listAllUsers = () => users;

const findUserById = (id) => users.find((user) => user.user_id === Number(id));

const addUser = (user) => {
  users.push(user);
  return user;
};

export { listAllUsers, findUserById, addUser };
