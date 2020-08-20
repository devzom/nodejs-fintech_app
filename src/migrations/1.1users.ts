import * as Sequelize from 'Sequelize';

const tableName = 'Users';

export async function up(params:any) {
    const queryInterface  = params.getQueryInterface() as Sequelize.QueryInterface;
    queryInterface.createTable(tableName,{
        id:{
            type: Sequelize.INTEGER,
            allowNull:false,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
        },
        Username:{
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        Email:{
            type: Sequelize.CHAR(50),
            allowNull: false,
        },
        Password:{
            type: Sequelize.CHAR(200),
            allowNull: false,
        }
    })
}

export async function down(params:any) {
    const queryInterface  = params.getQueryInterface() as Sequelize.QueryInterface;
    queryInterface.dropTable(tableName);
}