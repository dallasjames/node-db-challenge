exports.seed = async (knex) => {
  await knex("projects").insert([
    { name: "do this project", description: "not needed" }
  ])
}