'use strict';

import {
  Model
} from 'sequelize'
import { PostAttributes } from '../../interfaces'
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model<PostAttributes> 
  implements PostAttributes {
    idUser: number
    id!: number;
    title!: string;
    book!: string;
    content!: string;
    userId!: number;
    versicle!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts.belongsToMany(models.Category, {
        through: 'PostCategories'
      })
      Posts.belongsTo(models.User, 
        {
          foreignKey: 'userId',
          as: 'user'
        })
    }
  }
  Posts.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    versicle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Posts',
    tableName: 'Posts'
  });
  return Posts;
};