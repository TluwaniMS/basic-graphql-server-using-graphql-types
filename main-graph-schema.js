const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {}
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
