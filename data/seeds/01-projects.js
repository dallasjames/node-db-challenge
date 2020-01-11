exports.seed = async (knex) => {
  await knex("projects").insert([
    { names: "do this project", description: "not needed" }
  ])
}