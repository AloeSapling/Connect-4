import * as proto from './proto.js';

// Protobuf type and value al............iases
/** Alias for equivalent protobuf type */
export type TPlayerTypes = proto.shared.PlayerTypes;
/** Alias for equivalent protobuf type */
export type TPlayerIDs = proto.shared.PlayerIDs;
/** Alias for equivalent protobuf type */
export type TErrorCodes = proto.shared.ErrorCodes;
/** Alias for equivalent protobuf type */
export type TCodedError = proto.shared.ICodedError;

/** Alias for equivalent protobuf value */
export const P_PlayerTypes = proto.shared.PlayerTypes;
/** Alias for equivalent protobuf value */
export const P_PlayerIDs = proto.shared.PlayerIDs;
/** Alias for equivalent protobuf value */
export const P_ErrorCodes = proto.shared.ErrorCodes;
/** Alias for equivalent protobuf value */
export const P_CodedError = proto.shared.CodedError;

export type ResponseError = {
    status: number;
} & TCodedError;
