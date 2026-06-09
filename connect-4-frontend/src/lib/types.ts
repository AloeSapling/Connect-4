import * as proto from './proto.js';

// Protobuf type and value al............iases
/** Aliases for equivalent protobuf types */
export type TPlayerTypes = proto.shared.PlayerTypes;
export type TPlayerIDs = proto.shared.PlayerIDs;
export type TErrorCodes = proto.shared.ErrorCodes;
export type TCodedError = proto.shared.ICodedError;
export type TTokenTypes = proto.models.TokenTypes;

/** Aliases for equivalent protobuf values */
export const P_PlayerTypes = proto.shared.PlayerTypes;
export const P_PlayerIDs = proto.shared.PlayerIDs;
export const P_ErrorCodes = proto.shared.ErrorCodes;
export const P_CodedError = proto.shared.CodedError;
export const P_TokenTypes = proto.models.TokenTypes;

export type ResponseError = {
    status: number;
} & TCodedError;
