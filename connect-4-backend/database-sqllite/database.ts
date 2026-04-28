import { Sequelize } from "sequelize";

// Create the database connection using sequelize
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "sqlite.db",
});

await sequelize.sync({ alter: true });