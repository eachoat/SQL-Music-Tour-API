'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

//Model

  class MeetGreet extends Model {
    static associate({ Band }) {
      // band
      MeetGreet.belongsTo(Band, {
        foreignKey: "meet_greet_id",
        as: "band"
      })
      MeetGreet.belongsTo(Event, {
        foreignKey: "meet_greet_id",
        as: "event"
      })
    }
  }
  
  MeetGreet.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, { 
    sequelize,
    modelName: 'MeetGreet',
  });
  
  return MeetGreet;
}
