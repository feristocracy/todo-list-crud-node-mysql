const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM todolist WHERE completed = 0", (err, tasks) => {
            if (err) {
                res.json(err)
            }
            res.render("tasks", {
                data: tasks
            })
        })
    })
}

controller.completed_tasks = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM todolist WHERE completed = 1 ORDER BY date_created DESC", (err, completed_tasks) => {
            if (err) {
                res.json(err)
            }
            res.render("completed_tasks", {
                data: completed_tasks
            })
        })
    })
}


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO todolist set ?', data, (err, task) => {
            console.log(task);
            res.redirect("/")
        })
    })
}

controller.edit = (req, res) => {
    const {id} = req.params
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM todolist WHERE id = ?", [id], (err, task) => {
            res.render("task_edit", {
                data: task[0]
            })
        })
    })
}

controller.update = (req, res) => {
    const {id} = req.params
    const newTask = req.body
    req.getConnection((err, conn) => {
        conn.query("UPDATE todolist set ? WHERE id = ?", [newTask, id], (err, rows) => {
            res.redirect("/")
        })
    })
}

controller.done = (req, res) => {
    const {id} = req.params

    req.getConnection((err, conn) => {
        conn.query("UPDATE todolist set completed = 1 WHERE id = ?", [id], (err, rows) => {
            res.redirect("/")
        })
    })
}
controller.undone = (req, res) => {
    const {id} = req.params

    req.getConnection((err, conn) => {
        conn.query("UPDATE todolist set completed = 0 WHERE id = ?", [id], (err, rows) => {
            res.redirect("/completed_tasks")
        })
    })
}



module.exports = controller;