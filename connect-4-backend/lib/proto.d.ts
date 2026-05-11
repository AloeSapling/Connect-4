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

        /** CodedError error. */
        public error?: (string|null);

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

    /** Properties of a ChangePlayerIDRequest. */
    interface IChangePlayerIDRequest {

        /** ChangePlayerIDRequest userId */
        userId?: (string|null);

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
        public userId: string;

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

        /** WSGamePacket init. */
        public init?: (ws.IWSGameInit|null);

        /** WSGamePacket insertTile. */
        public insertTile?: (ws.IWSGameInsertTile|null);

        /** WSGamePacket data. */
        public data?: ("init"|"insertTile");

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

        /** WSGameEnd draw */
        draw?: (boolean|null);
    }

    /** Represents a WSGameEnd. */
    class WSGameEnd implements IWSGameEnd {

        /**
         * Constructs a new WSGameEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IWSGameEnd);

        /** WSGameEnd user. */
        public user?: (ws.IPartialUser|null);

        /** WSGameEnd draw. */
        public draw?: (boolean|null);

        /** WSGameEnd winner. */
        public winner?: ("user"|"draw");

        /**
         * Creates a new WSGameEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WSGameEnd instance
         */
        public static create(properties?: ws.IWSGameEnd): ws.WSGameEnd;

        /**
         * Encodes the specified WSGameEnd message. Does not implicitly {@link ws.WSGameEnd.verify|verify} messages.
         * @param message WSGameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IWSGameEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WSGameEnd message, length delimited. Does not implicitly {@link ws.WSGameEnd.verify|verify} messages.
         * @param message WSGameEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IWSGameEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WSGameEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WSGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WSGameEnd;

        /**
         * Decodes a WSGameEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WSGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WSGameEnd;

        /**
         * Verifies a WSGameEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WSGameEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WSGameEnd
         */
        public static fromObject(object: { [k: string]: any }): ws.WSGameEnd;

        /**
         * Creates a plain object from a WSGameEnd message. Also converts values to other types if specified.
         * @param message WSGameEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.WSGameEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WSGameEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WSGameEnd
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
        id?: (string|null);

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
        public id: string;

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

    /** Properties of a DetailedLobbyMemberData. */
    interface IDetailedLobbyMemberData {

        /** DetailedLobbyMemberData userId */
        userId?: (string|null);

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
        public userId: string;

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
        id?: (string|null);

        /** LobbyMember userId */
        userId?: (string|null);

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
        public id: string;

        /** LobbyMember userId. */
        public userId: string;

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

        /** GameRow columns */
        columns?: (shared.PlayerIDs[]|null);
    }

    /** Represents a GameRow. */
    class GameRow implements IGameRow {

        /**
         * Constructs a new GameRow.
         * @param [properties] Properties to set
         */
        constructor(properties?: shared.IGameRow);

        /** GameRow columns. */
        public columns: shared.PlayerIDs[];

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
        ERROR_CODES_BAD_LOBBY_CODE = 2,
        ERROR_CODES_BAD_DATA = 3,
        ERROR_CODES_BAD_TURN = 4,
        ERROR_CODES_LOBBY_CREATE_FAIL = 5,
        ERROR_CODES_UNAUTHORISED = 6,
        ERROR_CODES_NOT_A_MEMBER = 7,
        ERROR_CODES_GAME_ALREADY_EXISTS = 8,
        ERROR_CODES_GAME_LOCKED = 9,
        ERROR_CODES_GAME_EXPIRED = 10,
        ERROR_CODES_ALREADY_JOINED = 11,
        ERROR_CODES_DOESNT_EXIST = 12
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

    /** Properties of a ResponseLobbyMember. */
    interface IResponseLobbyMember {

        /** ResponseLobbyMember id */
        id?: (string|null);

        /** ResponseLobbyMember userId */
        userId?: (string|null);

        /** ResponseLobbyMember username */
        username?: (string|null);

        /** ResponseLobbyMember playerType */
        playerType?: (shared.PlayerTypes|null);

        /** ResponseLobbyMember playerId */
        playerId?: (shared.PlayerIDs|null);
    }

    /** Represents a ResponseLobbyMember. */
    class ResponseLobbyMember implements IResponseLobbyMember {

        /**
         * Constructs a new ResponseLobbyMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IResponseLobbyMember);

        /** ResponseLobbyMember id. */
        public id: string;

        /** ResponseLobbyMember userId. */
        public userId: string;

        /** ResponseLobbyMember username. */
        public username: string;

        /** ResponseLobbyMember playerType. */
        public playerType: shared.PlayerTypes;

        /** ResponseLobbyMember playerId. */
        public playerId: shared.PlayerIDs;

        /**
         * Creates a new ResponseLobbyMember instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseLobbyMember instance
         */
        public static create(properties?: routes.IResponseLobbyMember): routes.ResponseLobbyMember;

        /**
         * Encodes the specified ResponseLobbyMember message. Does not implicitly {@link routes.ResponseLobbyMember.verify|verify} messages.
         * @param message ResponseLobbyMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IResponseLobbyMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseLobbyMember message, length delimited. Does not implicitly {@link routes.ResponseLobbyMember.verify|verify} messages.
         * @param message ResponseLobbyMember message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IResponseLobbyMember, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseLobbyMember message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseLobbyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.ResponseLobbyMember;

        /**
         * Decodes a ResponseLobbyMember message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseLobbyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.ResponseLobbyMember;

        /**
         * Verifies a ResponseLobbyMember message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseLobbyMember message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseLobbyMember
         */
        public static fromObject(object: { [k: string]: any }): routes.ResponseLobbyMember;

        /**
         * Creates a plain object from a ResponseLobbyMember message. Also converts values to other types if specified.
         * @param message ResponseLobbyMember
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.ResponseLobbyMember, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseLobbyMember to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ResponseLobbyMember
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetLobbyMembersRequest. */
    interface IGetLobbyMembersRequest {

        /** GetLobbyMembersRequest code */
        code?: (string|null);
    }

    /** Represents a GetLobbyMembersRequest. */
    class GetLobbyMembersRequest implements IGetLobbyMembersRequest {

        /**
         * Constructs a new GetLobbyMembersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLobbyMembersRequest);

        /** GetLobbyMembersRequest code. */
        public code: string;

        /**
         * Creates a new GetLobbyMembersRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLobbyMembersRequest instance
         */
        public static create(properties?: routes.IGetLobbyMembersRequest): routes.GetLobbyMembersRequest;

        /**
         * Encodes the specified GetLobbyMembersRequest message. Does not implicitly {@link routes.GetLobbyMembersRequest.verify|verify} messages.
         * @param message GetLobbyMembersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetLobbyMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLobbyMembersRequest message, length delimited. Does not implicitly {@link routes.GetLobbyMembersRequest.verify|verify} messages.
         * @param message GetLobbyMembersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetLobbyMembersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLobbyMembersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLobbyMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetLobbyMembersRequest;

        /**
         * Decodes a GetLobbyMembersRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLobbyMembersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetLobbyMembersRequest;

        /**
         * Verifies a GetLobbyMembersRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLobbyMembersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLobbyMembersRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.GetLobbyMembersRequest;

        /**
         * Creates a plain object from a GetLobbyMembersRequest message. Also converts values to other types if specified.
         * @param message GetLobbyMembersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetLobbyMembersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLobbyMembersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetLobbyMembersRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GetLobbyMembersResponse. */
    interface IGetLobbyMembersResponse {

        /** GetLobbyMembersResponse members */
        members?: (routes.IResponseLobbyMember[]|null);
    }

    /** Represents a GetLobbyMembersResponse. */
    class GetLobbyMembersResponse implements IGetLobbyMembersResponse {

        /**
         * Constructs a new GetLobbyMembersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLobbyMembersResponse);

        /** GetLobbyMembersResponse members. */
        public members: routes.IResponseLobbyMember[];

        /**
         * Creates a new GetLobbyMembersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetLobbyMembersResponse instance
         */
        public static create(properties?: routes.IGetLobbyMembersResponse): routes.GetLobbyMembersResponse;

        /**
         * Encodes the specified GetLobbyMembersResponse message. Does not implicitly {@link routes.GetLobbyMembersResponse.verify|verify} messages.
         * @param message GetLobbyMembersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetLobbyMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetLobbyMembersResponse message, length delimited. Does not implicitly {@link routes.GetLobbyMembersResponse.verify|verify} messages.
         * @param message GetLobbyMembersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetLobbyMembersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetLobbyMembersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetLobbyMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetLobbyMembersResponse;

        /**
         * Decodes a GetLobbyMembersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetLobbyMembersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetLobbyMembersResponse;

        /**
         * Verifies a GetLobbyMembersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetLobbyMembersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetLobbyMembersResponse
         */
        public static fromObject(object: { [k: string]: any }): routes.GetLobbyMembersResponse;

        /**
         * Creates a plain object from a GetLobbyMembersResponse message. Also converts values to other types if specified.
         * @param message GetLobbyMembersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetLobbyMembersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetLobbyMembersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetLobbyMembersResponse
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

    /** Properties of a GetGameRequest. */
    interface IGetGameRequest {

        /** GetGameRequest code */
        code?: (string|null);
    }

    /** Represents a GetGameRequest. */
    class GetGameRequest implements IGetGameRequest {

        /**
         * Constructs a new GetGameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetGameRequest);

        /** GetGameRequest code. */
        public code: string;

        /**
         * Creates a new GetGameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameRequest instance
         */
        public static create(properties?: routes.IGetGameRequest): routes.GetGameRequest;

        /**
         * Encodes the specified GetGameRequest message. Does not implicitly {@link routes.GetGameRequest.verify|verify} messages.
         * @param message GetGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IGetGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGameRequest message, length delimited. Does not implicitly {@link routes.GetGameRequest.verify|verify} messages.
         * @param message GetGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IGetGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.GetGameRequest;

        /**
         * Decodes a GetGameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.GetGameRequest;

        /**
         * Verifies a GetGameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGameRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.GetGameRequest;

        /**
         * Creates a plain object from a GetGameRequest message. Also converts values to other types if specified.
         * @param message GetGameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.GetGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GetGameRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a CreateGameRequest. */
    interface ICreateGameRequest {

        /** CreateGameRequest code */
        code?: (string|null);
    }

    /** Represents a CreateGameRequest. */
    class CreateGameRequest implements ICreateGameRequest {

        /**
         * Constructs a new CreateGameRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.ICreateGameRequest);

        /** CreateGameRequest code. */
        public code: string;

        /**
         * Creates a new CreateGameRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateGameRequest instance
         */
        public static create(properties?: routes.ICreateGameRequest): routes.CreateGameRequest;

        /**
         * Encodes the specified CreateGameRequest message. Does not implicitly {@link routes.CreateGameRequest.verify|verify} messages.
         * @param message CreateGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.ICreateGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateGameRequest message, length delimited. Does not implicitly {@link routes.CreateGameRequest.verify|verify} messages.
         * @param message CreateGameRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.ICreateGameRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateGameRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.CreateGameRequest;

        /**
         * Decodes a CreateGameRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.CreateGameRequest;

        /**
         * Verifies a CreateGameRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateGameRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateGameRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.CreateGameRequest;

        /**
         * Creates a plain object from a CreateGameRequest message. Also converts values to other types if specified.
         * @param message CreateGameRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.CreateGameRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateGameRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for CreateGameRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace models. */
export namespace models {

    /** Properties of a Lobby. */
    interface ILobby {

        /** Lobby code */
        code?: (string|null);
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

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

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
        public id: string;

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

    /** Properties of a LobbyMember. */
    interface ILobbyMember {

        /** LobbyMember id */
        id?: (string|null);

        /** LobbyMember userId */
        userId?: (string|null);

        /** LobbyMember lobbyCode */
        lobbyCode?: (string|null);

        /** LobbyMember playerType */
        playerType?: (shared.PlayerTypes|null);

        /** LobbyMember playerId */
        playerId?: (shared.PlayerIDs|null);
    }

    /** Represents a LobbyMember. */
    class LobbyMember implements ILobbyMember {

        /**
         * Constructs a new LobbyMember.
         * @param [properties] Properties to set
         */
        constructor(properties?: models.ILobbyMember);

        /** LobbyMember id. */
        public id: string;

        /** LobbyMember userId. */
        public userId: string;

        /** LobbyMember lobbyCode. */
        public lobbyCode: string;

        /** LobbyMember playerType. */
        public playerType: shared.PlayerTypes;

        /** LobbyMember playerId. */
        public playerId: shared.PlayerIDs;

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
}
