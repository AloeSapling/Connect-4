import { Sequelize } from "sequelize";

// Create the database connection using sequelize
export const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "sqlite.db",
});

/** Update the database to match the models defined in models.ts */
export async function setupDatabase() {
	await sequelize.sync({ alter: true });
}
