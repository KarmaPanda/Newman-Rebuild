const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

let Donations = sequelize.define('Donations', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    classYear: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT
    },
    referral: {
        type: Sequelize.STRING
    },
    campaign: {
        type: Sequelize.STRING
    },
    payment_method: {
        type: Sequelize.STRING
    },
    payment_email: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.STRING
    },
    transaction_id: {
        type: Sequelize.STRING
    }
})

module.exports = Donations