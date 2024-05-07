import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';

export interface CustomRequest extends Request {
    nombre: string;
}


export const validateJWT = ( req: Request, res:Response,next:NextFunction ) =>{

    //*x-token headers
    const token = req.header('x-token');
    
    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }
    
    //*validate token
    try {

        const { nombre } = jwt.verify( token, process.env.SECRET_JWT_SEED || 'Esto_es_Una_Palabra_Secreta' ) as { nombre: string };
        (req as CustomRequest).nombre = nombre;




    } catch (error) {
        console.log(error)
        return res.status(401).json({
            ok:false,
            msg:'token is not valid'
        })
    }

    next();

}