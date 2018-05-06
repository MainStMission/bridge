import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

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

const schema = makeExecutableSchema({ typeDefs });

makeExecutableSchema({ typeDefs, resolvers })

export default schema;
