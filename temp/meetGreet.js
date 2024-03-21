// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')


// MODEL
class MeetGreet extends Model{}
MeetGreet.init({
    meet_greet_id: { 
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
},
{
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
}) 



// EXPORT
module.exports = MeetGreet