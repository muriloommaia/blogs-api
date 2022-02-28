'use strict';
import {
  Model
} from 'sequelize'
import { UserAttributes } from '../../interfaces'


module.exports = (sequelize, DataTypes) => {
  class Users extends Model<UserAttributes>
  implements UserAttributes {
    id!: number;
    email!: string;
    userName!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.Password, {
        foreignKey: 'userId'
      })
      Users.hasMany(models.Posts, {
        foreignKey: 'userId' as 'UserPosts'
      })
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users'
  });
  return Users;
};