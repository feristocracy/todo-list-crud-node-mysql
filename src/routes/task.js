const express = require("express")
const router = express.Router()

const taskController = require("../controllers/taskController")

router.get("/", taskController.list)
router.post("/add", taskController.save)
router.get("/done/:id", taskController.done)
router.get("/completed_tasks", taskController.completed_tasks)

router.get("/update/:id", taskController.edit)
router.post("/update/:id", taskController.update)

router.get("/undone/:id", taskController.undone)

module.exports = router