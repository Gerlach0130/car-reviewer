const sequelize = require('../config/connection');
const { User, Event } = require('../models');
const userData = require('./userData.json');
const carData = require('./carData.json'); 

const seedDatabase = async () => {
    try { await sequelize.sync({ force: true });
        const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
        });
        const cars = await car.bulkCreate(carData);
        for (const event of eventData) {
            await Event.create({
                ...event,
                user_id: users[Math.floor(Math.random() * users.length)].id,
                game_id: cars[Math.floor(Math.random() * cars.length)].id,
            });
        }
        console.log('Database seeded successfully.');
    } catch (err) {
        console.error('Error seeding database: ', err);
    } finally {
        await sequelize.close();
        process.exit(0);
    }
};

seedDatabase();