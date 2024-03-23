'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ Event, StageEvent }) {
      // events
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "event",
        through: StageEvent
      })
      Stage.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_time"
      })
    }
  
      // define association here
    
  }
  Stage.init({
    id: { 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true
  },
    stage_name:   {
      type: DataTypes.STRING, 
      allowNull: false 
},
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};