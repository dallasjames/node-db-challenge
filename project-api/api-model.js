const db = require("../data/db-config")

function getProjects() {
    return db("projects")
}

function getTasks() {
    return db("projects")
        .join("tasks")
        .select("projects.id", "projects.name", "projects.description", "tasks.name", "tasks.notes", "tasks.completed")
}

function getResources() {
    return db("resources")
}

//this doesn't work but wanted to mess with it
function getById(id) {
    return db("projects as p")
        .join("resources as r", "p.id", "=", "r.project_id")
        .join("tasks as t", "p.id", "=", "t.project_id")
        .where("p.id", id)
        .select("p.id", "p.names", "p.description", "p.done", "t.id", "t.name", "t.done", "r.id", "r.name", "r.description")
}
//this doesn't work but wanted to mess with it

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

async function editProject(project, id) {
    await db("projects").update(project).where({ id })
    return db("projects").where({ id }).first()
}

async function editTask(task, id) {
    await db("tasks").update(task).where({ id })
    return db("tasks").where({ id }).first()
}

async function editResourse(resource, id) {
    await db("resources").update(resource).where({ id })
    return db("resources").where({ id }).first()
}

async function delProjects(id) {
    await db("projects").where("id", id).del()
    return id
}

async function delTasks(id) {
    await db("tasks").where("id", id).del()
    return id
}

async function delResources(id) {
    await db("resources").where("id", id).del()
    return id
}

module.exports = {
    getProjects,
    getTasks,
    getResources,
    newProject,
    newResource,
    newTask,
    getById,
    editProject,
    editResourse,
    editTask,
    delProjects,
    delResources,
    delTasks
}