exports.seed = async (knex) => {
  await knex("tasks").insert([
  { name: "code alot", notes: "aaaaaaahhhhh", project_id: 1 },
  { name: "cry", notes: "asdfjlkhasdfg", project_id: 1 }
])
}