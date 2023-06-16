import { Router } from "express";
import { login } from "../controllers/login.js";
import { tpss } from "../controllers/dataInflux.js";

const router = Router();

router.post("/login", login);
router.post("/influxQ", tpss);

export default router;
