const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/database.db'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('INFO - Database connected.')
    })
    .catch(err => {
        console.log('ERROR - Unable to connect to the database:', err)
    });

const User = sequelize.define('users',{
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.DataTypes.STRING
        },
        lname: {
            type: Sequelize.DataTypes.STRING
        },
        bdate: {
            type: Sequelize.DataTypes.DATE
        },
        sex: {
            type: Sequelize.DataTypes.STRING
        },
        job: {
            type: Sequelize.DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {timestamps: false}
);

User.sync().then(()=>console.log("Database synchronized"));

console.log(User === sequelize.models.users);

module.exports = {User, sequelize}