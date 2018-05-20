import Sequelize from 'sequelize';
import _ from 'lodash';

// Azure Connect String
//  postgres://pantry@pantry-production:tmb8518$@pantry-production.postgres.database.azure.com:5432/pantry_production?ssl=true

const db = new Sequelize( {
    uri: postgres://pantry@pantry-production:tmb8518$@pantry-production.postgres.database.azure.com:5432/pantry_production',
    options: {
        native: true,
        ssl: true
    },
    dialect: 'postgres'
}); 


// const db = new Sequelize({
//     database: 'pantry_production', 
//     username: 'pantry@pantry-production', 
//     password: 'tmb8518$', 
//     host: 'pantry-production.postgres.database.azure.com ',
//     dialect: 'postgres',
//     port: 5432,
//     dialectOptions: {
//         ssl: true
//     }
//  );

const HouseholdModel = db.define('household', {
    createdAt: false,
    updatedAt: false,
    id: { type: Sequelize.INTEGER, primaryKey: true},
    createdAt: {type: Sequelize.DATE, field: 'created_at'}, 
    updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
    householdName: { type: Sequelize.STRING, field: 'household_name'},
    name: {type: Sequelize.STRING},
    street: {type: Sequelize.STRING},
    apt: {type: Sequelize.STRING},
    city: { type: Sequelize.STRING},
    state: { type: Sequelize.STRING},
    zip: {type: Sequelize.STRING},
    boxType: {type: Sequelize.TEXT, field: 'box_type'},
    income1: {type: Sequelize.STRING},
    incAmt1: {type: Sequelize.DECIMAL(8,2), field: 'inc_amt1' },
    income2: {type: Sequelize.STRING},
    incAmt2: {type: Sequelize.DECIMAL(8,2), field: 'inc_amt2'},
    income3: {type: Sequelize.STRING},
    incAmt3: {type: Sequelize.DECIMAL(8,2), field: 'inc_amt3'},
    income4: {type: Sequelize.STRING},
    incAmt4: {type: Sequelize.DECIMAL(8,2), field: 'inc_amt4'},
    expense1: {type: Sequelize.STRING},
    expAmt1: {type: Sequelize.DECIMAL(8,2), field: 'exp_amt1'},
    expense2: {type: Sequelize.STRING},
    expAmt2: {type: Sequelize.DECIMAL(8,2), field: 'exp_amt2'},
    expense3: {type: Sequelize.STRING},
    expAmt3: {type:Sequelize.DECIMAL(8,2), field: 'exp_amt3'},
    expense4: {type: Sequelize.STRING},
    expAmt4: {type: Sequelize.DECIMAL(8,2), field: 'exp_amt4'},
    option1: {type: Sequelize.TEXT},
    optVal1: {type: Sequelize.TEXT, field: 'opt_val1'},
    option2: {type: Sequelize.TEXT, field: 'opt_val2'},
    notes: {type: Sequelize.TEXT},
    foodAlert: {type: Sequelize.STRING, field: 'food_alert'},
    prayerRequest: {type: Sequelize.STRING, field:'prayer_request'},
    moneyNotes: {type: Sequelize.TEXT, field:'money_notes'},
    specialNeeds: {type: Sequelize.STRING, field:'special_needs'},
    howHeard: {type: Sequelize.STRING, field: 'how_heard'},
    proofOfResidencyType: {type: Sequelize.STRING, field: 'proof_of_residency_type'},
    dateOfProof: {type: Sequelize.DATE, field: 'date_of_proof'},
    postPrayer: {type: Sequelize.BOOLEAN, field: 'post_prayer'},
    postNeeds: {type: Sequelize.BOOLEAN, field: 'post_needs'},
    christmas: {type: Sequelize.BOOLEAN},
    bool1: {type: Sequelize.BOOLEAN},
    boolVal1: {type: Sequelize.STRING, field: 'bool_val1'},
    bool2: {type: Sequelize.BOOLEAN},
    boolVal2: {type: Sequelize.STRING, field: 'bool_val2'},
    bool3: {type: Sequelize.BOOLEAN},
    boolVal3: {type: Sequelize.STRING, field: 'bool_val3'},
    bool4: {type: Sequelize.BOOLEAN},
    boolVal4: {type: Sequelize.STRING, field: 'bool_val4'},
    bool5: {type: Sequelize.BOOLEAN},
    boolVal5: {type: Sequelize.STRING, field: 'bool_val4'},
    sNumb: {type: Sequelize.INTEGER, field: 's_numb'},
    sBox: {type: Sequelize.INTEGER, field: 's_box'},
});


const NeighborModel  = db.define('neighbor', {
    createdAt: false,
    updatedAt: false,
    id: { type: Sequelize.INTEGER, primaryKey: true},
    createdAt: {type: Sequelize.DATE, field: 'created_at'}, 
    updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
    firstName: {type: Sequelize.STRING, field: 'first_name'},
    lastName: {type: Sequelize.STRING, field: 'last_name'},
    street: {type: Sequelize.STRING},
    city: {type: Sequelize.STRING},
    state: {type: Sequelize.STRING},
    zip: {type: Sequelize.STRING},
    phone: {type: Sequelize.STRING},
    monthlyIncome: {type: Sequelize.DECIMAL(8,2), field: 'monthly_income'},
    foodStamps: {type: Sequelize.DECIMAL(8,2), field: 'food_stamps'},
    rent: {type: Sequelize.DECIMAL(8,2)},
    utilities: {type: Sequelize.DECIMAL(8,2)},
    residencyDate: {type: Sequelize.DATE, field: 'residency_date'},
    spouse: {type: Sequelize.BOOLEAN},
    houseRank: {type: Sequelize.INTEGER, field: 'house_rank'},
    openDate: {type: Sequelize.DATE, field: 'open_date'},
    closeDate: {type: Sequelize.DATE, field: 'close_date'},
    proofOfResidencyType: {type: Sequelize.STRING, field: 'proof_of_residency_type'},
    dateOfProof: {type: Sequelize.DATE, field: 'date_of_proof'},
    smokes: {type: Sequelize.BOOLEAN},
    encryptedSsn: {type: Sequelize.STRING, field: 'encrypted_ssn'},
    encryptedSsnIv: {type: Sequelize.STRING, field: 'encrypted_ssn_iv'},
    encryptedSsnSalt: {type: Sequelize.STRING, field: 'encrypted_ssn_salt'},
    notes: {type: Sequelize.TEXT},
    age: {type: Sequelize.INTEGER},
    sex: {type: Sequelize.STRING},
    householdId: {type: Sequelize.INTEGER, field: 'household_id'},
    middleName: {type: Sequelize.STRING, field: 'middle_name'},
    email: {type: Sequelize.STRING},
    apt: {type: Sequelize.STRING},
    done: {type: Sequelize.BOOLEAN},
    birthDate: {type: Sequelize.DATE,field: 'birth_date' }
});

const visitModel = db.define('visit',  {
    createdAt: false,
    updatedAt: false,
    id: { type: Sequelize.INTEGER, primaryKey: true},
    createdAt: {type: Sequelize.DATE, field: 'created_at'}, 
    updatedAt: {type: Sequelize.DATE, field: 'updated_at'},
    visitedOn:  {type: Sequelize.DATE, field: 'visited_on'},
    itemsReceived: {type: Sequelize.TEXT, field: 'items_received'},
    notes: {type: Sequelize.TEXT},
    householdId: {type: Sequelize.INTEGER, field:'household_id'},
    neighborId: {type: Sequelize.INTEGER, field: 'neighbor_id'},
    starch: {type: Sequelize.STRING},
    cereal: {type: Sequelize.STRING},
    option1: {type: Sequelize.STRING},
    option2: {type: Sequelize.STRING},
    optionb: {type: Sequelize.BOOLEAN}
});

HouseholdModel.hasMany(NeighborModel);
NeighborModel.belongsTo(HouseholdModel);
visitModel.belongsTo(NeighborModel);
visitModel.belongsTo(HouseholdModel);


const Household = db.models.household;
const Neighbor = db.models.neighbor;
const Visit    = db.models.visit;
export { Household, Neighbor, Visit };
