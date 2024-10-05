import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  });
  console.log("pi");
  await client.connect();
  const res = await client.query(queryObject);
  await client.end();
  return res;
}

export default {
  query: query,
};
