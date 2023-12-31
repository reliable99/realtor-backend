import express from "express";
import { createResidency } from "../controllers/residCntrl.js";
import { getAllResidencies, getResidency } from "../controllers/residCntrl.js";
const router = express.Router()

router.post("/create", createResidency)
router.get("/allresd", getAllResidencies)
router.get("/:id", getResidency)


export { router as residencyRoute };