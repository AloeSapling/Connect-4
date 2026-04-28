import { createLobbyCode } from "../lib/lib.ts";
import { CodedError } from "../lib/types.ts";
import { db } from "./database.ts";


const createLobbySQL = db.prepare("INSERT INTO Lobby (code) VALUES (?);");
const deleteLobbySQL = db.prepare("DELETE FROM Lobby WHERE code=?;");
const getLobbySQL = db.prepare("SELECT * FROM Lobby WHERE code=?;");
const getAllLobbiesSQL = db.prepare("SELECT * FROM Lobby;")

function createLobby(): string{
    // Retry up to 15 times on collision.
    // With the amount of possible codes, 15 retries should be more than enough to create a unique code.
    for(let i=0; i<15; i++){ 
        try {
            const code = createLobbyCode()
            createLobbySQL.run(code);

            return code;
        }
        catch {}
    }
    throw new CodedError("LobbyCreateFail");
}

function deleteLobby(code: string){
    deleteLobbySQL.run(code);
}

function getAllLobbies(): Lobby_T[]{
    return getAllLobbiesSQL.all() as Lobby_T[];
}

function getSpecificLobby(code: string): Lobby_T{
    return getLobbySQL.get(code) as Lobby_T;
}

export { createLobby, deleteLobby, getAllLobbies, getSpecificLobby }