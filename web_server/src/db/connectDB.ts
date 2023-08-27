import { DataSource } from "typeorm";
import { UserElement } from "../entity";

const dbPortEnv = process.env.DB_PORT ?? "5432";
const dbPort = parseInt(dbPortEnv);

const connectDB = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: dbPort,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [UserElement],
  synchronize: true,
  logging: false,
});

connectDB
  .initialize()
  .then(() => {
    console.log("Initialized the Data Source");
  })
  .catch((err) => {
    console.error("Cannot connect to Data Source", err);
  });

export default connectDB;
