import { DataTypes } from 'sequelize'
import db from '../database/connectionDB'

const Grado = db.define('Grado',{

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }, 
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }
}
)


export default Grado