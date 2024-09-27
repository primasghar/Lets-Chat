import { sql } from "../database/database.js";

const createMessage = async (name, message) => {
  await sql`INSERT INTO messages (sender, message) VALUES (${name} , ${message})`;
};

const listRecentFiveMessages = async () =>
  await sql`SELECT * FROM messages ORDER BY id DESC LIMIT 5`;

export { createMessage, listRecentFiveMessages };
