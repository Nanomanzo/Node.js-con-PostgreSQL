const boom = require('@hapi/boom');
const pool = require("../libs/postgres-pool")

const { models } = require("./../libs/sequelize")

class UserService {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) => console.error(err))
  }

  async create(data) {
    return data;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta
  }

  async findOne(id) {
    const user = await models.User.findOne({
      where: { id: id },
    });
    return user;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    await models.User.destroy({
      where: { id: id },
    });
    return models.User
  }
}

module.exports = UserService;
