import { Sequelize } from 'sequelize-typescript';


export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: "postgres",
                host: 'localhost',
                port: 8700,
                username: 'root',
                password: 'root',
                database: 'bankappnode'
            });
            sequelize.addModels([]);
            return sequelize;
        }
    }
]