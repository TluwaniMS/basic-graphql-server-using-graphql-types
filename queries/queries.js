const {
  getAllUsers,
  getUserByEmail,
  deleteUserByEmail,
  updateUser,
  addUser
} = require("../services/resolver-services");
const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { UserType } = require("../models/user-model");

const addUserQuery = {
  type: GraphQLString,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return addUser(args);
  }
};

const getAllUsersQuery = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    return getAllUsers();
  }
};

const getUserByEmailQuery = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getUserByEmail(args);
  }
};

const deleteUserByEmailQuery = {
  type: GraphQLString,
  args: { email: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(parent, args) {
    return deleteUserByEmail(args);
  }
};

const updateUserByEmailQuery = {
  type: GraphQLString,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return updateUser(args);
  }
};

module.exports = {
  addUserQuery,
  getAllUsersQuery,
  getUserByEmailQuery,
  deleteUserByEmailQuery,
  updateUserByEmailQuery
};
