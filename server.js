const { ApolloServer, gql } = require("apollo-server");
// import schema from './data/schema';
import resolvers from './data/resolvers';

// Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     annoucement: () =>
//   }
// };

// const typeDefs = gql`
// # Comments in GraphQL are defined with the hash (#) symbol.

// # This "Book" type can be used in other type declarations.
// type Household {
//   householdName: String
//   city: String
// }

// # The "Query" type is the root of all GraphQL queries.
// # (A "Mutation" type will be covered later on.)
// type Query {
//   households: [Household]
// }
// `;

const typeDefs = gql`
type Query {
  household(city: String, householdName: String,  state: String, street: String, zip: String): Household
  allHouseholds: [Household]
}

type Household {
  city: String
  householdName: String
  state: String
  street: String
  zip: String
  neighbors: [Neighbor]
}

type Neighbor {
  firstName: String
  lastName: String
  household: Household
}`
;


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});





// import express from 'express';
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import bodyParser from 'body-parser';
// import schema from './data/schema';
// import resolvers from './data/schema'; 
// import { ApolloEngine } from 'apollo-engine';

// const GRAPHQL_PORT = 3000;
// const ENGINE_API_KEY = 'Y27QKqz3tb0UWiXulDbz8w'; // TODO

// const engine = new ApolloEngine({
//   apiKey: process.env.ENGINE_API_KEY,
// });

// const graphQLServer = express();

// graphQLServer.use(compression());
// graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// engine.listen(GRAPHQL_PORT, () =>
//   console.log(
//     `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
//   )
// );

// engine.listen({ port: 3000,
//   graphqlPaths: ['/api/graphql'],
//   expressApp: app,
//   launcherOptions: {
//     startupTimeout: 3000,
//   },
// }, () => {
//   console.log('Listening!');
// });
