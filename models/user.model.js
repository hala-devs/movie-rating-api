import { DataTypes } from 'sequelize'
import sequelize from '../utils/db.js'


const User = sequelize.define('users' , {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.STRING,
        defaultValue: false
    }
});


User.associate = (models) => {
    User.hasMany(models.Review, {
        foreignKey: 'userId',
        as: 'reviews'
    });
    User.hasMany(models.WatchList , {
        foreignKey: 'userId',
        as: 'watchlists'
    })
}


export {User};