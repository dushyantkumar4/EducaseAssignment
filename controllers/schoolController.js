import pool from "../config/db.js";

export const addSchool = async (req, res) => {
  try {
    res.status(201).json({
      success: true,
      message: "School added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const schoolsList = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
