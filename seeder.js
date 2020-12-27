const sequelize = require('./config/connection');
const { User} = require('./models');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: false});
  
    const users = await User.bulkCreate(userData);

  
    process.exit(0);
  };


  seedDatabase()