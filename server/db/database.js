import mysql from "mysql2";
import { config } from "../config.js";

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
});

// DB 실행
// pool.excute()
// pool.promise() , // 비동기 프로미스 반환
export const db = pool.promise();
