// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')


// MODEL
class Event extends Model{}
Event.init({
    event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    Date: {
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
    tableName: 'events',
    timestamps: false
}) 



// EXPORT
module.exports = Event