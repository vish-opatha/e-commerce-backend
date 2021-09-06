const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

// **********TO DO***********
// product_id

// Integer.

// References the Product model's id.

// tag_id

// Integer.

// References the Tag model's id.