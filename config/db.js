import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool(process.env.DATABASE_URL);

try {
  const connection = await pool.getConnection();

  console.log("MySQL Connected");

  connection.release();
} catch (error) {
  console.log(error);
}

export default pool;