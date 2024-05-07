import { DataTypes } from 'sequelize'
import db from '../database/connectionDB'

const Carrera = db.define('Carrera',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    } 
})


export default Carrera