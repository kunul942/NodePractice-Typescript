import { Router } from 'express'
import { 
    createCurso, 
    deleteCurso, 
    getCurso, 
    getCursoById, 
    updateCurso 
} from '../controllers/curso'

const router = Router()


router.get('/', getCurso)
router.get('/:id', getCursoById)
router.post('/', createCurso)
router.put('/:id', updateCurso)
router.delete('/:id', deleteCurso)



export default router