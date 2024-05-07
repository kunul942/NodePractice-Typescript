import { DataTypes } from 'sequelize'
import db from '../database/connectionDB'
import Carrera from './Carrera'
import Grado from './Grado'


const Estudiante = db.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


Carrera.hasMany( Estudiante, {
    as:'Carrera',
    foreignKey: 'idCarrera'
})

Estudiante.belongsTo( Carrera,{
    as:'Carrera',
    foreignKey: 'idCarrera'
})


Grado.hasMany(Estudiante,{
    as:'Grado',
    foreignKey:'idGrado'
})

Estudiante.belongsTo(Grado, {
    as: 'Grado',
    foreignKey: 'idGrado'
})


export default Estudiante