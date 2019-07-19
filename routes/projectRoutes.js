import express from 'express';
import { getProject, insert } from '../helpers/projectModel';

const projectRoutes = express.Router();

projectRoutes.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const project = await getProject(id);
  
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' });
      }
    } catch (err) {
        console.log(err);
      res.status(500).json({ message: 'Failed to get projects' });
    }
  });

  projectRoutes.post("/",  (req, res) => {
    const { name, description, completed } = req.body;
    const project = {
      name,
      description,
      completed
    };
    insert(project)
      .then(data => {
        return res
          .status(201)
          .json({ message: "project  created successfully", data: project });
      })
      .catch(error => {
        return res
          .status(500)
          .json({ error: "The users information could not be created." });
      });
  });

  export default projectRoutes;