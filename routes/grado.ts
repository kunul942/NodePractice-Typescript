import { Router } from 'express'
import { getGrado, getGradoById, createGrado, updateGrado, deleteGrado } from '../controllers/grado'

const router = Router()


router.get('/', getGrado)
router.get('/:id', getGradoById)
router.post('/', createGrado)
router.put('/:id', updateGrado)
router.delete('/:id', deleteGrado)



export default router