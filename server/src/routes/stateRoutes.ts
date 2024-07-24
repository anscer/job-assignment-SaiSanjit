import express from 'express';
import { createState } from '../controllers/stateController';
import { isAuthenticated } from '../middleware/auth';
import { validateState } from '../middleware/validate';

const router = express.Router();

router.post('/', isAuthenticated, validateState, createState);

export default router;
