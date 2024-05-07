import { Sequelize } from 'sequelize'

const db = new Sequelize('nodePractice','demo','1234',{
    // host:'localhost',
    dialect:'mssql',
    logging: false
})

db.sync()

export default db