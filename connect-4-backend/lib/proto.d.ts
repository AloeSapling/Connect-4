import * as $protobuf from "protobufjs";
import Long = require("long");
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

/** Namespace shared. */
export namespace shared {

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
        ERROR_CODES_ALREADY_JOINED = 11
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
}

/** Namespace routes. */
export namespace routes {

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

    /** Properties of a GetLobbiesResponse. */
    interface IGetLobbiesResponse {

        /** GetLobbiesResponse lobbies */
        lobbies?: (models.ILobby[]|null);
    }

    /** Represents a GetLobbiesResponse. */
    class GetLobbiesResponse implements IGetLobbiesResponse {

        /**
         * Constructs a new GetLobbiesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLobbiesResponse);

        /** GetLobbiesResponse lobbies. */
        public lobbies: models.ILobby[];

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
        lobby?: (models.ILobby|null);
    }

    /** Represents a GetLobbyResponse. */
    class GetLobbyResponse implements IGetLobbyResponse {

        /**
         * Constructs a new GetLobbyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IGetLobbyResponse);

        /** GetLobbyResponse lobby. */
        public lobby?: (models.ILobby|null);

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

    /** Properties of a JoinLobbyRequest. */
    interface IJoinLobbyRequest {

        /** JoinLobbyRequest code */
        code?: (string|null);
    }

    /** Represents a JoinLobbyRequest. */
    class JoinLobbyRequest implements IJoinLobbyRequest {

        /**
         * Constructs a new JoinLobbyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: routes.IJoinLobbyRequest);

        /** JoinLobbyRequest code. */
        public code: string;

        /**
         * Creates a new JoinLobbyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinLobbyRequest instance
         */
        public static create(properties?: routes.IJoinLobbyRequest): routes.JoinLobbyRequest;

        /**
         * Encodes the specified JoinLobbyRequest message. Does not implicitly {@link routes.JoinLobbyRequest.verify|verify} messages.
         * @param message JoinLobbyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: routes.IJoinLobbyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinLobbyRequest message, length delimited. Does not implicitly {@link routes.JoinLobbyRequest.verify|verify} messages.
         * @param message JoinLobbyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: routes.IJoinLobbyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinLobbyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routes.JoinLobbyRequest;

        /**
         * Decodes a JoinLobbyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routes.JoinLobbyRequest;

        /**
         * Verifies a JoinLobbyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinLobbyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinLobbyRequest
         */
        public static fromObject(object: { [k: string]: any }): routes.JoinLobbyRequest;

        /**
         * Creates a plain object from a JoinLobbyRequest message. Also converts values to other types if specified.
         * @param message JoinLobbyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: routes.JoinLobbyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinLobbyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for JoinLobbyRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace ws. */
export namespace ws {

    /** Properties of a WSGameInit. */
    interface IWSGameInit {

        /** WSGameInit lobbyCode */
        lobbyCode?: (string|null);
    }

    /** Represents a WSGameInit. */
    class WSGameInit implements IWSGameInit {

        /**
         * Constructs a new WSGameInit.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IWSGameInit);

        /** WSGameInit lobbyCode. */
        public lobbyCode: string;

        /**
         * Creates a new WSGameInit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WSGameInit instance
         */
        public static create(properties?: ws.IWSGameInit): ws.WSGameInit;

        /**
         * Encodes the specified WSGameInit message. Does not implicitly {@link ws.WSGameInit.verify|verify} messages.
         * @param message WSGameInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IWSGameInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WSGameInit message, length delimited. Does not implicitly {@link ws.WSGameInit.verify|verify} messages.
         * @param message WSGameInit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IWSGameInit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WSGameInit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WSGameInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WSGameInit;

        /**
         * Decodes a WSGameInit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WSGameInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WSGameInit;

        /**
         * Verifies a WSGameInit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WSGameInit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WSGameInit
         */
        public static fromObject(object: { [k: string]: any }): ws.WSGameInit;

        /**
         * Creates a plain object from a WSGameInit message. Also converts values to other types if specified.
         * @param message WSGameInit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.WSGameInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WSGameInit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WSGameInit
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WSGameInsertTile. */
    interface IWSGameInsertTile {

        /** WSGameInsertTile column */
        column?: (number|null);
    }

    /** Represents a WSGameInsertTile. */
    class WSGameInsertTile implements IWSGameInsertTile {

        /**
         * Constructs a new WSGameInsertTile.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IWSGameInsertTile);

        /** WSGameInsertTile column. */
        public column: number;

        /**
         * Creates a new WSGameInsertTile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WSGameInsertTile instance
         */
        public static create(properties?: ws.IWSGameInsertTile): ws.WSGameInsertTile;

        /**
         * Encodes the specified WSGameInsertTile message. Does not implicitly {@link ws.WSGameInsertTile.verify|verify} messages.
         * @param message WSGameInsertTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IWSGameInsertTile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WSGameInsertTile message, length delimited. Does not implicitly {@link ws.WSGameInsertTile.verify|verify} messages.
         * @param message WSGameInsertTile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IWSGameInsertTile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WSGameInsertTile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WSGameInsertTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WSGameInsertTile;

        /**
         * Decodes a WSGameInsertTile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WSGameInsertTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WSGameInsertTile;

        /**
         * Verifies a WSGameInsertTile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WSGameInsertTile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WSGameInsertTile
         */
        public static fromObject(object: { [k: string]: any }): ws.WSGameInsertTile;

        /**
         * Creates a plain object from a WSGameInsertTile message. Also converts values to other types if specified.
         * @param message WSGameInsertTile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.WSGameInsertTile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WSGameInsertTile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WSGameInsertTile
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WSGameActions enum. */
    enum WSGameActions {
        WS_GAME_ACTIONS_UNSPECIFIED = 0,
        WS_GAME_ACTIONS_INIT = 1,
        WS_GAME_ACTIONS_INSERT_TILE = 2
    }

    /** Properties of a WSGamePacket. */
    interface IWSGamePacket {

        /** WSGamePacket action */
        action?: (ws.WSGameActions|null);

        /** WSGamePacket init */
        init?: (ws.IWSGameInit|null);

        /** WSGamePacket insertTile */
        insertTile?: (ws.IWSGameInsertTile|null);
    }

    /** Represents a WSGamePacket. */
    class WSGamePacket implements IWSGamePacket {

        /**
         * Constructs a new WSGamePacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IWSGamePacket);

        /** WSGamePacket action. */
        public action: ws.WSGameActions;

        /** WSGamePacket init. */
        public init?: (ws.IWSGameInit|null);

        /** WSGamePacket insertTile. */
        public insertTile?: (ws.IWSGameInsertTile|null);

        /** WSGamePacket data. */
        public data?: ("init"|"insertTile");

        /**
         * Creates a new WSGamePacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WSGamePacket instance
         */
        public static create(properties?: ws.IWSGamePacket): ws.WSGamePacket;

        /**
         * Encodes the specified WSGamePacket message. Does not implicitly {@link ws.WSGamePacket.verify|verify} messages.
         * @param message WSGamePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IWSGamePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WSGamePacket message, length delimited. Does not implicitly {@link ws.WSGamePacket.verify|verify} messages.
         * @param message WSGamePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IWSGamePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WSGamePacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WSGamePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WSGamePacket;

        /**
         * Decodes a WSGamePacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WSGamePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WSGamePacket;

        /**
         * Verifies a WSGamePacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WSGamePacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WSGamePacket
         */
        public static fromObject(object: { [k: string]: any }): ws.WSGamePacket;

        /**
         * Creates a plain object from a WSGamePacket message. Also converts values to other types if specified.
         * @param message WSGamePacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.WSGamePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WSGamePacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WSGamePacket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PartialUser. */
    interface IPartialUser {

        /** PartialUser username */
        username?: (string|null);
    }

    /** Represents a PartialUser. */
    class PartialUser implements IPartialUser {

        /**
         * Constructs a new PartialUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IPartialUser);

        /** PartialUser username. */
        public username: string;

        /**
         * Creates a new PartialUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartialUser instance
         */
        public static create(properties?: ws.IPartialUser): ws.PartialUser;

        /**
         * Encodes the specified PartialUser message. Does not implicitly {@link ws.PartialUser.verify|verify} messages.
         * @param message PartialUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IPartialUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartialUser message, length delimited. Does not implicitly {@link ws.PartialUser.verify|verify} messages.
         * @param message PartialUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IPartialUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartialUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartialUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.PartialUser;

        /**
         * Decodes a PartialUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartialUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.PartialUser;

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
        public static fromObject(object: { [k: string]: any }): ws.PartialUser;

        /**
         * Creates a plain object from a PartialUser message. Also converts values to other types if specified.
         * @param message PartialUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.PartialUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

    /** Properties of a WSGameEnd. */
    interface IWSGameEnd {

        /** WSGameEnd user */
        user?: (ws.IPartialUser|null);

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

    /** Properties of a WSGameMove. */
    interface IWSGameMove {

        /** WSGameMove row */
        row?: (number|null);

        /** WSGameMove column */
        column?: (number|null);

        /** WSGameMove board */
        board?: (shared.IGameBoard|null);

        /** WSGameMove turn */
        turn?: (shared.PlayerIDs|null);
    }

    /** Represents a WSGameMove. */
    class WSGameMove implements IWSGameMove {

        /**
         * Constructs a new WSGameMove.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IWSGameMove);

        /** WSGameMove row. */
        public row: number;

        /** WSGameMove column. */
        public column: number;

        /** WSGameMove board. */
        public board?: (shared.IGameBoard|null);

        /** WSGameMove turn. */
        public turn: shared.PlayerIDs;

        /**
         * Creates a new WSGameMove instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WSGameMove instance
         */
        public static create(properties?: ws.IWSGameMove): ws.WSGameMove;

        /**
         * Encodes the specified WSGameMove message. Does not implicitly {@link ws.WSGameMove.verify|verify} messages.
         * @param message WSGameMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IWSGameMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WSGameMove message, length delimited. Does not implicitly {@link ws.WSGameMove.verify|verify} messages.
         * @param message WSGameMove message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IWSGameMove, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WSGameMove message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WSGameMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WSGameMove;

        /**
         * Decodes a WSGameMove message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WSGameMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WSGameMove;

        /**
         * Verifies a WSGameMove message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WSGameMove message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WSGameMove
         */
        public static fromObject(object: { [k: string]: any }): ws.WSGameMove;

        /**
         * Creates a plain object from a WSGameMove message. Also converts values to other types if specified.
         * @param message WSGameMove
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.WSGameMove, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WSGameMove to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WSGameMove
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** WSGameResponses enum. */
    enum WSGameResponses {
        WS_GAME_RESPONSES_UNSPECIFIED = 0,
        WS_GAME_RESPONSES_ERROR = 1,
        WS_GAME_RESPONSES_MOVE = 2,
        WS_GAME_RESPONSES_END = 3
    }

    /** Properties of a WSGameResponsePacket. */
    interface IWSGameResponsePacket {

        /** WSGameResponsePacket response */
        response?: (ws.WSGameResponses|null);

        /** WSGameResponsePacket error */
        error?: (shared.ICodedError|null);

        /** WSGameResponsePacket move */
        move?: (ws.IWSGameMove|null);

        /** WSGameResponsePacket end */
        end?: (ws.IWSGameEnd|null);
    }

    /** Represents a WSGameResponsePacket. */
    class WSGameResponsePacket implements IWSGameResponsePacket {

        /**
         * Constructs a new WSGameResponsePacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: ws.IWSGameResponsePacket);

        /** WSGameResponsePacket response. */
        public response: ws.WSGameResponses;

        /** WSGameResponsePacket error. */
        public error?: (shared.ICodedError|null);

        /** WSGameResponsePacket move. */
        public move?: (ws.IWSGameMove|null);

        /** WSGameResponsePacket end. */
        public end?: (ws.IWSGameEnd|null);

        /** WSGameResponsePacket data. */
        public data?: ("error"|"move"|"end");

        /**
         * Creates a new WSGameResponsePacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WSGameResponsePacket instance
         */
        public static create(properties?: ws.IWSGameResponsePacket): ws.WSGameResponsePacket;

        /**
         * Encodes the specified WSGameResponsePacket message. Does not implicitly {@link ws.WSGameResponsePacket.verify|verify} messages.
         * @param message WSGameResponsePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ws.IWSGameResponsePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WSGameResponsePacket message, length delimited. Does not implicitly {@link ws.WSGameResponsePacket.verify|verify} messages.
         * @param message WSGameResponsePacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ws.IWSGameResponsePacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WSGameResponsePacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WSGameResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ws.WSGameResponsePacket;

        /**
         * Decodes a WSGameResponsePacket message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WSGameResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ws.WSGameResponsePacket;

        /**
         * Verifies a WSGameResponsePacket message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WSGameResponsePacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WSGameResponsePacket
         */
        public static fromObject(object: { [k: string]: any }): ws.WSGameResponsePacket;

        /**
         * Creates a plain object from a WSGameResponsePacket message. Also converts values to other types if specified.
         * @param message WSGameResponsePacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ws.WSGameResponsePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WSGameResponsePacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WSGameResponsePacket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
