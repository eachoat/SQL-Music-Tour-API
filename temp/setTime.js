// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')


// MODEL
class SetTime extends Model{}
SetTime.init({
    set_time_id: { 
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

    band_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Bands', 
          key: 'band_id'
        }
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Events', 
          key: 'event_id'
        }
    },
    stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Stage',
          key: 'stage_id' 
        }
      }
}, {
    sequelize,
    modelName: 'SetTime',
    tableName: 'set_times',
    timestamps: false
}) 



// EXPORT
module.exports = SetTime