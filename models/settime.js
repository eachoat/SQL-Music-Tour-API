'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
 
 
  class SetTime  extends Model {
    static associate({ Band }) {
      
      SetTime.belongsTo(Band, {
        foreignKey: "set_time_id",
        as: "band"
      })
      SetTime.belongsTo(Event, {
        foreignKey: "set_time_id",
        as: "event"
      })
    }
  
  
}
  SetTime.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, { 
    sequelize,
    modelName: 'SetTime',
  });
  return SetTime;
};