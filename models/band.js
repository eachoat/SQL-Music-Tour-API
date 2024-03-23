// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
module.exports= (Sequelize, DataTypes)


// MODEL
class Band extends Model {
    static associate({ MeetGreet }) {
      // meet and greets 
      Band.hasMany(MeetGreet, {
        foreignKey: "band_id",
        as: "meet_greets"
      })
      Band.hasMany(SetTime, {
        foreignKey: "band_id",
        as: "set_time"
      })
  }
  
}
Band.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
}) 



// EXPORT
module.exports = Band
