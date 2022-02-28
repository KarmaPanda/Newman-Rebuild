const { Sequelize } = require("sequelize");

let sequelize

if (process.env.NODE_ENV !== 'development') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        logging: false,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    })
} else {
    if (process.env.DB_CONNECTIONSTRING !== null) {
        sequelize = new Sequelize(process.env.DB_CONNECTIONSTRING, {
            logging: false,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        })
    } else {
        sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            logging: false,
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        });
    }
}

module.exports = { sequelize }