'use strict';
module.exports = (sequelize, DataTypes) => {
  const HR = sequelize.define('HR', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    status: DataTypes.STRING,
    otp: DataTypes.STRING
  }, {});
  HR.associate = function(models) {
    // associations can be defined here
  };
  return HR;
};