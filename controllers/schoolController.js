import pool from "../config/db.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const addSchool =asyncHandler( async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

    res.status(201).json({
      success: true,
      message: "School added successfully",
    });

});

export const schoolsList = asyncHandler(async (req, res) => {
 
})
