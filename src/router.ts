import { Router } from "express";
import { getResults } from "./controllers/getResults";
import { createResult } from "./controllers/createResult";
import { updateResult } from "./controllers/updateResult";
import { deleteResult } from "./controllers/deleteResult";
const router = Router();

router.get("/results", getResults);
router.post("/results", createResult);
router.patch("/results", updateResult);
router.delete("/results", deleteResult);

export default router;
