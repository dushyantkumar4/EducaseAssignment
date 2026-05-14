import { Router } from "express";
import { addSchool, schoolsList } from "../controllers/schoolController.js";
import validate from "../middleware/validate.js";
import { addSchoolSchema } from "../validations/schoolValidation.js";

const router = Router();

router.post("/addSchool", validate(addSchoolSchema), addSchool);
router.get("/listSchools", schoolsList);

export default router;
