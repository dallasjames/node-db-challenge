exports.seed = async (knex) => {
  await knex("tasks").insert([
  { name: "code alot", project_id: 1 },
  { name: "cry", project_id: 1 }
])
}