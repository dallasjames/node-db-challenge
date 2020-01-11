const db = require("../data/db-config")

function getProjects() {
    return db("projects")
}

function getTasks() {
    return db("projects")
        .join("tasks")
        .select("projects.id", "projects.names", "projects.description", "tasks.name")
}

function getResources() {
    return db("resources")
}

async function newProject(project) {
    const [id] = await db("projects").insert(project)
    return db("projects").where({ id }).first()
}

async function newResource(resource) {
    const [id] = await db("resources").insert(resource)
    return db("resources").where({ id }).first()
}

async function newTask(task) {
    const [id] = await db("tasks").insert(task)
    return db("tasks").where({ id }).first()
}

module.exports = {
    getProjects,
    getTasks,
    getResources,
    newProject,
    newResource,
    newTask
}