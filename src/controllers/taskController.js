const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM todolist", (err, tasks) => {
            if (err) {
                res.json(err)
            }
            console.log(tasks);
            res.render("tasks", {
                data: tasks
            })
        })
    })
}

module.exports = controller;