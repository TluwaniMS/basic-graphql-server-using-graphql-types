const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const {
  addUserQuery,
  getAllUsersQuery,
  getUserByEmailQuery,
  deleteUserByEmailQuery,
  updateUserByEmailQuery
} = require("./queries/queries");

const Query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: getAllUsersQuery,
    getUserByEmail: getUserByEmailQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addUser: addUserQuery,
    deleteUserByEmail: deleteUserByEmailQuery,
    updateUserByEmail: updateUserByEmailQuery
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
