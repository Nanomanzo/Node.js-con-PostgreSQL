'use strict';

const { ProductSchema, PRODUCT_TABLE} = require("./../models/productModel")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)

  },

  async down (queryInterface) {

    await queryInterface.drop(PRODUCT_TABLE)

  }
};
