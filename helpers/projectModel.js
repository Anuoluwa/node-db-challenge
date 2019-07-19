import db from "../utils/dbConfig";

export function getId(id) {
    return db("projects")
      .where({ id: Number(id) })
      .first();
  }

export function getProject(id) {
  return db("projects")
    .join("actions", "project_id", "projects.id")
    .select("projects.*", [
      "actions.description",
      "actions.notes",
      "actions.completed"
    ])
    .where({ project_id: id });
}

export function insert(project) {
    return db("projects")
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  }
