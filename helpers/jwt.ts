import jwt from 'jsonwebtoken'


export const generateJWT = ( nombre:string ) =>{

    return new Promise(( resolve, reject )=>{

        const payload = { nombre };
        jwt.sign( payload, process.env.SECRET_JWT_SEED || 'Esto_es_Una_Palabra_Secreta',{
            expiresIn: '2h'
            
        }, ( err, token )=>{
            if( err ){
                console.log(err)
                reject('No se pudo generar el token')
            }

            resolve( token )
        })

    })    



}