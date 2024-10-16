import { Router } from "express";
import { Signup, Signin } from "../controllers/AuthControllers";

const router = Router();

//@ts-ignore
router.post("/signup", Signup);
//@ts-ignore
router.post("/signin", Signin);

export default router;
