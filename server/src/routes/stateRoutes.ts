import express from 'express';
import { createState, deleteState, readState, updateState } from '../controllers/stateController';
import { authorizeRoles, isAuthenticated } from '../middleware/auth';
import { validateState } from '../middleware/validate';

const router = express.Router();

router.post('/', isAuthenticated, authorizeRoles('admin') ,validateState, createState);

router.patch('/update',isAuthenticated,authorizeRoles('admin'),updateState);

router.delete('/delete',isAuthenticated,authorizeRoles('admin'),deleteState);

router.get('/read',isAuthenticated,authorizeRoles('user','admin'),readState);

export default router;
