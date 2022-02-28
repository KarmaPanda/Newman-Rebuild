const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

let Streaming = sequelize.define('Streaming', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    livestream_id: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Streaming