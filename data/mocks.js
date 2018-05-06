import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    household: (root, args) => {
      return {
        city: args.city,
        householdName: args.householdName,
        state: args.state,
        street: args.street,
        zip: args.zip
        };
      },
    }),
    houshold: () => ({  city: () => casual.city,
                        householdName: () => casual.householdName,
                        state: () => casual.state,
                        street: () => casual.street,
                        zip: () => casual.zip
    }),
  };

export default mocks;
