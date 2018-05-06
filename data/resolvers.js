import { Household, View} from './connector';

const resolvers = {
  Query: {
    household(_, args) {
      return Household.find({where: args});
    },
    allHouseholds(_, args) {
      return Household.findAll();
    }
  },
  Household: {
    neighbors(household) {
      return household.getNeighbors();
    }
  },
  Neighbor: {
    household(neighbor) {
      return neighbor.getHousehold();
    },
  }
};

export default resolvers;