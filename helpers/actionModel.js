import db from "../utils/dbConfig";
export function add(action) {
  return db("actions")
    .insert(action)
    .then(ids => ({ id: ids[0] }));
}

export function get(id) {
    return db("projects")
      .where({ id: Number(id) })
      .first();
}
