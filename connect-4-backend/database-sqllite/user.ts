import { User } from "./models.ts";

/** Creates a new user instance in the sql database and ties it to the specified session id */
async function createUser(sessionID: string) {
        await User.create({ sessionID: sessionID });
}

/** @returns The user tied to the given sessionID
 * @returns Null if the user wasn't found
 * */
async function getUserBySessionID(sessionID: string): Promise<User | null> {
        return await User.findOne({
                where: {
                        session_id: sessionID,
                }
        })
}

export { createUser, getUserBySessionID };
