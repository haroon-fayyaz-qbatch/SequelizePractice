"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          validEmail(value) {
            let re = new RegExp("^[A-Za-z0-9._%+-]+@qbatch.com$");
            if (!re.test(value)) {
              throw new Error("Email address should be of domain qbatch.com");
            }
          },
        },
      },
      age: { type: DataTypes.INTEGER, validate: { min: 18 } },
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
      hooks: {
        afterValidate: (user, options) => {
          console.log(user);
        },
      },
    }
  );
  return User;
};
