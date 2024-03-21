// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')


// MODEL
class StageEvent extends Model{}
StageEvent.init({
    stage_event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    stage_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Stage',
          key: 'stage_id' 
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
}, {
    sequelize,
    modelName: 'StageEvent',
    tableName: 'stage_events',
    timestamps: false
}) 



// EXPORT
module.exports = StageEvent