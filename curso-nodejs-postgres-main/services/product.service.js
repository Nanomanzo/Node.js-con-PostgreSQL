const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require("./../libs/sequelize")

class ProductsService {

  constructor(){
    this.products = [];
    //this.generate();
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    const rta = await models.Product.findAll();
    return rta
  }

  async findOne(id) {
    const product = await models.Product.findOne({
      where: { id: id },
    });
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    await models.Product.destroy({
      where: { id: id },
    });
    return models.User
  }

}

module.exports = ProductsService;
