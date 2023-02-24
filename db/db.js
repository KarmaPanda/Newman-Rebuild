const { Sequelize } = require("sequelize");

let sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: process.env.NODE_ENV === "development",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

/*if (process.env.NODE_ENV !== 'development') {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        logging: false,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    })
} else {
    if (process.env.DB_CONNECTIONSTRING !== undefined) {
        console.log("Using DB_CONNECTIONSTRING")
        sequelize = new Sequelize(process.env.DB_CONNECTIONSTRING, {
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        })
    } else {
        console.log("USING DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST")
        sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    rejectUnauthorized: false
                }
            }
        });
    }
}*/

module.exports = { sequelize };
