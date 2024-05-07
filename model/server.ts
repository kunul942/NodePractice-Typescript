import express, { Application } from "express";
import cors from 'cors'

import db from "../database/connectionDB";

import estudianteRoute from '../routes/estudiante'
import catedraticoRoute from '../routes/catedratico'
import cursoRoute from '../routes/curso'
import gradoRoute from '../routes/grado'
import carreraRoute from '../routes/carrera'


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        routeEstudiante:'/api/estudiante',
        routeCatedratico: '/api/catedratico',
        routeCurso: '/api/curso',
        routeGrado: '/api/grado',
        routeCarrera: '/api/carrera',
    };

    constructor(){
        this.app = express()
        this.port = process.env.PORT || ''

        //*Methods
        this.connectionDB()
        this.middlewares()
        this.routes()
    }


    async connectionDB(){
        try {
            await db.authenticate()
            console.log('Connection has been established succesfully')
        } catch (error) {
            console.log('Unable to connec to the database:', error)
        }
    }


    routes(){
        this.app.use( this.apiPaths.routeEstudiante, estudianteRoute  )
        this.app.use( this.apiPaths.routeCatedratico, catedraticoRoute  )
        this.app.use( this.apiPaths.routeCurso, cursoRoute  )
        this.app.use( this.apiPaths.routeGrado, gradoRoute  )
        this.app.use( this.apiPaths.routeCarrera, carreraRoute  )
    }

    middlewares(){
        this.app.use( cors() )
        this.app.use( express.json() )
        this.app.use( express.static('public') )
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log('Server running on port:', this.port)
        })
    }


}


export default Server;