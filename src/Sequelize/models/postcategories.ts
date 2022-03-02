'use strict';
import {
  Model
} from 'sequelize'
import { PostCategoriesAttributes } from '../../interfaces/'

module.exports = (sequelize, DataTypes) => {
  class PostCategories extends Model<PostCategoriesAttributes>
  implements PostCategoriesAttributes {
    CategoryId: number
    PostId: number
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostCategories.init({
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    PostId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Posts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'PostCategories',
  });
  return PostCategories;
};