const express =  require('express')

const db = require("./api-model.js")

const router = express.Router()

router.get("/", (req, res) => {
    db.getProjects()
    .then(projects => {
        for (let i = 0; i < projects.length; i++) {
            const element = projects[i];
            if (element.completed === 0) {
                element.completed = false
            }
        }
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
        for (let i = 0; i < tasks.length; i++) {
            const element = tasks[i];
            if (element.completed === 0) {
                element.completed = false
            }
        }
        res.json(tasks)
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

//this doesn't work but wanted to mess with it
router.get("/:id", (req, res) => {
    db.getById(req.params.id)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ error: "not working 2" })
            console.log(err)
        })
})
//this doesn't work but wanted to mess with it

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

router.put("/:id", (req, res) => {
    const project = req.body
    db.editProject(project, req.params.id)
    res.json(project)
})

router.put("/tasks/:id", (req, res) => {
    const task = req.body
    db.editTask(task, req.params.id)
    res.json(task)
})

router.put("/resources/:id", (req, res) => {
    const resource = req.body
    db.editTask(resource, req.params.id)
    .then(resource => {
        res.json(resource)
    })
    .catch(err => {
        res.status(500).json({ error: "not working 2" })
        console.log(err)
    })
    res.json(resource)
})

router.delete("/:id", (req, res) => {
    db.delProjects(req.params.id)
    res.json(req.params.id).end()
})

router.delete("/tasks/:id", (req, res) => {
    db.delTasks(req.params.id)
    res.json(req.params.id).end()
})

router.delete("/resources/:id", (req, res) => {
    db.delResources(req.params.id)
    res.json(req.params.id).end()
})

module.exports = router