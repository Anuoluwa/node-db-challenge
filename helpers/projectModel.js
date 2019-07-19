import db from "../utils/dbConfig";

export function getId(id) {
    return db("projects")
      .where({ id: Number(id) })
      .first();
  }

  export function getProject(id) {
    return db('actions')
      .join('projects', 'projects.id', 'project_id')
      .select('actions.*', 'projects.*')
      .where('project_id', id);
  }

export function insert(project) {
    return db("projects")
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  }
