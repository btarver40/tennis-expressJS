'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tennis = sequelize.define('Tennis', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Tennis.associate = function(models) {
    // associations can be defined here
  };
  return Tennis;
};