import {Router} from "express";

const router = Router();

router.post("/addSchool", addSchool);
router.get("/listSchools", schoolsList);

export default router;