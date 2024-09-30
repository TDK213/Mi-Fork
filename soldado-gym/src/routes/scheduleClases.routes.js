const { Router } = require("express");
const pool = require("../db");

//import de los controladores

const {  getAll, getbyid, create, update, deletebyid} = require("../controllers/scheduleClases.controllers");

const router = Router();

router.get("/schedule", getAll);

router.get("/schedule/:id", getbyid);

router.post("/createSchedule", create);

router.put("/updateSchedule", update);

router.delete("/deleteSchedule", deletebyid);

module.exports = router;
