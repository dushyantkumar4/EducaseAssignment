import pool from "../config/db.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const addSchool =asyncHandler( async (req, res) => {
  
    res.status(201).json({
      success: true,
      message: "School added successfully",
    });

});

export const schoolsList = asyncHandler(async (req, res) => {
 
})
