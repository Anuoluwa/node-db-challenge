import express from 'express';
import projectRoutes from './projectRoutes';
import actionRoutes from './actionRoutes';

const route = express.Router();

route.use('/projects', projectRoutes);
route.use('/actions', actionRoutes);

export default route;