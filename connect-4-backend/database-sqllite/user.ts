import { User } from "./models.ts";

/** Creates a new user instance in the sql database and ties it to the specified session id */
async function createUser(sessionID: string) {
	await User.create({ sessionID: sessionID });
}

export { createUser };
