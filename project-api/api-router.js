const express =  require('express')

const db = require("./api-model.js")

const router = express.Router()

router.get("/", (req, res) => {
    db.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ error: "notworking" })
        console.log(err)
    })
})

router.get("/tasks", (req,res) => {
    db.getTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ error: "not working 2" })
        console.log(err)
    })
})

router.get("/resources", (req, res) => {
    db.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        res.status(500).json({ error: "not working 2" })
        console.log(err)
    })
})

router.post("/", (req, res) => {
    const project = req.body
    db.newProject(project)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ error: "not working 2" })
        console.log(err)
    })
})

router.post("/resource", (req, res) => {
    const resource = req.body
    db.newResource(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        res.status(500).json({ error: "not working 2" })
        console.log(err)
    })
})

router.post("/task", (req, res) => {
    const task = req.body
    db.newTask(task)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        res.status(500).json({ error: "not working 2" })
        console.log(err)
    })
})


module.exports = router