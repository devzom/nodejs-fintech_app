import * as Sequelize from 'Sequelize';

const tableName = 'Accounts';

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
        Type:{
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        Name:{
            type: Sequelize.CHAR(200),
            allowNull: false,
        },
        Balance:{
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        UserId:{
            type: Sequelize.INTEGER,
            references:{
                model: 'Users',
                key: 'id',
            }
        }
    })
}

export async function down(params:any) {
    const queryInterface  = params.getQueryInterface() as Sequelize.QueryInterface;
    queryInterface.dropTable(tableName);
}