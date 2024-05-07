import { Request, Response } from 'express'
import Curso from '../model/Curso'


export const getCurso = (req: Request, res:Response) =>{
    
    const curso = new Curso()

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const getCursoById = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const createCurso = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const updateCurso = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const deleteCurso = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}