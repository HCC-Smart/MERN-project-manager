import express from "express";
import { deleteProject, getAllprojects, getProject, registerProject, updateProject } from "../Controllers/projects.js";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("hannaaa");
});

router.post("/register-project", registerProject);
router.post("/update-project", updateProject);
router.delete("/delete-project/:_id", deleteProject);
router.get("/get-projects/:_id", getProject);
router.get("/get-all-project", getAllprojects);

export default router;