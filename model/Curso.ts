import { DataTypes } from 'sequelize'
import db from '../database/connectionDB'

const Curso = db.define('Curso', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})




export default Curso