'use strict';
const {
  Model
} = require('sequelize');

const Stage = require ('./stage')
const Band = require ('./band')

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent }) {
        // stages
        Event.belongsToMany(Stage, {
            foreignKey: "event_id",
            as: "stage", 
            through: StageEvent
        })
        Event.hasMany(MeetGreet, {
          foreignKey: "event_id",
          as: "meet_greets"
        })
        Event.hasMany(SetTime, {
          foreignKey: "event_id",
          as: "set_time"
        })
    }


}
  Event.init({
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
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
    modelName: 'Event',
  });
  return Event;
};