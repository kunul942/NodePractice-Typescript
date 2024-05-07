import { Router } from 'express'
import { createCatedratico, deleteCatedratico, getCatedratico, getCatedraticoById, updateCatedratico } from '../controllers/catedratico'

const router = Router()


router.get('/', getCatedratico)
router.get('/:id', getCatedraticoById)
router.post('/', createCatedratico)
router.put('/:id', updateCatedratico)
router.delete('/:id', deleteCatedratico)

export default router