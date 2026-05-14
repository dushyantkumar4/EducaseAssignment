import pool from "../config/db.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

// add school 
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

// short near school to user 
export const schoolsList = asyncHandler(async (req, res) => {
  const { latitude, longitude } = req.query;

  const [schools] = await pool.query("SELECT * FROM schools");

  const sortedSchools = schools
    .map((school) => {
      // distance formula
      const distance = Math.sqrt(
        Math.pow(latitude - school.latitude, 2) +
          Math.pow(longitude - school.longitude, 2),
      );

      return {
        ...school,
        distance,
      };
    })
    .sort((a, b) => a.distance - b.distance);

  res.status(200).json({
    success: true,
    schools: sortedSchools,
  });
});
