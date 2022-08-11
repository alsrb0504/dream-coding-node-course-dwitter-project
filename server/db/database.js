import mysql from "mysql2";
import { config } from "../config.js";
import SQ from "sequelize";

const { host, user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
  host,
  dialect: "mysql",
});

const pool = mysql.createPool({
  host,
  user,
  database,
  password,
});

// DB 실행
// pool.excute()
// pool.promise() , // 비동기 프로미스 반환
export const db = pool.promise();
