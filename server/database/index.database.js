import { createPool } from "mysql2/promise";
import { config } from "../environment/config.js";
export const pool = createPool({
  host: config.DB_HOST,
  database: config.DB_NAME,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
});

