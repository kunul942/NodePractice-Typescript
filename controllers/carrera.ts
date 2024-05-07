import { Request, Response } from 'express'


export const getCarrera = (req: Request, res: Response) =>{

    res.json({ msg: 'Everything ok' })

}

export const getCarreraById = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const createCarrera = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const updateCarrera = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const deleteCarrera = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}