
export type WSGameActions = "init" | "insertTile";
export type WSPacket = {
	action: WSGameActions,
	data: Record<string, any>,
}

export type WSGameResults = "gameEnd" | "move" | "error";
export type WSReturnPacket = {
	result: WSGameResults;
	data: Record<string, any>;
}
