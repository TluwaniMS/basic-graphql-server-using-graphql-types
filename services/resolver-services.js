const { users } = require("../sample-data/sample-user-data");

const getAllUsers = () => users;

const getUserByEmail = (args) => users.filter((user) => (user.email = args.email))[0];

const addUser = (args) => {
  const newUser = {
    firstName: args.firstName,
    lastName: args.lastName,
    email: args.email
  };

  users.push(newUser);
};

const deleteUserByEmail = (args) => {
  const selectedUser = users.filter((user) => user.email === args.email)[0];
  const userIndex = users.indexOf(selectedUser);
  users.splice(userIndex, 1);
};

const updateUser = (args) => {
  users.forEach((user) => {
    user.email === args.email ? ((user.firstName = args.firstName), (user.lastName = args.lastName)) : "";
  });
};

module.exports = { getAllUsers };
