const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require("./../libs/sequelize")

class ProductsService {

  constructor(){
    this.products = [];
    //this.generate();
  }

  async create(data) {
    const newProduct = await models.Product.create(data)
    return newProduct;
  }

  async find() {
    const rta = await models.Product.findAll();
    return rta
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound("usuario no encontrado")
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes)
    return rta
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return {product}
  }

}

module.exports = ProductsService;
