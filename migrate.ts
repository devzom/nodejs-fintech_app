import { Sequelize } from 'sequelize-typescript';
import Umzug = require('umzug');

const sequelize = new Sequelize({
    dialect: "postgres",
    host: 'localhost',
    port: 8700,
    username: 'postgres',
    password: 'root',
    database: 'bankappnode'
});

const umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: { sequelize },
    logging: false,
    migrations: {
        params: [
            sequelize,
            sequelize.constructor,
        ],
        path: './src/migrations',
        pattern: /\.ts$/
    }
});

const task = (process.argv[2] || '').trim();

switch (task) {
    case 'up':
        umzug.up()
            .then((result) => {
                console.log('Migations is done successfuly!', result);
                process.exit(0);
            })
        break;
        case 'down':
            umzug.down()
            .then((result) => {
                console.log('Migations failed...!', result);
                process.exit(0);
            })
        break;

        default:
            break;
}