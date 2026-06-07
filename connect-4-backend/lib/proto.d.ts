import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace routes. */
export namespace routes {

    /** Properties of a GetLobbiesResponse. */
    interface IGetLobbiesResponse {

        /** GetLobbiesResponse lobbies */
        lobbies?: (models.ILobbyData[]|null);
    }

    /** Represents a GetLobbiesResponse. */
    class GetLobbiesResponse implements IGetLobbiesResponse {

        /**
         * Constructs a new GetLobbiesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLobbiesResponse);

        /** GetLobbiesResponse lobbies. */
        public lobbies: models.ILobbyData[];

        /**
         * Creates a new GetLobbiesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLobbiesResponse instance
         */
        public static create(properties?: routes.IGetLobbiesResponse): routes.GetLobbiesResponse;

        /**
         * Encodes the specified GetLobbiesResponse message. Does not implicitly {@link routes.GetLobbiesResponse.verify|verify} messages.
         * @param message GetLobbiesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetLobbiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLobbiesResponse message, length delimited. Does not implicitly {@link routes.GetLobbiesResponse.verify|verify} messages.
         * @param message GetLobbiesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetLobbiesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLobbiesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLobbiesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetLobbiesResponse;

        /**
         * Decodes a GetLobbiesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLobbiesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetLobbiesResponse;

        /**
         * Verifies a GetLobbiesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLobbiesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLobbiesResponse
         */
        public static fromObject(object: { [k: string]: any }): routes.GetLobbiesResponse;

        /**
         * Creates a plain object from a GetLobbiesResponse message. Also converts values to other types if specified.
         * @param message GetLobbiesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetLobbiesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLobbiesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetLobbiesResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetLobbyResponse. */
    interface IGetLobbyResponse {

        /** GetLobbyResponse lobby */
        lobby?: (models.ILobbyData|null);
    }

    /** Represents a GetLobbyResponse. */
    class GetLobbyResponse implements IGetLobbyResponse {

        /**
         * Constructs a new GetLobbyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLobbyResponse);

        /** GetLobbyResponse lobby. */
        public lobby?: (models.ILobbyData|null);

        /**
         * Creates a new GetLobbyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLobbyResponse instance
         */
        public static create(properties?: routes.IGetLobbyResponse): routes.GetLobbyResponse;

        /**
         * Encodes the specified GetLobbyResponse message. Does not implicitly {@link routes.GetLobbyResponse.verify|verify} messages.
         * @param message GetLobbyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetLobbyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLobbyResponse message, length delimited. Does not implicitly {@link routes.GetLobbyResponse.verify|verify} messages.
         * @param message GetLobbyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetLobbyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLobbyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetLobbyResponse;

        /**
         * Decodes a GetLobbyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetLobbyResponse;

        /**
         * Verifies a GetLobbyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLobbyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLobbyResponse
         */
        public static fromObject(object: { [k: string]: any }): routes.GetLobbyResponse;

        /**
         * Creates a plain object from a GetLobbyResponse message. Also converts values to other types if specified.
         * @param message GetLobbyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetLobbyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLobbyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetLobbyResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateLobbyRequest. */
    interface ICreateLobbyRequest {

        /** CreateLobbyRequest lobbyName */
        lobbyName?: (string|null);
    }

    /** Represents a CreateLobbyRequest. */
    class CreateLobbyRequest implements ICreateLobbyRequest {

        /**
         * Constructs a new CreateLobbyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.ICreateLobbyRequest);

        /** CreateLobbyRequest lobbyName. */
        public lobbyName: string;

        /**
         * Creates a new CreateLobbyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateLobbyRequest instance
         */
        public static create(properties?: routes.ICreateLobbyRequest): routes.CreateLobbyRequest;

        /**
         * Encodes the specified CreateLobbyRequest message. Does not implicitly {@link routes.CreateLobbyRequest.verify|verify} messages.
         * @param message CreateLobbyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.ICreateLobbyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateLobbyRequest message, length delimited. Does not implicitly {@link routes.CreateLobbyRequest.verify|verify} messages.
         * @param message CreateLobbyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.ICreateLobbyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateLobbyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.CreateLobbyRequest;

        /**
         * Decodes a CreateLobbyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.CreateLobbyRequest;

        /**
         * Verifies a CreateLobbyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateLobbyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateLobbyRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.CreateLobbyRequest;

        /**
         * Creates a plain object from a CreateLobbyRequest message. Also converts values to other types if specified.
         * @param message CreateLobbyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.CreateLobbyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateLobbyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateLobbyRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateLobbyResponse. */
    interface ICreateLobbyResponse {

        /** CreateLobbyResponse code */
        code?: (string|null);
    }

    /** Represents a CreateLobbyResponse. */
    class CreateLobbyResponse implements ICreateLobbyResponse {

        /**
         * Constructs a new CreateLobbyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.ICreateLobbyResponse);

        /** CreateLobbyResponse code. */
        public code: string;

        /**
         * Creates a new CreateLobbyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateLobbyResponse instance
         */
        public static create(properties?: routes.ICreateLobbyResponse): routes.CreateLobbyResponse;

        /**
         * Encodes the specified CreateLobbyResponse message. Does not implicitly {@link routes.CreateLobbyResponse.verify|verify} messages.
         * @param message CreateLobbyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.ICreateLobbyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateLobbyResponse message, length delimited. Does not implicitly {@link routes.CreateLobbyResponse.verify|verify} messages.
         * @param message CreateLobbyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.ICreateLobbyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateLobbyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.CreateLobbyResponse;

        /**
         * Decodes a CreateLobbyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.CreateLobbyResponse;

        /**
         * Verifies a CreateLobbyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateLobbyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateLobbyResponse
         */
        public static fromObject(object: { [k: string]: any }): routes.CreateLobbyResponse;

        /**
         * Creates a plain object from a CreateLobbyResponse message. Also converts values to other types if specified.
         * @param message CreateLobbyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.CreateLobbyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateLobbyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateLobbyResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetLobbyDetailsResponse. */
    interface IGetLobbyDetailsResponse {

        /** GetLobbyDetailsResponse lobbyDetails */
        lobbyDetails?: (models.IDetailedLobbyData|null);
    }

    /** Represents a GetLobbyDetailsResponse. */
    class GetLobbyDetailsResponse implements IGetLobbyDetailsResponse {

        /**
         * Constructs a new GetLobbyDetailsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLobbyDetailsResponse);

        /** GetLobbyDetailsResponse lobbyDetails. */
        public lobbyDetails?: (models.IDetailedLobbyData|null);

        /**
         * Creates a new GetLobbyDetailsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLobbyDetailsResponse instance
         */
        public static create(properties?: routes.IGetLobbyDetailsResponse): routes.GetLobbyDetailsResponse;

        /**
         * Encodes the specified GetLobbyDetailsResponse message. Does not implicitly {@link routes.GetLobbyDetailsResponse.verify|verify} messages.
         * @param message GetLobbyDetailsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetLobbyDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLobbyDetailsResponse message, length delimited. Does not implicitly {@link routes.GetLobbyDetailsResponse.verify|verify} messages.
         * @param message GetLobbyDetailsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetLobbyDetailsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLobbyDetailsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLobbyDetailsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetLobbyDetailsResponse;

        /**
         * Decodes a GetLobbyDetailsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLobbyDetailsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetLobbyDetailsResponse;

        /**
         * Verifies a GetLobbyDetailsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLobbyDetailsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLobbyDetailsResponse
         */
        public static fromObject(object: { [k: string]: any }): routes.GetLobbyDetailsResponse;

        /**
         * Creates a plain object from a GetLobbyDetailsResponse message. Also converts values to other types if specified.
         * @param message GetLobbyDetailsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetLobbyDetailsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLobbyDetailsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetLobbyDetailsResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChangeLobbySettingsRequest. */
    interface IChangeLobbySettingsRequest {

        /** ChangeLobbySettingsRequest settings */
        settings?: (models.ILobbySettings|null);
    }

    /** Represents a ChangeLobbySettingsRequest. */
    class ChangeLobbySettingsRequest implements IChangeLobbySettingsRequest {

        /**
         * Constructs a new ChangeLobbySettingsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IChangeLobbySettingsRequest);

        /** ChangeLobbySettingsRequest settings. */
        public settings?: (models.ILobbySettings|null);

        /**
         * Creates a new ChangeLobbySettingsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeLobbySettingsRequest instance
         */
        public static create(properties?: routes.IChangeLobbySettingsRequest): routes.ChangeLobbySettingsRequest;

        /**
         * Encodes the specified ChangeLobbySettingsRequest message. Does not implicitly {@link routes.ChangeLobbySettingsRequest.verify|verify} messages.
         * @param message ChangeLobbySettingsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IChangeLobbySettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeLobbySettingsRequest message, length delimited. Does not implicitly {@link routes.ChangeLobbySettingsRequest.verify|verify} messages.
         * @param message ChangeLobbySettingsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IChangeLobbySettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeLobbySettingsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeLobbySettingsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.ChangeLobbySettingsRequest;

        /**
         * Decodes a ChangeLobbySettingsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeLobbySettingsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.ChangeLobbySettingsRequest;

        /**
         * Verifies a ChangeLobbySettingsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeLobbySettingsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeLobbySettingsRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.ChangeLobbySettingsRequest;

        /**
         * Creates a plain object from a ChangeLobbySettingsRequest message. Also converts values to other types if specified.
         * @param message ChangeLobbySettingsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.ChangeLobbySettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeLobbySettingsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangeLobbySettingsRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KickPlayerRequest. */
    interface IKickPlayerRequest {

        /** KickPlayerRequest userId */
        userId?: (number|null);
    }

    /** Represents a KickPlayerRequest. */
    class KickPlayerRequest implements IKickPlayerRequest {

        /**
         * Constructs a new KickPlayerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IKickPlayerRequest);

        /** KickPlayerRequest userId. */
        public userId: number;

        /**
         * Creates a new KickPlayerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickPlayerRequest instance
         */
        public static create(properties?: routes.IKickPlayerRequest): routes.KickPlayerRequest;

        /**
         * Encodes the specified KickPlayerRequest message. Does not implicitly {@link routes.KickPlayerRequest.verify|verify} messages.
         * @param message KickPlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IKickPlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickPlayerRequest message, length delimited. Does not implicitly {@link routes.KickPlayerRequest.verify|verify} messages.
         * @param message KickPlayerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IKickPlayerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickPlayerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.KickPlayerRequest;

        /**
         * Decodes a KickPlayerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickPlayerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.KickPlayerRequest;

        /**
         * Verifies a KickPlayerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickPlayerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickPlayerRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.KickPlayerRequest;

        /**
         * Creates a plain object from a KickPlayerRequest message. Also converts values to other types if specified.
         * @param message KickPlayerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.KickPlayerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickPlayerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KickPlayerRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChangePlayerIDRequest. */
    interface IChangePlayerIDRequest {

        /** ChangePlayerIDRequest userId */
        userId?: (number|null);

        /** ChangePlayerIDRequest playerId */
        playerId?: (shared.PlayerIDs|null);
    }

    /** Represents a ChangePlayerIDRequest. */
    class ChangePlayerIDRequest implements IChangePlayerIDRequest {

        /**
         * Constructs a new ChangePlayerIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IChangePlayerIDRequest);

        /** ChangePlayerIDRequest userId. */
        public userId: number;

        /** ChangePlayerIDRequest playerId. */
        public playerId: shared.PlayerIDs;

        /**
         * Creates a new ChangePlayerIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlayerIDRequest instance
         */
        public static create(properties?: routes.IChangePlayerIDRequest): routes.ChangePlayerIDRequest;

        /**
         * Encodes the specified ChangePlayerIDRequest message. Does not implicitly {@link routes.ChangePlayerIDRequest.verify|verify} messages.
         * @param message ChangePlayerIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IChangePlayerIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlayerIDRequest message, length delimited. Does not implicitly {@link routes.ChangePlayerIDRequest.verify|verify} messages.
         * @param message ChangePlayerIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IChangePlayerIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlayerIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePlayerIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.ChangePlayerIDRequest;

        /**
         * Decodes a ChangePlayerIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePlayerIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.ChangePlayerIDRequest;

        /**
         * Verifies a ChangePlayerIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlayerIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlayerIDRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.ChangePlayerIDRequest;

        /**
         * Creates a plain object from a ChangePlayerIDRequest message. Also converts values to other types if specified.
         * @param message ChangePlayerIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.ChangePlayerIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlayerIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangePlayerIDRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateUserRequest. */
    interface ICreateUserRequest {

        /** CreateUserRequest username */
        username?: (string|null);
    }

    /** Represents a CreateUserRequest. */
    class CreateUserRequest implements ICreateUserRequest {

        /**
         * Constructs a new CreateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.ICreateUserRequest);

        /** CreateUserRequest username. */
        public username: string;

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRequest instance
         */
        public static create(properties?: routes.ICreateUserRequest): routes.CreateUserRequest;

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link routes.CreateUserRequest.verify|verify} messages.
         * @param message CreateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link routes.CreateUserRequest.verify|verify} messages.
         * @param message CreateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.CreateUserRequest;

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.CreateUserRequest;

        /**
         * Verifies a CreateUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.CreateUserRequest;

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @param message CreateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateUserRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChangeUsernameRequest. */
    interface IChangeUsernameRequest {

        /** ChangeUsernameRequest username */
        username?: (string|null);
    }

    /** Represents a ChangeUsernameRequest. */
    class ChangeUsernameRequest implements IChangeUsernameRequest {

        /**
         * Constructs a new ChangeUsernameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IChangeUsernameRequest);

        /** ChangeUsernameRequest username. */
        public username: string;

        /**
         * Creates a new ChangeUsernameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeUsernameRequest instance
         */
        public static create(properties?: routes.IChangeUsernameRequest): routes.ChangeUsernameRequest;

        /**
         * Encodes the specified ChangeUsernameRequest message. Does not implicitly {@link routes.ChangeUsernameRequest.verify|verify} messages.
         * @param message ChangeUsernameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IChangeUsernameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeUsernameRequest message, length delimited. Does not implicitly {@link routes.ChangeUsernameRequest.verify|verify} messages.
         * @param message ChangeUsernameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IChangeUsernameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeUsernameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeUsernameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.ChangeUsernameRequest;

        /**
         * Decodes a ChangeUsernameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeUsernameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.ChangeUsernameRequest;

        /**
         * Verifies a ChangeUsernameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeUsernameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeUsernameRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.ChangeUsernameRequest;

        /**
         * Creates a plain object from a ChangeUsernameRequest message. Also converts values to other types if specified.
         * @param message ChangeUsernameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.ChangeUsernameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeUsernameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChangeUsernameRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetLoggedInData. */
    interface IGetLoggedInData {

        /** GetLoggedInData user */
        user?: (models.IUser|null);
    }

    /** Represents a GetLoggedInData. */
    class GetLoggedInData implements IGetLoggedInData {

        /**
         * Constructs a new GetLoggedInData.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLoggedInData);

        /** GetLoggedInData user. */
        public user?: (models.IUser|null);

        /**
         * Creates a new GetLoggedInData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLoggedInData instance
         */
        public static create(properties?: routes.IGetLoggedInData): routes.GetLoggedInData;

        /**
         * Encodes the specified GetLoggedInData message. Does not implicitly {@link routes.GetLoggedInData.verify|verify} messages.
         * @param message GetLoggedInData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetLoggedInData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLoggedInData message, length delimited. Does not implicitly {@link routes.GetLoggedInData.verify|verify} messages.
         * @param message GetLoggedInData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetLoggedInData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLoggedInData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLoggedInData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetLoggedInData;

        /**
         * Decodes a GetLoggedInData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLoggedInData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetLoggedInData;

        /**
         * Verifies a GetLoggedInData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLoggedInData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLoggedInData
         */
        public static fromObject(object: { [k: string]: any }): routes.GetLoggedInData;

        /**
         * Creates a plain object from a GetLoggedInData message. Also converts values to other types if specified.
         * @param message GetLoggedInData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetLoggedInData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLoggedInData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetLoggedInData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetGameResponse. */
    interface IGetGameResponse {

        /** GetGameResponse game */
        game?: (models.IGame|null);
    }

    /** Represents a GetGameResponse. */
    class GetGameResponse implements IGetGameResponse {

        /**
         * Constructs a new GetGameResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetGameResponse);

        /** GetGameResponse game. */
        public game?: (models.IGame|null);

        /**
         * Creates a new GetGameResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameResponse instance
         */
        public static create(properties?: routes.IGetGameResponse): routes.GetGameResponse;

        /**
         * Encodes the specified GetGameResponse message. Does not implicitly {@link routes.GetGameResponse.verify|verify} messages.
         * @param message GetGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGameResponse message, length delimited. Does not implicitly {@link routes.GetGameResponse.verify|verify} messages.
         * @param message GetGameResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetGameResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetGameResponse;

        /**
         * Decodes a GetGameResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetGameResponse;

        /**
         * Verifies a GetGameResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGameResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGameResponse
         */
        public static fromObject(object: { [k: string]: any }): routes.GetGameResponse;

        /**
         * Creates a plain object from a GetGameResponse message. Also converts values to other types if specified.
         * @param message GetGameResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetGameResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGameResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetGameResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace models. */
export namespace models {

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|null);

        /** User sessionId */
        sessionId?: (string|null);

        /** User username */
        username?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IUser);

        /** User id. */
        public id: number;

        /** User sessionId. */
        public sessionId: string;

        /** User username. */
        public username: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: models.IUser): models.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link models.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link models.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): models.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Game. */
    interface IGame {

        /** Game turn */
        turn?: (shared.PlayerIDs|null);

        /** Game board */
        board?: (shared.IGameBoard|null);
    }

    /** Represents a Game. */
    class Game implements IGame {

        /**
         * Constructs a new Game.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IGame);

        /** Game turn. */
        public turn: shared.PlayerIDs;

        /** Game board. */
        public board?: (shared.IGameBoard|null);

        /**
         * Creates a new Game instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Game instance
         */
        public static create(properties?: models.IGame): models.Game;

        /**
         * Encodes the specified Game message. Does not implicitly {@link models.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link models.Game.verify|verify} messages.
         * @param message Game message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Game;

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Game;

        /**
         * Verifies a Game message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Game
         */
        public static fromObject(object: { [k: string]: any }): models.Game;

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @param message Game
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Game, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Game to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Game
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** TokenTypes enum. */
    enum TokenTypes {
        TOKEN_TYPES_UNSPECIFIED = 0,
        TOKEN_TYPES_STANDARD = 1,
        TOKEN_TYPES_NEGATIVE = 2,
        TOKEN_TYPES_AURA = 3,
        TOKEN_TYPES_BOMB = 4,
        TOKEN_TYPES_SPLIT = 5,
        TOKEN_TYPES_FREEZE = 6,
        TOKEN_TYPES_BURN = 7,
        TOKEN_TYPES_REVERSE = 8,
        TOKEN_TYPES_DOUBLE = 9
    }

    /** Properties of a Token. */
    interface IToken {

        /** Token playerId */
        playerId?: (shared.PlayerIDs|null);

        /** Token tokenType */
        tokenType?: (models.TokenTypes|null);
    }

    /** Represents a Token. */
    class Token implements IToken {

        /**
         * Constructs a new Token.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IToken);

        /** Token playerId. */
        public playerId: shared.PlayerIDs;

        /** Token tokenType. */
        public tokenType: models.TokenTypes;

        /**
         * Creates a new Token instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Token instance
         */
        public static create(properties?: models.IToken): models.Token;

        /**
         * Encodes the specified Token message. Does not implicitly {@link models.Token.verify|verify} messages.
         * @param message Token message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Token message, length delimited. Does not implicitly {@link models.Token.verify|verify} messages.
         * @param message Token message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Token message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Token;

        /**
         * Decodes a Token message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Token;

        /**
         * Verifies a Token message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Token message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Token
         */
        public static fromObject(object: { [k: string]: any }): models.Token;

        /**
         * Creates a plain object from a Token message. Also converts values to other types if specified.
         * @param message Token
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Token to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Token
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Lobby. */
    interface ILobby {

        /** Lobby code */
        code?: (string|null);

        /** Lobby lobbyName */
        lobbyName?: (string|null);
    }

    /** Represents a Lobby. */
    class Lobby implements ILobby {

        /**
         * Constructs a new Lobby.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ILobby);

        /** Lobby code. */
        public code: string;

        /** Lobby lobbyName. */
        public lobbyName: string;

        /**
         * Creates a new Lobby instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Lobby instance
         */
        public static create(properties?: models.ILobby): models.Lobby;

        /**
         * Encodes the specified Lobby message. Does not implicitly {@link models.Lobby.verify|verify} messages.
         * @param message Lobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Lobby message, length delimited. Does not implicitly {@link models.Lobby.verify|verify} messages.
         * @param message Lobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.ILobby, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Lobby message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.Lobby;

        /**
         * Decodes a Lobby message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.Lobby;

        /**
         * Verifies a Lobby message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Lobby message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Lobby
         */
        public static fromObject(object: { [k: string]: any }): models.Lobby;

        /**
         * Creates a plain object from a Lobby message. Also converts values to other types if specified.
         * @param message Lobby
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.Lobby, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Lobby to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Lobby
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyData. */
    interface ILobbyData {

        /** LobbyData code */
        code?: (string|null);

        /** LobbyData lobbyName */
        lobbyName?: (string|null);

        /** LobbyData memberCount */
        memberCount?: (number|null);

        /** LobbyData hasGame */
        hasGame?: (boolean|null);
    }

    /** Represents a LobbyData. */
    class LobbyData implements ILobbyData {

        /**
         * Constructs a new LobbyData.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ILobbyData);

        /** LobbyData code. */
        public code: string;

        /** LobbyData lobbyName. */
        public lobbyName: string;

        /** LobbyData memberCount. */
        public memberCount: number;

        /** LobbyData hasGame. */
        public hasGame: boolean;

        /**
         * Creates a new LobbyData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyData instance
         */
        public static create(properties?: models.ILobbyData): models.LobbyData;

        /**
         * Encodes the specified LobbyData message. Does not implicitly {@link models.LobbyData.verify|verify} messages.
         * @param message LobbyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.ILobbyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyData message, length delimited. Does not implicitly {@link models.LobbyData.verify|verify} messages.
         * @param message LobbyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.ILobbyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.LobbyData;

        /**
         * Decodes a LobbyData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.LobbyData;

        /**
         * Verifies a LobbyData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyData
         */
        public static fromObject(object: { [k: string]: any }): models.LobbyData;

        /**
         * Creates a plain object from a LobbyData message. Also converts values to other types if specified.
         * @param message LobbyData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.LobbyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbySettings. */
    interface ILobbySettings {

        /** LobbySettings turnTime */
        turnTime?: (number|null);
    }

    /** Represents a LobbySettings. */
    class LobbySettings implements ILobbySettings {

        /**
         * Constructs a new LobbySettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ILobbySettings);

        /** LobbySettings turnTime. */
        public turnTime: number;

        /**
         * Creates a new LobbySettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbySettings instance
         */
        public static create(properties?: models.ILobbySettings): models.LobbySettings;

        /**
         * Encodes the specified LobbySettings message. Does not implicitly {@link models.LobbySettings.verify|verify} messages.
         * @param message LobbySettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.ILobbySettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbySettings message, length delimited. Does not implicitly {@link models.LobbySettings.verify|verify} messages.
         * @param message LobbySettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.ILobbySettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbySettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbySettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.LobbySettings;

        /**
         * Decodes a LobbySettings message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbySettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.LobbySettings;

        /**
         * Verifies a LobbySettings message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbySettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbySettings
         */
        public static fromObject(object: { [k: string]: any }): models.LobbySettings;

        /**
         * Creates a plain object from a LobbySettings message. Also converts values to other types if specified.
         * @param message LobbySettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.LobbySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbySettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbySettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DetailedLobbyData. */
    interface IDetailedLobbyData {

        /** DetailedLobbyData code */
        code?: (string|null);

        /** DetailedLobbyData lobbyName */
        lobbyName?: (string|null);

        /** DetailedLobbyData memberCount */
        memberCount?: (number|null);

        /** DetailedLobbyData hasGame */
        hasGame?: (boolean|null);

        /** DetailedLobbyData host */
        host?: (models.IDetailedLobbyMemberData|null);

        /** DetailedLobbyData lobbyMembers */
        lobbyMembers?: (models.IDetailedLobbyMemberData[]|null);

        /** DetailedLobbyData settings */
        settings?: (models.ILobbySettings|null);
    }

    /** Represents a DetailedLobbyData. */
    class DetailedLobbyData implements IDetailedLobbyData {

        /**
         * Constructs a new DetailedLobbyData.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IDetailedLobbyData);

        /** DetailedLobbyData code. */
        public code: string;

        /** DetailedLobbyData lobbyName. */
        public lobbyName: string;

        /** DetailedLobbyData memberCount. */
        public memberCount: number;

        /** DetailedLobbyData hasGame. */
        public hasGame: boolean;

        /** DetailedLobbyData host. */
        public host?: (models.IDetailedLobbyMemberData|null);

        /** DetailedLobbyData lobbyMembers. */
        public lobbyMembers: models.IDetailedLobbyMemberData[];

        /** DetailedLobbyData settings. */
        public settings?: (models.ILobbySettings|null);

        /**
         * Creates a new DetailedLobbyData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DetailedLobbyData instance
         */
        public static create(properties?: models.IDetailedLobbyData): models.DetailedLobbyData;

        /**
         * Encodes the specified DetailedLobbyData message. Does not implicitly {@link models.DetailedLobbyData.verify|verify} messages.
         * @param message DetailedLobbyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IDetailedLobbyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DetailedLobbyData message, length delimited. Does not implicitly {@link models.DetailedLobbyData.verify|verify} messages.
         * @param message DetailedLobbyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IDetailedLobbyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DetailedLobbyData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DetailedLobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.DetailedLobbyData;

        /**
         * Decodes a DetailedLobbyData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DetailedLobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.DetailedLobbyData;

        /**
         * Verifies a DetailedLobbyData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DetailedLobbyData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DetailedLobbyData
         */
        public static fromObject(object: { [k: string]: any }): models.DetailedLobbyData;

        /**
         * Creates a plain object from a DetailedLobbyData message. Also converts values to other types if specified.
         * @param message DetailedLobbyData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.DetailedLobbyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DetailedLobbyData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DetailedLobbyData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PartialUser. */
    interface IPartialUser {

        /** PartialUser id */
        id?: (number|null);

        /** PartialUser username */
        username?: (string|null);
    }

    /** Represents a PartialUser. */
    class PartialUser implements IPartialUser {

        /**
         * Constructs a new PartialUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IPartialUser);

        /** PartialUser id. */
        public id: number;

        /** PartialUser username. */
        public username: string;

        /**
         * Creates a new PartialUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartialUser instance
         */
        public static create(properties?: models.IPartialUser): models.PartialUser;

        /**
         * Encodes the specified PartialUser message. Does not implicitly {@link models.PartialUser.verify|verify} messages.
         * @param message PartialUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IPartialUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartialUser message, length delimited. Does not implicitly {@link models.PartialUser.verify|verify} messages.
         * @param message PartialUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IPartialUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartialUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartialUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.PartialUser;

        /**
         * Decodes a PartialUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartialUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.PartialUser;

        /**
         * Verifies a PartialUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartialUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartialUser
         */
        public static fromObject(object: { [k: string]: any }): models.PartialUser;

        /**
         * Creates a plain object from a PartialUser message. Also converts values to other types if specified.
         * @param message PartialUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.PartialUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartialUser to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PartialUser
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DetailedLobbyMemberData. */
    interface IDetailedLobbyMemberData {

        /** DetailedLobbyMemberData userId */
        userId?: (number|null);

        /** DetailedLobbyMemberData username */
        username?: (string|null);

        /** DetailedLobbyMemberData playerType */
        playerType?: (shared.PlayerTypes|null);

        /** DetailedLobbyMemberData playerId */
        playerId?: (shared.PlayerIDs|null);

        /** DetailedLobbyMemberData host */
        host?: (boolean|null);
    }

    /** Represents a DetailedLobbyMemberData. */
    class DetailedLobbyMemberData implements IDetailedLobbyMemberData {

        /**
         * Constructs a new DetailedLobbyMemberData.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.IDetailedLobbyMemberData);

        /** DetailedLobbyMemberData userId. */
        public userId: number;

        /** DetailedLobbyMemberData username. */
        public username: string;

        /** DetailedLobbyMemberData playerType. */
        public playerType: shared.PlayerTypes;

        /** DetailedLobbyMemberData playerId. */
        public playerId: shared.PlayerIDs;

        /** DetailedLobbyMemberData host. */
        public host: boolean;

        /**
         * Creates a new DetailedLobbyMemberData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DetailedLobbyMemberData instance
         */
        public static create(properties?: models.IDetailedLobbyMemberData): models.DetailedLobbyMemberData;

        /**
         * Encodes the specified DetailedLobbyMemberData message. Does not implicitly {@link models.DetailedLobbyMemberData.verify|verify} messages.
         * @param message DetailedLobbyMemberData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.IDetailedLobbyMemberData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DetailedLobbyMemberData message, length delimited. Does not implicitly {@link models.DetailedLobbyMemberData.verify|verify} messages.
         * @param message DetailedLobbyMemberData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.IDetailedLobbyMemberData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DetailedLobbyMemberData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DetailedLobbyMemberData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.DetailedLobbyMemberData;

        /**
         * Decodes a DetailedLobbyMemberData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DetailedLobbyMemberData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.DetailedLobbyMemberData;

        /**
         * Verifies a DetailedLobbyMemberData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DetailedLobbyMemberData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DetailedLobbyMemberData
         */
        public static fromObject(object: { [k: string]: any }): models.DetailedLobbyMemberData;

        /**
         * Creates a plain object from a DetailedLobbyMemberData message. Also converts values to other types if specified.
         * @param message DetailedLobbyMemberData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.DetailedLobbyMemberData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DetailedLobbyMemberData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DetailedLobbyMemberData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyMember. */
    interface ILobbyMember {

        /** LobbyMember id */
        id?: (number|null);

        /** LobbyMember userId */
        userId?: (number|null);

        /** LobbyMember lobbyCode */
        lobbyCode?: (string|null);

        /** LobbyMember playerType */
        playerType?: (shared.PlayerTypes|null);

        /** LobbyMember playerId */
        playerId?: (shared.PlayerIDs|null);

        /** LobbyMember host */
        host?: (boolean|null);
    }

    /** Represents a LobbyMember. */
    class LobbyMember implements ILobbyMember {

        /**
         * Constructs a new LobbyMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ILobbyMember);

        /** LobbyMember id. */
        public id: number;

        /** LobbyMember userId. */
        public userId: number;

        /** LobbyMember lobbyCode. */
        public lobbyCode: string;

        /** LobbyMember playerType. */
        public playerType: shared.PlayerTypes;

        /** LobbyMember playerId. */
        public playerId: shared.PlayerIDs;

        /** LobbyMember host. */
        public host: boolean;

        /**
         * Creates a new LobbyMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyMember instance
         */
        public static create(properties?: models.ILobbyMember): models.LobbyMember;

        /**
         * Encodes the specified LobbyMember message. Does not implicitly {@link models.LobbyMember.verify|verify} messages.
         * @param message LobbyMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: models.ILobbyMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyMember message, length delimited. Does not implicitly {@link models.LobbyMember.verify|verify} messages.
         * @param message LobbyMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: models.ILobbyMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): models.LobbyMember;

        /**
         * Decodes a LobbyMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): models.LobbyMember;

        /**
         * Verifies a LobbyMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyMember message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyMember
         */
        public static fromObject(object: { [k: string]: any }): models.LobbyMember;

        /**
         * Creates a plain object from a LobbyMember message. Also converts values to other types if specified.
         * @param message LobbyMember
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: models.LobbyMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyMember to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyMember
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace shared. */
export namespace shared {

    /** PlayerTypes enum. */
    enum PlayerTypes {
        PLAYER_TYPES_UNSPECIFIED = 0,
        PLAYER_TYPES_PLAYER = 1,
        PLAYER_TYPES_SPECTATOR = 2
    }

    /** PlayerIDs enum. */
    enum PlayerIDs {
        PLAYER_IDS_UNSPECIFIED = 0,
        PLAYER_IDS_PLAYER1 = 1,
        PLAYER_IDS_PLAYER2 = 2
    }

    /** Properties of a GameRow. */
    interface IGameRow {

        /** GameRow tokens */
        tokens?: (models.IToken[]|null);
    }

    /** Represents a GameRow. */
    class GameRow implements IGameRow {

        /**
         * Constructs a new GameRow.
         * @param [properties] Properties to set
         */
        constructor(properties?: shared.IGameRow);

        /** GameRow tokens. */
        public tokens: models.IToken[];

        /**
         * Creates a new GameRow instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRow instance
         */
        public static create(properties?: shared.IGameRow): shared.GameRow;

        /**
         * Encodes the specified GameRow message. Does not implicitly {@link shared.GameRow.verify|verify} messages.
         * @param message GameRow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shared.IGameRow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRow message, length delimited. Does not implicitly {@link shared.GameRow.verify|verify} messages.
         * @param message GameRow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shared.IGameRow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRow message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shared.GameRow;

        /**
         * Decodes a GameRow message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shared.GameRow;

        /**
         * Verifies a GameRow message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRow message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRow
         */
        public static fromObject(object: { [k: string]: any }): shared.GameRow;

        /**
         * Creates a plain object from a GameRow message. Also converts values to other types if specified.
         * @param message GameRow
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shared.GameRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRow to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameRow
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameBoard. */
    interface IGameBoard {

        /** GameBoard rows */
        rows?: (shared.IGameRow[]|null);
    }

    /** Represents a GameBoard. */
    class GameBoard implements IGameBoard {

        /**
         * Constructs a new GameBoard.
         * @param [properties] Properties to set
         */
        constructor(properties?: shared.IGameBoard);

        /** GameBoard rows. */
        public rows: shared.IGameRow[];

        /**
         * Creates a new GameBoard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBoard instance
         */
        public static create(properties?: shared.IGameBoard): shared.GameBoard;

        /**
         * Encodes the specified GameBoard message. Does not implicitly {@link shared.GameBoard.verify|verify} messages.
         * @param message GameBoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shared.IGameBoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBoard message, length delimited. Does not implicitly {@link shared.GameBoard.verify|verify} messages.
         * @param message GameBoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shared.IGameBoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBoard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shared.GameBoard;

        /**
         * Decodes a GameBoard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shared.GameBoard;

        /**
         * Verifies a GameBoard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBoard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBoard
         */
        public static fromObject(object: { [k: string]: any }): shared.GameBoard;

        /**
         * Creates a plain object from a GameBoard message. Also converts values to other types if specified.
         * @param message GameBoard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shared.GameBoard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBoard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameBoard
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ErrorCodes enum. */
    enum ErrorCodes {
        ERROR_CODES_UNSPECIFIED = 0,
        ERROR_CODES_SERVER_ERROR = 1,
        ERROR_CODES_BAD_DATA = 2,
        ERROR_CODES_BAD_TURN = 3,
        ERROR_CODES_BAD_USER = 4,
        ERROR_CODES_BAD_NAME = 5,
        ERROR_CODES_UNAUTHORISED = 6,
        ERROR_CODES_ALREADY_JOINED = 7,
        ERROR_CODES_NOT_A_MEMBER = 8,
        ERROR_CODES_GAME_LOCKED = 9,
        ERROR_CODES_GAME_EXPIRED = 10,
        ERROR_CODES_GAME_ALREADY_EXISTS = 11,
        ERROR_CODES_DOESNT_EXIST = 12,
        ERROR_CODES_USER_ALREADY_EXISTS = 13,
        ERROR_CODES_BAD_SETUP = 14,
        ERROR_CODES_USER_BANNED = 15
    }

    /** Properties of a CodedError. */
    interface ICodedError {

        /** CodedError code */
        code?: (shared.ErrorCodes|null);

        /** CodedError error */
        error?: (string|null);
    }

    /** Represents a CodedError. */
    class CodedError implements ICodedError {

        /**
         * Constructs a new CodedError.
         * @param [properties] Properties to set
         */
        constructor(properties?: shared.ICodedError);

        /** CodedError code. */
        public code: shared.ErrorCodes;

        /** CodedError error. */
        public error?: (string|null);

        /**
         * Creates a new CodedError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CodedError instance
         */
        public static create(properties?: shared.ICodedError): shared.CodedError;

        /**
         * Encodes the specified CodedError message. Does not implicitly {@link shared.CodedError.verify|verify} messages.
         * @param message CodedError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: shared.ICodedError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CodedError message, length delimited. Does not implicitly {@link shared.CodedError.verify|verify} messages.
         * @param message CodedError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: shared.ICodedError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CodedError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CodedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): shared.CodedError;

        /**
         * Decodes a CodedError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CodedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): shared.CodedError;

        /**
         * Verifies a CodedError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CodedError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CodedError
         */
        public static fromObject(object: { [k: string]: any }): shared.CodedError;

        /**
         * Creates a plain object from a CodedError message. Also converts values to other types if specified.
         * @param message CodedError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: shared.CodedError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CodedError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CodedError
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace ws. */
export namespace ws {

    /** Properties of a GameInsertTile. */
    interface IGameInsertTile {

        /** GameInsertTile column */
        column?: (number|null);
    }

    /** Represents a GameInsertTile. */
    class GameInsertTile implements IGameInsertTile {

        /**
         * Constructs a new GameInsertTile.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IGameInsertTile);

        /** GameInsertTile column. */
        public column: number;

        /**
         * Creates a new GameInsertTile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInsertTile instance
         */
        public static create(properties?: ws.IGameInsertTile): ws.GameInsertTile;

        /**
         * Encodes the specified GameInsertTile message. Does not implicitly {@link ws.GameInsertTile.verify|verify} messages.
         * @param message GameInsertTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IGameInsertTile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInsertTile message, length delimited. Does not implicitly {@link ws.GameInsertTile.verify|verify} messages.
         * @param message GameInsertTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IGameInsertTile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInsertTile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInsertTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.GameInsertTile;

        /**
         * Decodes a GameInsertTile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInsertTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.GameInsertTile;

        /**
         * Verifies a GameInsertTile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInsertTile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInsertTile
         */
        public static fromObject(object: { [k: string]: any }): ws.GameInsertTile;

        /**
         * Creates a plain object from a GameInsertTile message. Also converts values to other types if specified.
         * @param message GameInsertTile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.GameInsertTile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInsertTile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameInsertTile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** GameActions enum. */
    enum GameActions {
        GAME_ACTIONS_UNSPECIFIED = 0,
        GAME_ACTIONS_INSERT_TILE = 1,
        GAME_ACTIONS_FORFEIT = 2
    }

    /** Properties of a GamePacket. */
    interface IGamePacket {

        /** GamePacket action */
        action?: (ws.GameActions|null);

        /** GamePacket insertTile */
        insertTile?: (ws.IGameInsertTile|null);
    }

    /** Represents a GamePacket. */
    class GamePacket implements IGamePacket {

        /**
         * Constructs a new GamePacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IGamePacket);

        /** GamePacket action. */
        public action: ws.GameActions;

        /** GamePacket insertTile. */
        public insertTile?: (ws.IGameInsertTile|null);

        /** GamePacket data. */
        public data?: "insertTile";

        /**
         * Creates a new GamePacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamePacket instance
         */
        public static create(properties?: ws.IGamePacket): ws.GamePacket;

        /**
         * Encodes the specified GamePacket message. Does not implicitly {@link ws.GamePacket.verify|verify} messages.
         * @param message GamePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IGamePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GamePacket message, length delimited. Does not implicitly {@link ws.GamePacket.verify|verify} messages.
         * @param message GamePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IGamePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GamePacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.GamePacket;

        /**
         * Decodes a GamePacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.GamePacket;

        /**
         * Verifies a GamePacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GamePacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GamePacket
         */
        public static fromObject(object: { [k: string]: any }): ws.GamePacket;

        /**
         * Creates a plain object from a GamePacket message. Also converts values to other types if specified.
         * @param message GamePacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.GamePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GamePacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GamePacket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** GameEndTypes enum. */
    enum GameEndTypes {
        GAME_END_TYPES_UNSPECIFIED = 0,
        GAME_END_TYPES_STANDARD_WIN = 1,
        GAME_END_TYPES_FORFEITED = 2,
        GAME_END_TYPES_DRAW = 3
    }

    /** Properties of a Tile. */
    interface ITile {

        /** Tile row */
        row?: (number|null);

        /** Tile column */
        column?: (number|null);

        /** Tile token */
        token?: (models.IToken|null);
    }

    /** Represents a Tile. */
    class Tile implements ITile {

        /**
         * Constructs a new Tile.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.ITile);

        /** Tile row. */
        public row: number;

        /** Tile column. */
        public column: number;

        /** Tile token. */
        public token?: (models.IToken|null);

        /**
         * Creates a new Tile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tile instance
         */
        public static create(properties?: ws.ITile): ws.Tile;

        /**
         * Encodes the specified Tile message. Does not implicitly {@link ws.Tile.verify|verify} messages.
         * @param message Tile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.ITile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Tile message, length delimited. Does not implicitly {@link ws.Tile.verify|verify} messages.
         * @param message Tile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.ITile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Tile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.Tile;

        /**
         * Decodes a Tile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Tile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.Tile;

        /**
         * Verifies a Tile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Tile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Tile
         */
        public static fromObject(object: { [k: string]: any }): ws.Tile;

        /**
         * Creates a plain object from a Tile message. Also converts values to other types if specified.
         * @param message Tile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.Tile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Tile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Tile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameEnd. */
    interface IGameEnd {

        /** GameEnd endType */
        endType?: (ws.GameEndTypes|null);

        /** GameEnd tile */
        tile?: (ws.ITile|null);

        /** GameEnd winner */
        winner?: (models.IPartialUser|null);

        /** GameEnd loser */
        loser?: (models.IPartialUser|null);
    }

    /** Represents a GameEnd. */
    class GameEnd implements IGameEnd {

        /**
         * Constructs a new GameEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IGameEnd);

        /** GameEnd endType. */
        public endType: ws.GameEndTypes;

        /** GameEnd tile. */
        public tile?: (ws.ITile|null);

        /** GameEnd winner. */
        public winner?: (models.IPartialUser|null);

        /** GameEnd loser. */
        public loser?: (models.IPartialUser|null);

        /**
         * Creates a new GameEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameEnd instance
         */
        public static create(properties?: ws.IGameEnd): ws.GameEnd;

        /**
         * Encodes the specified GameEnd message. Does not implicitly {@link ws.GameEnd.verify|verify} messages.
         * @param message GameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IGameEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameEnd message, length delimited. Does not implicitly {@link ws.GameEnd.verify|verify} messages.
         * @param message GameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IGameEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.GameEnd;

        /**
         * Decodes a GameEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.GameEnd;

        /**
         * Verifies a GameEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameEnd
         */
        public static fromObject(object: { [k: string]: any }): ws.GameEnd;

        /**
         * Creates a plain object from a GameEnd message. Also converts values to other types if specified.
         * @param message GameEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.GameEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameEnd
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GameMove. */
    interface IGameMove {

        /** GameMove row */
        row?: (number|null);

        /** GameMove column */
        column?: (number|null);

        /** GameMove tokenType */
        tokenType?: (models.TokenTypes|null);

        /** GameMove board */
        board?: (shared.IGameBoard|null);

        /** GameMove turn */
        turn?: (shared.PlayerIDs|null);
    }

    /** Represents a GameMove. */
    class GameMove implements IGameMove {

        /**
         * Constructs a new GameMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IGameMove);

        /** GameMove row. */
        public row: number;

        /** GameMove column. */
        public column: number;

        /** GameMove tokenType. */
        public tokenType: models.TokenTypes;

        /** GameMove board. */
        public board?: (shared.IGameBoard|null);

        /** GameMove turn. */
        public turn: shared.PlayerIDs;

        /**
         * Creates a new GameMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMove instance
         */
        public static create(properties?: ws.IGameMove): ws.GameMove;

        /**
         * Encodes the specified GameMove message. Does not implicitly {@link ws.GameMove.verify|verify} messages.
         * @param message GameMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IGameMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMove message, length delimited. Does not implicitly {@link ws.GameMove.verify|verify} messages.
         * @param message GameMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IGameMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.GameMove;

        /**
         * Decodes a GameMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.GameMove;

        /**
         * Verifies a GameMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMove
         */
        public static fromObject(object: { [k: string]: any }): ws.GameMove;

        /**
         * Creates a plain object from a GameMove message. Also converts values to other types if specified.
         * @param message GameMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.GameMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameMove
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** GameResponses enum. */
    enum GameResponses {
        GAME_RESPONSES_UNSPECIFIED = 0,
        GAME_RESPONSES_ERROR = 1,
        GAME_RESPONSES_MOVE = 2,
        GAME_RESPONSES_END = 3
    }

    /** Properties of a GameResponsePacket. */
    interface IGameResponsePacket {

        /** GameResponsePacket response */
        response?: (ws.GameResponses|null);

        /** GameResponsePacket error */
        error?: (shared.ICodedError|null);

        /** GameResponsePacket move */
        move?: (ws.IGameMove|null);

        /** GameResponsePacket end */
        end?: (ws.IGameEnd|null);
    }

    /** Represents a GameResponsePacket. */
    class GameResponsePacket implements IGameResponsePacket {

        /**
         * Constructs a new GameResponsePacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IGameResponsePacket);

        /** GameResponsePacket response. */
        public response: ws.GameResponses;

        /** GameResponsePacket error. */
        public error?: (shared.ICodedError|null);

        /** GameResponsePacket move. */
        public move?: (ws.IGameMove|null);

        /** GameResponsePacket end. */
        public end?: (ws.IGameEnd|null);

        /** GameResponsePacket data. */
        public data?: ("error"|"move"|"end");

        /**
         * Creates a new GameResponsePacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResponsePacket instance
         */
        public static create(properties?: ws.IGameResponsePacket): ws.GameResponsePacket;

        /**
         * Encodes the specified GameResponsePacket message. Does not implicitly {@link ws.GameResponsePacket.verify|verify} messages.
         * @param message GameResponsePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IGameResponsePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResponsePacket message, length delimited. Does not implicitly {@link ws.GameResponsePacket.verify|verify} messages.
         * @param message GameResponsePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IGameResponsePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResponsePacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.GameResponsePacket;

        /**
         * Decodes a GameResponsePacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.GameResponsePacket;

        /**
         * Verifies a GameResponsePacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResponsePacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResponsePacket
         */
        public static fromObject(object: { [k: string]: any }): ws.GameResponsePacket;

        /**
         * Creates a plain object from a GameResponsePacket message. Also converts values to other types if specified.
         * @param message GameResponsePacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.GameResponsePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResponsePacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GameResponsePacket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** LobbyResponses enum. */
    enum LobbyResponses {
        LOBBY_RESPONSES_UNSPECIFIED = 0,
        LOBBY_RESPONSES_ERROR = 1,
        LOBBY_RESPONSES_JOIN = 2,
        LOBBY_RESPONSES_LEAVE = 3,
        LOBBY_RESPONSES_CHANGE_PLAYER = 4,
        LOBBY_RESPONSES_START_GAME = 5,
        LOBBY_RESPONSES_HOST_LEFT = 6,
        LOBBY_RESPONSES_SETTINGS_CHANGED = 7
    }

    /** Properties of a LobbyJoin. */
    interface ILobbyJoin {

        /** LobbyJoin users */
        users?: (models.IDetailedLobbyMemberData[]|null);
    }

    /** Represents a LobbyJoin. */
    class LobbyJoin implements ILobbyJoin {

        /**
         * Constructs a new LobbyJoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.ILobbyJoin);

        /** LobbyJoin users. */
        public users: models.IDetailedLobbyMemberData[];

        /**
         * Creates a new LobbyJoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyJoin instance
         */
        public static create(properties?: ws.ILobbyJoin): ws.LobbyJoin;

        /**
         * Encodes the specified LobbyJoin message. Does not implicitly {@link ws.LobbyJoin.verify|verify} messages.
         * @param message LobbyJoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.ILobbyJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyJoin message, length delimited. Does not implicitly {@link ws.LobbyJoin.verify|verify} messages.
         * @param message LobbyJoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.ILobbyJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyJoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.LobbyJoin;

        /**
         * Decodes a LobbyJoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.LobbyJoin;

        /**
         * Verifies a LobbyJoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyJoin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyJoin
         */
        public static fromObject(object: { [k: string]: any }): ws.LobbyJoin;

        /**
         * Creates a plain object from a LobbyJoin message. Also converts values to other types if specified.
         * @param message LobbyJoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.LobbyJoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyJoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyJoin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyLeave. */
    interface ILobbyLeave {

        /** LobbyLeave users */
        users?: (models.IDetailedLobbyMemberData[]|null);
    }

    /** Represents a LobbyLeave. */
    class LobbyLeave implements ILobbyLeave {

        /**
         * Constructs a new LobbyLeave.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.ILobbyLeave);

        /** LobbyLeave users. */
        public users: models.IDetailedLobbyMemberData[];

        /**
         * Creates a new LobbyLeave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyLeave instance
         */
        public static create(properties?: ws.ILobbyLeave): ws.LobbyLeave;

        /**
         * Encodes the specified LobbyLeave message. Does not implicitly {@link ws.LobbyLeave.verify|verify} messages.
         * @param message LobbyLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.ILobbyLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyLeave message, length delimited. Does not implicitly {@link ws.LobbyLeave.verify|verify} messages.
         * @param message LobbyLeave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.ILobbyLeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyLeave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.LobbyLeave;

        /**
         * Decodes a LobbyLeave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.LobbyLeave;

        /**
         * Verifies a LobbyLeave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyLeave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyLeave
         */
        public static fromObject(object: { [k: string]: any }): ws.LobbyLeave;

        /**
         * Creates a plain object from a LobbyLeave message. Also converts values to other types if specified.
         * @param message LobbyLeave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.LobbyLeave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyLeave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyLeave
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyChangePlayer. */
    interface ILobbyChangePlayer {

        /** LobbyChangePlayer users */
        users?: (models.IDetailedLobbyMemberData[]|null);
    }

    /** Represents a LobbyChangePlayer. */
    class LobbyChangePlayer implements ILobbyChangePlayer {

        /**
         * Constructs a new LobbyChangePlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.ILobbyChangePlayer);

        /** LobbyChangePlayer users. */
        public users: models.IDetailedLobbyMemberData[];

        /**
         * Creates a new LobbyChangePlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyChangePlayer instance
         */
        public static create(properties?: ws.ILobbyChangePlayer): ws.LobbyChangePlayer;

        /**
         * Encodes the specified LobbyChangePlayer message. Does not implicitly {@link ws.LobbyChangePlayer.verify|verify} messages.
         * @param message LobbyChangePlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.ILobbyChangePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyChangePlayer message, length delimited. Does not implicitly {@link ws.LobbyChangePlayer.verify|verify} messages.
         * @param message LobbyChangePlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.ILobbyChangePlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyChangePlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyChangePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.LobbyChangePlayer;

        /**
         * Decodes a LobbyChangePlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyChangePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.LobbyChangePlayer;

        /**
         * Verifies a LobbyChangePlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyChangePlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyChangePlayer
         */
        public static fromObject(object: { [k: string]: any }): ws.LobbyChangePlayer;

        /**
         * Creates a plain object from a LobbyChangePlayer message. Also converts values to other types if specified.
         * @param message LobbyChangePlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.LobbyChangePlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyChangePlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyChangePlayer
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LobbyResponsePacket. */
    interface ILobbyResponsePacket {

        /** LobbyResponsePacket response */
        response?: (ws.LobbyResponses|null);

        /** LobbyResponsePacket error */
        error?: (shared.ICodedError|null);

        /** LobbyResponsePacket join */
        join?: (ws.ILobbyJoin|null);

        /** LobbyResponsePacket leave */
        leave?: (ws.ILobbyLeave|null);

        /** LobbyResponsePacket changePlayer */
        changePlayer?: (ws.ILobbyChangePlayer|null);

        /** LobbyResponsePacket settings */
        settings?: (models.ILobbySettings|null);
    }

    /** Represents a LobbyResponsePacket. */
    class LobbyResponsePacket implements ILobbyResponsePacket {

        /**
         * Constructs a new LobbyResponsePacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.ILobbyResponsePacket);

        /** LobbyResponsePacket response. */
        public response: ws.LobbyResponses;

        /** LobbyResponsePacket error. */
        public error?: (shared.ICodedError|null);

        /** LobbyResponsePacket join. */
        public join?: (ws.ILobbyJoin|null);

        /** LobbyResponsePacket leave. */
        public leave?: (ws.ILobbyLeave|null);

        /** LobbyResponsePacket changePlayer. */
        public changePlayer?: (ws.ILobbyChangePlayer|null);

        /** LobbyResponsePacket settings. */
        public settings?: (models.ILobbySettings|null);

        /** LobbyResponsePacket data. */
        public data?: ("error"|"join"|"leave"|"changePlayer"|"settings");

        /**
         * Creates a new LobbyResponsePacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyResponsePacket instance
         */
        public static create(properties?: ws.ILobbyResponsePacket): ws.LobbyResponsePacket;

        /**
         * Encodes the specified LobbyResponsePacket message. Does not implicitly {@link ws.LobbyResponsePacket.verify|verify} messages.
         * @param message LobbyResponsePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.ILobbyResponsePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyResponsePacket message, length delimited. Does not implicitly {@link ws.LobbyResponsePacket.verify|verify} messages.
         * @param message LobbyResponsePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.ILobbyResponsePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyResponsePacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.LobbyResponsePacket;

        /**
         * Decodes a LobbyResponsePacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.LobbyResponsePacket;

        /**
         * Verifies a LobbyResponsePacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyResponsePacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyResponsePacket
         */
        public static fromObject(object: { [k: string]: any }): ws.LobbyResponsePacket;

        /**
         * Creates a plain object from a LobbyResponsePacket message. Also converts values to other types if specified.
         * @param message LobbyResponsePacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.LobbyResponsePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyResponsePacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LobbyResponsePacket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
