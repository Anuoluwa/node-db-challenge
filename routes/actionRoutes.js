import express from 'express';
import { add, get } from '../helpers/actionModel';

const actionRoutes = express.Router();

actionRoutes.post('/:id', async (req, res) => {
    const project = await get(req.params.id);
    const { description, notes, completed } = req.body;
    const action = {
        project_id: req.params.id,
        description,
        notes,
        completed
    }
    try { 
        if(project) {
            if(action) {
                const newAction = await add(action);
                res.status(201).json({ message: "new action is posted successfully", data: action });
            }
        }  else {
             res.status(404).json({ message: `The project with the specified ID ${req.params.id} does not exist.` });
        }
    } catch(error) {
        res.status(500).json({ error: "There was an error while saving the action to the database" });
    }
  });


export default actionRoutes;