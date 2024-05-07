import { Router } from 'express'
import { 
    createEstudiante, 
    deleteEstudiante, 
    getEstudiante, 
    getEstudianteById, 
    revalidateToken, 
    updateEstudiante 
} from '../controllers/estudiante'
import { validateJWT } from '../middleware/validate-jwt'

const router = Router()


router.get('/', getEstudiante)
router.get('/:id', getEstudianteById)
router.post('/', createEstudiante)
router.put('/:id', updateEstudiante)
router.delete('/:id', deleteEstudiante)

router.get('/auth/renew', validateJWT, revalidateToken)

export default router