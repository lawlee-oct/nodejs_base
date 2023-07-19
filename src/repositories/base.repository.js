const { Sequelize, Op } = require("sequelize");

class BaseRepository {
  constructor(model) {
    this.model = model;

    this.paginate = {
      default: process.env.PAGINATE_DEFAUL || 10,
      max: process.env.PAGINATE_MAX || 200,
    };
  }

  _getPaginate(limit) {
    if (Number.isInteger(limit)) {
      return parseInt(limit) > this.paginate.max
        ? this.paginate.max
        : parseInt(limit);
    }
    return paginate.default;
  }

  findById(id) {
    return this.model.findByPk(id);
  }

  findOne(condition) {
    return this.model.findOne({ where: condition });
  }

  findAll(options) {
    return this.model.findAll(options)
  }

  search({ filter, order, pageSize, pageNumber }) {
    const limit = this._getPaginate(pageSize);
    const offset = pageNumber ? parseInt(pageNumber - 1) * limit : 1;

    // { count, rows }
    return this.model.findAndCountAll({
      where: filter,
      order: order,
      offset: offset,
      limit: limit,
    });
  }

  deleteById(id) {
    return this.model.destroy({
      where: {
        id: id,
      },
    });
  }

  deleteByPresaleId(presaleId) {
    return this.model.destroy({
      where: {
        presale_id: presaleId,
      },
    });
  }

  findByIds(ids) {
    return this.model.findAll({
      where: {
        id: {
          [Sequelize.Op.in]: [ids],
        },
      },
    });
  }

  deleteByIds(ids) {
    return this.model.destroy({
      where: {
        id: {
          [Op.or]: ids,
        },
      },
    });
  }

  insert(data) {
    return this.model.create(data);
  }

  update(data, condition) {
    return this.model.update(data, condition);
  }

  bulkCreate(data) {
    return this.model.bulkCreate(data);
  }

  async updateOrCreate(where, newItem) {
    // First try to find the record
    const foundItem = await this.model.findOne({ where });
    if (!foundItem) {
      // Item not found, create a new one
      const item = await this.model.create(newItem);
      return { item, created: true };
    }
    // Found an item, update it
    const item = await this.model.update(newItem, { where });
    return { item, created: false };
  }

  findOrCreate(data, defaultValues = {}) {
    return this.model.findOrCreate({
      where: data,
      defaults: defaultValues,
    });
  }
}

module.exports = {
  BaseRepository,
};
