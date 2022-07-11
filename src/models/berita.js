"use strict"

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Berita extends Model {
        static associate(models) {}
    }

    Berita.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        judul: {
            type: DataTypes.STRING,
        },
        gambar_cover: {
            type: DataTypes.STRING,
            field: 'gambar_cover'
        },
        konten: {
            type: DataTypes.TEXT,
        },
    }, {
        sequelize,
        modelName: "Berita",
        tableName: "berita",
        underscored: true,
        underscoredAll: true,
        timestamps: false,
    });

    return Berita;
}