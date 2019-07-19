import express from 'express';
import projectRoutes from './projectRoutes';

const route = express.Router();


route.use('/projects', projectRoutes);

export default route;