const db = require("../data/db-config")

function getProjects() {
    return db("projects")
}

function getTasks() {
    return db("tasks")
        .join("projects")        
        .select("projects.name", "projects.description", "project.done", "tasks.name", "tasks.done")
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

