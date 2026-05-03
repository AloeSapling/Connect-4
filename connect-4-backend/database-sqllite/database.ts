import { Sequelize } from "sequelize";
import { SILENT_SEQUELIZE } from "../config.ts";

// Create the database connection using sequelize
export const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "sqlite.db",
	logging: !SILENT_SEQUELIZE,
});

/** Update the database to match the models defined in models.ts */
export async function setupDatabase() {
	await sequelize.query("PRAGMA foreign_keys = OFF");
	await sequelize.sync({ alter: true });
	await sequelize.query("PRAGMA foreign_keys = ON");
}
