import {  DataTypes } from 'sequelize'
import db from '../database/connectionDB'


const Catedratico  = db.define('Catedratico',{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,    
        primaryKey: true, 
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    }

})


export default Catedratico;