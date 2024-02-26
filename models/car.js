const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Car extends Model {};

Car.init(
    {
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'event'
    }
);

module.exports = Car;