import { Request, Response } from 'express'


export const getGrado = (req: Request, res: Response) =>{

    res.json({ msg: 'Everything ok' })

}

export const getGradoById = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const createGrado = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const updateGrado = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}
export const deleteGrado = (req: Request, res:Response) =>{

    res.json({ 
        msg: 'Hola soy la respuesta' 
    })

}