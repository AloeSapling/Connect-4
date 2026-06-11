import type { models } from './proto.js';
import * as proto from './proto.js';

// Protobuf type and value aliases

/** Aliases for equivalent protobuf types */
export type TPlayerTypes = proto.shared.PlayerTypes;
export type TPlayerIDs = proto.shared.PlayerIDs;
export type TErrorCodes = proto.shared.ErrorCodes;
export type TCodedError = proto.shared.CodedError;
export type TTokenTypes = proto.models.TokenTypes;
export type TChangeTokenActions = proto.models.ChangeTokenActions;
export type TTile = proto.models.Tile;
export type TTokenQueueModes = proto.models.TokenQueueModes;

/** Aliases for equivalent protobuf values */
export const P_PlayerTypes = proto.shared.PlayerTypes;
export const P_PlayerIDs = proto.shared.PlayerIDs;
export const P_ErrorCodes = proto.shared.ErrorCodes;
export const P_CodedError = proto.shared.CodedError;
export const P_TokenTypes = proto.models.TokenTypes;
export const P_ChangeTokenActions = proto.models.ChangeTokenActions;
export const P_Tile = proto.models.Tile;
export const P_TokenQueueModes = proto.models.TokenQueueModes;

export type ResponseError = {
    status: number;
} & TCodedError;

export type SelectedToken = {
    type: TTokenTypes;
    key: string;
};

export type TTokenQueueData = {
    mode: TTokenQueueModes | null | undefined;
    tokens: models.ICurrentTokens | null | undefined;
    decks: models.IDecks | null | undefined;
};
