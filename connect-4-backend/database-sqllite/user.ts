import { User } from './models.ts';

/** Creates a new user instance in the sql database and ties it to the specified session id */
export async function createUser(sessionID: string, username: string) {
    await User.create({ username: username, session_id: sessionID });
}

/** Updates the username of the user with the given id */
export async function changeUsername(newUsername: string, userID: number) {
    await User.update(
        { username: newUsername },
        {
            where: {
                id: userID,
            },
        }
    );
}

/** @returns The user tied to the given sessionID
 * @returns Null if the user wasn't found
 * */
export async function getUserBySessionID(sessionID: string): Promise<User | null> {
    return await User.findOne({
        where: {
            session_id: sessionID,
        },
    });
}

export async function userExists(sessionID: string): Promise<boolean> {
    return (
        (await User.count({
            where: {
                session_id: sessionID,
            },
        })) > 0
    );
}
