const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const {
  addUserQuery,
  getAllUsersQuery,
  getUserByEmailQuery,
  deleteUserByEmailQuery,
  updateUserByEmailQuery
} = require("./queries/queries");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    addUser: addUserQuery,
    getAllUsers: getAllUsersQuery,
    getUserByEmail: getUserByEmailQuery,
    deleteUserByEmail: deleteUserByEmailQuery,
    updateUserByEmail: updateUserByEmailQuery
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
