import { Request, Response } from 'express'
import Estudiante from '../model/Estudiante'
import Carrera from '../model/Carrera'
import Grado from '../model/Grado'
import { generateJWT } from '../helpers/jwt'
import { CustomRequest } from '../middleware/validate-jwt'

export const getEstudiante = async(req: Request, res:Response) =>{

    try {
        // const [ results ] = await db.query('select * from Estudiantes')
        // res.json({ results })

        const estudiante = (await Estudiante.findAll({ include: [
            { as:'Carrera', model: Carrera },
            { as:'Grado', model: Grado }
        ] }))

        res.status(200).json({ estudiante })
        
    } catch (error) {
        console.log( error )
        res.status(500).json({ msg:'hay error' })
    }

}
export const getEstudianteById = (req: Request, res:Response) =>{

    res.json({ msg: 'Hola soy la respuesta' })

}
export const createEstudiante = async(req: Request, res:Response) =>{

    try {

        const { nombre, idCarrera, idGrado } = req.body as { nombre:string, idCarrera: number, idGrado: number }

        const estudiante = await Estudiante.create({ nombre,idCarrera, idGrado })

        const token = await generateJWT( nombre );

        res.status(200).json({ msg: 'ok', estudiante, token })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Hay error'})
    }


}
export const updateEstudiante = (req: Request, res:Response) =>{

    res.json({ msg: 'Hola soy la respuesta' })

}
export const deleteEstudiante = (req: Request, res:Response) =>{

    res.json({ msg: 'Hola soy la respuesta' })

}


export const revalidateToken = async ( req: Request, res: Response )=>{

    const nombre = (req as CustomRequest).nombre

    const token = await generateJWT( nombre );

    res.json({ ok:true, token })

}