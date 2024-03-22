const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    YearOfPublication: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Editorial: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Language: {
        type: DataTypes.STRING,
        allowNull: false,
    }

  },
  { timestamps: false });
};