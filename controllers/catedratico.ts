import { Request, Response } from 'express'
import Catedratico from '../model/Catedratico'


export const getCatedratico = async(req: Request, res:Response) =>{
    
    const catedratico = await Catedratico.findAll()
    res.status(200).json({ msg:'ok', catedratico })

}
export const getCatedraticoById = async(req: Request, res:Response) =>{

    const { id } = req.params

    const catedraticoById = await Catedratico.findByPk( id )
    if( !catedraticoById ){
        return res.status(400).json({ msg: 'catedratico no existe' })
    }

    res.status(200).json({ 
        msg: 'ok',
        catedraticoById 
    })

}
export const createCatedratico = async(req: Request, res:Response) =>{    

    const { nombre } = req.body as { nombre:string }

    try {
        if( !nombre ){
            return res.status(400).json({ msg: 'ingrese un dato por favor' })
        }

        const catedratico = await Catedratico.create({ nombre })

        res.status(200).json({
            msg: 'ok',
            catedratico
        })

    } catch (error) {
        console.log(error,'aca hay un error')
        res.status(500).json({msg: 'Hay un error'})    
    }

}
export const updateCatedratico = async(req: Request, res:Response) =>{

    const { id } = req.params
    const { nombre } = req.body as { nombre:string }

    try {
        const catedratico = await Catedratico.findByPk(id)
        if( !catedratico ){
            return res.status(400).json({ msg: 'No existe catedratico con ese ID' })
        }

        await catedratico?.update({ nombre })

        res.status(200).json({ 
            msg: 'ok',
            catedratico 
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Algo salio mal' })
    }

    

}
export const deleteCatedratico = async(req: Request, res:Response) =>{

    const { id } = req.params

    try {
        const catedratico = await Catedratico.findByPk( id );    
        if( !catedratico ){
            return res.status(400).json({ msg: 'no existe ese ID' })
        }
    
        await catedratico?.destroy()
    
        res.json({ 
            msg: `Catedratico con ID ${ id } se ha eliminado correctamente` 
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Algo salio mal' })
    }

}