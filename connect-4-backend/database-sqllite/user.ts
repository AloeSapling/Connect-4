
import { User } from "./models.ts";

/** Creates a new user instance in the database. Ties it to the provided sessionID */
async function createUser(sessionID: string) {
	await User.create({ sessionID: sessionID });
}

/** @returns A list of all the users in the database */
async function getAllUsers(): Promise<User[]> {
	return await User.findAll();
}

/** Gets a user by their Pk 
* @returns The user or null if the user wasn't found
* */
async function getUserByPk(id: number): Promise<User | null> {
	return await User.findByPk(id);
}

/** Gets a user by their session ID 
* @returns The user
* @returns Null if the user wasn't found
* */
async function getUserBySessionID(sessionID: string): Promise<User | null> {
	return await User.findOne({ where: { sessionID: sessionID } });
}

/** Deletes all user in the sql database */
async function deleteAllUsers() {
	await User.truncate();
}

export { createUser, getAllUsers, getUserByPk, getUserBySessionID, deleteAllUsers };
