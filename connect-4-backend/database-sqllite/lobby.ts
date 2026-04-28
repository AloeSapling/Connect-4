import { createLobbyCode } from "../lib/lib.ts";
import { CodedError } from "../lib/types.ts";
import { Lobby } from "./models.ts";

async function createLobby(): Promise<string> {
  // Retry up to 15 times on collision.
  // With the amount of possible codes, 15 retries should be more than enough to create a unique code.
  for (let i = 0; i < 15; i++) {
    try {
      const code = createLobbyCode();
      await Lobby.create({
        code: code,
      });

      return code;
    } catch {}
  }

  throw new CodedError("LobbyCreateFail");
}

async function deleteLobby(code: string) {
  await Lobby.findOne({
    where: {
      code: code,
    },
  }).then((lobby) => lobby?.destroy());
}

async function getAllLobbies(): Promise<Lobby[]> {
  return await Lobby.findAll();
}

async function getSpecificLobby(code: string): Promise<Lobby | null> {
  return await Lobby.findOne({
    where: {
      code: code,
    },
  });
}

export { createLobby, deleteLobby, getAllLobbies, getSpecificLobby };
