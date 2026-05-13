import { Router } from "express";
import { addSchool, schoolsList } from "../controllers/schoolController";
import validate from "../middleware/validate";
import { addSchoolSchema } from "../validations/schoolValidation";

const router = Router();

router.post("/addSchool", validate(addSchoolSchema), addSchool);
router.get("/listSchools", schoolsList);

export default router;
