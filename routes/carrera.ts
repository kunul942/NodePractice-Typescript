import { Router } from 'express'
import { getCarrera, getCarreraById, createCarrera, updateCarrera, deleteCarrera } from '../controllers/carrera'

const router = Router()


router.get('/', getCarrera)
router.get('/:id', getCarreraById)
router.post('/', createCarrera)
router.put('/:id', updateCarrera)
router.delete('/:id', deleteCarrera)



export default router