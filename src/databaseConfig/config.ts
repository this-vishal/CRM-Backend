import { Sequelize } from "sequelize";

// Import database properties from environment variables
const database = process.env.DB_NAME; // Database name
const password = process.env.DB_PASSWORD; // Database password
const username = process.env.DB_USERNAME; // Database username
const db_host = process.env.DB_HOST; // Database host
const db_port = Number(process.env.DB_PORT); // Database port

// Create the Sequelize database connection instance
const sequelize = new Sequelize(database || '', password || '', username || '', {
    host: db_host, // Database host
    port: db_port, // Database port
    dialect: 'postgres', // PostgreSQL dialect
    sync: {
        alter: true, // Automatically alter tables to fit models
       
    },
    logging: false // Enable logging
});

export default sequelize;
