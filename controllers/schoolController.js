import pool from "../config/db.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

export const addSchool = asyncHandler(async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  const query = `
      INSERT INTO schools(name, address, latitude, longitude)
      VALUES (?, ?, ?, ?)
    `;

  await pool.query(query, [name, address, latitude, longitude]);

  res.status(201).json({
    success: true,
    message: "School added successfully",
  });
});

export const schoolsList = asyncHandler(async (req, res) => {
  
});
