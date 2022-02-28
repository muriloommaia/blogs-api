'use strict';
import {
  Model
} from 'sequelize'
import { CategoryAttributes } from '../../interfaces'
module.exports = (sequelize, DataTypes) => {
  class Category extends Model<CategoryAttributes>
  implements CategoryAttributes {
    id!: number;
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Posts, {
        through: 'PostCategories'
      })
    }
  }
  Category.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories'
  });
  return Category;
};