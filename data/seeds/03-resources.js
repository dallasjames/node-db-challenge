exports.seed = async (knex) => {
  await knex("resources").insert([
    { name: "computer", description: "a device", project_id: 1 },
    { name: "screens", description: "a lot", project_id: 1 }
  ])
}