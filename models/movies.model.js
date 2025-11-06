import sequelize from "../utils/db.js";
import { DataTypes } from "sequelize";

const Movie = sequelize.define('movies' , {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});

Movie.associate = (models) => {
    Movie.hasMany(models.Review, {
        foreignKey: 'movieId',
        as: 'reviews'
    });

      Movie.hasMany(models.WatchList , {
        foreignKey: 'movieId',
        as: 'watchlists'
    })
}

export {Movie};