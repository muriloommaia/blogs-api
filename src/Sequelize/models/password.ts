'use strict';
import {
  Model
} from 'sequelize'
import { PasswordAttributes } from '../../interfaces'
module.exports = (sequelize, DataTypes) => {
  class Password extends Model<PasswordAttributes>
  implements PasswordAttributes {
    userId!: number
    password!: string
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Password.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Password',
  });
  return Password;
};