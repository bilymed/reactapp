import { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import { handleInputErrors } from './middlewares/validator';
import { createUnit, deleteUnit, getAllUnits, getOneUnit, getUnitsByCity, getUnitsByCityAndType, getUnitsByType, getUnitsByUser, updateUnit } from './handlers/unit';
import { getCities } from './handlers/cities';
import { getAllProducts, getProductsByCategoryId } from './handlers/products';
import { getAllCategories, getOneCategory } from './handlers/category';

const router = Router();

/**
 * Categories routes
 */
router.get('/categories', getAllCategories);

router.get('/categories/:id', getOneCategory);

/**
 * Products routes
 */
router.get('/products', getAllProducts);

router.get('/products/:id', getProductsByCategoryId);

// /**
//  * Cities routes
//  */
// router.get('/cities', getCities);

// /**
//  * Units routes
//  */

// router.get('/units', getAllUnits)

// router.get('/units/:city', getUnitsByCity)

// router.get('/units/:unittype', getUnitsByType)

// router.get('/units/:unittype/:city', getUnitsByCityAndType)

// router.get('/unit', getUnitsByUser)

// router.get('/unit/:id', getOneUnit)

// router.post('/unit', body('address').isString(), handleInputErrors, createUnit)

// router.put('/unit/:id', body('address').isString(), handleInputErrors, updateUnit, (req: Request, res: Response) => { })

// router.delete('/unit/:id', deleteUnit)

export default router;