'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('berita', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      judul: {
        type: Sequelize.STRING,
      },
      gambar_cover: {
        type: Sequelize.STRING,
      },
      konten: {
        type: Sequelize.TEXT,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("berita");
  }
};