/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const models = $root.models = (() => {

    /**
     * Namespace models.
     * @exports models
     * @namespace
     */
    const models = {};

    models.Lobby = (function() {

        /**
         * Properties of a Lobby.
         * @memberof models
         * @interface ILobby
         * @property {string|null} [code] Lobby code
         */

        /**
         * Constructs a new Lobby.
         * @memberof models
         * @classdesc Represents a Lobby.
         * @implements ILobby
         * @constructor
         * @param {models.ILobby=} [properties] Properties to set
         */
        function Lobby(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Lobby code.
         * @member {string} code
         * @memberof models.Lobby
         * @instance
         */
        Lobby.prototype.code = "";

        /**
         * Creates a new Lobby instance using the specified properties.
         * @function create
         * @memberof models.Lobby
         * @static
         * @param {models.ILobby=} [properties] Properties to set
         * @returns {models.Lobby} Lobby instance
         */
        Lobby.create = function create(properties) {
            return new Lobby(properties);
        };

        /**
         * Encodes the specified Lobby message. Does not implicitly {@link models.Lobby.verify|verify} messages.
         * @function encode
         * @memberof models.Lobby
         * @static
         * @param {models.ILobby} message Lobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Lobby.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified Lobby message, length delimited. Does not implicitly {@link models.Lobby.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Lobby
         * @static
         * @param {models.ILobby} message Lobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Lobby.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Lobby message from the specified reader or buffer.
         * @function decode
         * @memberof models.Lobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Lobby} Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Lobby.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Lobby();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Lobby message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Lobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Lobby} Lobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Lobby.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Lobby message.
         * @function verify
         * @memberof models.Lobby
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Lobby.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a Lobby message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Lobby
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Lobby} Lobby
         */
        Lobby.fromObject = function fromObject(object, long) {
            if (object instanceof $root.models.Lobby)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.models.Lobby();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a Lobby message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Lobby
         * @static
         * @param {models.Lobby} message Lobby
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Lobby.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this Lobby to JSON.
         * @function toJSON
         * @memberof models.Lobby
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Lobby.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Lobby
         * @function getTypeUrl
         * @memberof models.Lobby
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Lobby.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.Lobby";
        };

        return Lobby;
    })();

    models.User = (function() {

        /**
         * Properties of a User.
         * @memberof models
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [sessionId] User sessionId
         * @property {string|null} [username] User username
         */

        /**
         * Constructs a new User.
         * @memberof models
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {models.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof models.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User sessionId.
         * @member {string} sessionId
         * @memberof models.User
         * @instance
         */
        User.prototype.sessionId = "";

        /**
         * User username.
         * @member {string} username
         * @memberof models.User
         * @instance
         */
        User.prototype.username = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof models.User
         * @static
         * @param {models.IUser=} [properties] Properties to set
         * @returns {models.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link models.User.verify|verify} messages.
         * @function encode
         * @memberof models.User
         * @static
         * @param {models.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link models.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.User
         * @static
         * @param {models.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof models.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 3: {
                        message.username = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof models.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.User} User
         */
        User.fromObject = function fromObject(object, long) {
            if (object instanceof $root.models.User)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.models.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.User
         * @static
         * @param {models.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = "";
                object.sessionId = "";
                object.username = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof models.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof models.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.User";
        };

        return User;
    })();

    models.Game = (function() {

        /**
         * Properties of a Game.
         * @memberof models
         * @interface IGame
         * @property {shared.PlayerIDs|null} [turn] Game turn
         * @property {shared.IGameBoard|null} [board] Game board
         */

        /**
         * Constructs a new Game.
         * @memberof models
         * @classdesc Represents a Game.
         * @implements IGame
         * @constructor
         * @param {models.IGame=} [properties] Properties to set
         */
        function Game(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Game turn.
         * @member {shared.PlayerIDs} turn
         * @memberof models.Game
         * @instance
         */
        Game.prototype.turn = 0;

        /**
         * Game board.
         * @member {shared.IGameBoard|null|undefined} board
         * @memberof models.Game
         * @instance
         */
        Game.prototype.board = null;

        /**
         * Creates a new Game instance using the specified properties.
         * @function create
         * @memberof models.Game
         * @static
         * @param {models.IGame=} [properties] Properties to set
         * @returns {models.Game} Game instance
         */
        Game.create = function create(properties) {
            return new Game(properties);
        };

        /**
         * Encodes the specified Game message. Does not implicitly {@link models.Game.verify|verify} messages.
         * @function encode
         * @memberof models.Game
         * @static
         * @param {models.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.turn != null && Object.hasOwnProperty.call(message, "turn"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.turn);
            if (message.board != null && Object.hasOwnProperty.call(message, "board"))
                $root.shared.GameBoard.encode(message.board, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link models.Game.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.Game
         * @static
         * @param {models.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @function decode
         * @memberof models.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.Game();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.turn = reader.int32();
                        break;
                    }
                case 2: {
                        message.board = $root.shared.GameBoard.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Game message.
         * @function verify
         * @memberof models.Game
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Game.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.turn != null && message.hasOwnProperty("turn"))
                switch (message.turn) {
                default:
                    return "turn: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.board != null && message.hasOwnProperty("board")) {
                let error = $root.shared.GameBoard.verify(message.board, long + 1);
                if (error)
                    return "board." + error;
            }
            return null;
        };

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.Game
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.Game} Game
         */
        Game.fromObject = function fromObject(object, long) {
            if (object instanceof $root.models.Game)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.models.Game();
            switch (object.turn) {
            default:
                if (typeof object.turn === "number") {
                    message.turn = object.turn;
                    break;
                }
                break;
            case "PLAYER_IDS_UNSPECIFIED":
            case 0:
                message.turn = 0;
                break;
            case "PLAYER_IDS_PLAYER1":
            case 1:
                message.turn = 1;
                break;
            case "PLAYER_IDS_PLAYER2":
            case 2:
                message.turn = 2;
                break;
            }
            if (object.board != null) {
                if (typeof object.board !== "object")
                    throw TypeError(".models.Game.board: object expected");
                message.board = $root.shared.GameBoard.fromObject(object.board, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.Game
         * @static
         * @param {models.Game} message Game
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Game.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.turn = options.enums === String ? "PLAYER_IDS_UNSPECIFIED" : 0;
                object.board = null;
            }
            if (message.turn != null && message.hasOwnProperty("turn"))
                object.turn = options.enums === String ? $root.shared.PlayerIDs[message.turn] === undefined ? message.turn : $root.shared.PlayerIDs[message.turn] : message.turn;
            if (message.board != null && message.hasOwnProperty("board"))
                object.board = $root.shared.GameBoard.toObject(message.board, options);
            return object;
        };

        /**
         * Converts this Game to JSON.
         * @function toJSON
         * @memberof models.Game
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Game.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Game
         * @function getTypeUrl
         * @memberof models.Game
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Game.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.Game";
        };

        return Game;
    })();

    return models;
})();

export const shared = $root.shared = (() => {

    /**
     * Namespace shared.
     * @exports shared
     * @namespace
     */
    const shared = {};

    /**
     * ErrorCodes enum.
     * @name shared.ErrorCodes
     * @enum {number}
     * @property {number} ERROR_CODES_UNSPECIFIED=0 ERROR_CODES_UNSPECIFIED value
     * @property {number} ERROR_CODES_SERVER_ERROR=1 ERROR_CODES_SERVER_ERROR value
     * @property {number} ERROR_CODES_BAD_LOBBY_CODE=2 ERROR_CODES_BAD_LOBBY_CODE value
     * @property {number} ERROR_CODES_BAD_DATA=3 ERROR_CODES_BAD_DATA value
     * @property {number} ERROR_CODES_BAD_TURN=4 ERROR_CODES_BAD_TURN value
     * @property {number} ERROR_CODES_LOBBY_CREATE_FAIL=5 ERROR_CODES_LOBBY_CREATE_FAIL value
     * @property {number} ERROR_CODES_UNAUTHORISED=6 ERROR_CODES_UNAUTHORISED value
     * @property {number} ERROR_CODES_NOT_A_MEMBER=7 ERROR_CODES_NOT_A_MEMBER value
     * @property {number} ERROR_CODES_GAME_ALREADY_EXISTS=8 ERROR_CODES_GAME_ALREADY_EXISTS value
     * @property {number} ERROR_CODES_GAME_LOCKED=9 ERROR_CODES_GAME_LOCKED value
     * @property {number} ERROR_CODES_GAME_EXPIRED=10 ERROR_CODES_GAME_EXPIRED value
     * @property {number} ERROR_CODES_ALREADY_JOINED=11 ERROR_CODES_ALREADY_JOINED value
     */
    shared.ErrorCodes = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERROR_CODES_UNSPECIFIED"] = 0;
        values[valuesById[1] = "ERROR_CODES_SERVER_ERROR"] = 1;
        values[valuesById[2] = "ERROR_CODES_BAD_LOBBY_CODE"] = 2;
        values[valuesById[3] = "ERROR_CODES_BAD_DATA"] = 3;
        values[valuesById[4] = "ERROR_CODES_BAD_TURN"] = 4;
        values[valuesById[5] = "ERROR_CODES_LOBBY_CREATE_FAIL"] = 5;
        values[valuesById[6] = "ERROR_CODES_UNAUTHORISED"] = 6;
        values[valuesById[7] = "ERROR_CODES_NOT_A_MEMBER"] = 7;
        values[valuesById[8] = "ERROR_CODES_GAME_ALREADY_EXISTS"] = 8;
        values[valuesById[9] = "ERROR_CODES_GAME_LOCKED"] = 9;
        values[valuesById[10] = "ERROR_CODES_GAME_EXPIRED"] = 10;
        values[valuesById[11] = "ERROR_CODES_ALREADY_JOINED"] = 11;
        return values;
    })();

    shared.CodedError = (function() {

        /**
         * Properties of a CodedError.
         * @memberof shared
         * @interface ICodedError
         * @property {shared.ErrorCodes|null} [code] CodedError code
         * @property {string|null} [error] CodedError error
         */

        /**
         * Constructs a new CodedError.
         * @memberof shared
         * @classdesc Represents a CodedError.
         * @implements ICodedError
         * @constructor
         * @param {shared.ICodedError=} [properties] Properties to set
         */
        function CodedError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CodedError code.
         * @member {shared.ErrorCodes} code
         * @memberof shared.CodedError
         * @instance
         */
        CodedError.prototype.code = 0;

        /**
         * CodedError error.
         * @member {string|null|undefined} error
         * @memberof shared.CodedError
         * @instance
         */
        CodedError.prototype.error = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CodedError.prototype, "_error", {
            get: $util.oneOfGetter($oneOfFields = ["error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CodedError instance using the specified properties.
         * @function create
         * @memberof shared.CodedError
         * @static
         * @param {shared.ICodedError=} [properties] Properties to set
         * @returns {shared.CodedError} CodedError instance
         */
        CodedError.create = function create(properties) {
            return new CodedError(properties);
        };

        /**
         * Encodes the specified CodedError message. Does not implicitly {@link shared.CodedError.verify|verify} messages.
         * @function encode
         * @memberof shared.CodedError
         * @static
         * @param {shared.ICodedError} message CodedError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CodedError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
            return writer;
        };

        /**
         * Encodes the specified CodedError message, length delimited. Does not implicitly {@link shared.CodedError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shared.CodedError
         * @static
         * @param {shared.ICodedError} message CodedError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CodedError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CodedError message from the specified reader or buffer.
         * @function decode
         * @memberof shared.CodedError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shared.CodedError} CodedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CodedError.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shared.CodedError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.error = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CodedError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shared.CodedError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shared.CodedError} CodedError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CodedError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CodedError message.
         * @function verify
         * @memberof shared.CodedError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CodedError.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    break;
                }
            if (message.error != null && message.hasOwnProperty("error")) {
                properties._error = 1;
                if (!$util.isString(message.error))
                    return "error: string expected";
            }
            return null;
        };

        /**
         * Creates a CodedError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shared.CodedError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shared.CodedError} CodedError
         */
        CodedError.fromObject = function fromObject(object, long) {
            if (object instanceof $root.shared.CodedError)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.shared.CodedError();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "ERROR_CODES_UNSPECIFIED":
            case 0:
                message.code = 0;
                break;
            case "ERROR_CODES_SERVER_ERROR":
            case 1:
                message.code = 1;
                break;
            case "ERROR_CODES_BAD_LOBBY_CODE":
            case 2:
                message.code = 2;
                break;
            case "ERROR_CODES_BAD_DATA":
            case 3:
                message.code = 3;
                break;
            case "ERROR_CODES_BAD_TURN":
            case 4:
                message.code = 4;
                break;
            case "ERROR_CODES_LOBBY_CREATE_FAIL":
            case 5:
                message.code = 5;
                break;
            case "ERROR_CODES_UNAUTHORISED":
            case 6:
                message.code = 6;
                break;
            case "ERROR_CODES_NOT_A_MEMBER":
            case 7:
                message.code = 7;
                break;
            case "ERROR_CODES_GAME_ALREADY_EXISTS":
            case 8:
                message.code = 8;
                break;
            case "ERROR_CODES_GAME_LOCKED":
            case 9:
                message.code = 9;
                break;
            case "ERROR_CODES_GAME_EXPIRED":
            case 10:
                message.code = 10;
                break;
            case "ERROR_CODES_ALREADY_JOINED":
            case 11:
                message.code = 11;
                break;
            }
            if (object.error != null)
                message.error = String(object.error);
            return message;
        };

        /**
         * Creates a plain object from a CodedError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shared.CodedError
         * @static
         * @param {shared.CodedError} message CodedError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CodedError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = options.enums === String ? "ERROR_CODES_UNSPECIFIED" : 0;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.shared.ErrorCodes[message.code] === undefined ? message.code : $root.shared.ErrorCodes[message.code] : message.code;
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = message.error;
                if (options.oneofs)
                    object._error = "error";
            }
            return object;
        };

        /**
         * Converts this CodedError to JSON.
         * @function toJSON
         * @memberof shared.CodedError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CodedError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CodedError
         * @function getTypeUrl
         * @memberof shared.CodedError
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CodedError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/shared.CodedError";
        };

        return CodedError;
    })();

    /**
     * PlayerTypes enum.
     * @name shared.PlayerTypes
     * @enum {number}
     * @property {number} PLAYER_TYPES_UNSPECIFIED=0 PLAYER_TYPES_UNSPECIFIED value
     * @property {number} PLAYER_TYPES_PLAYER=1 PLAYER_TYPES_PLAYER value
     * @property {number} PLAYER_TYPES_SPECTATOR=2 PLAYER_TYPES_SPECTATOR value
     */
    shared.PlayerTypes = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PLAYER_TYPES_UNSPECIFIED"] = 0;
        values[valuesById[1] = "PLAYER_TYPES_PLAYER"] = 1;
        values[valuesById[2] = "PLAYER_TYPES_SPECTATOR"] = 2;
        return values;
    })();

    /**
     * PlayerIDs enum.
     * @name shared.PlayerIDs
     * @enum {number}
     * @property {number} PLAYER_IDS_UNSPECIFIED=0 PLAYER_IDS_UNSPECIFIED value
     * @property {number} PLAYER_IDS_PLAYER1=1 PLAYER_IDS_PLAYER1 value
     * @property {number} PLAYER_IDS_PLAYER2=2 PLAYER_IDS_PLAYER2 value
     */
    shared.PlayerIDs = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PLAYER_IDS_UNSPECIFIED"] = 0;
        values[valuesById[1] = "PLAYER_IDS_PLAYER1"] = 1;
        values[valuesById[2] = "PLAYER_IDS_PLAYER2"] = 2;
        return values;
    })();

    shared.GameRow = (function() {

        /**
         * Properties of a GameRow.
         * @memberof shared
         * @interface IGameRow
         * @property {Array.<shared.PlayerIDs>|null} [columns] GameRow columns
         */

        /**
         * Constructs a new GameRow.
         * @memberof shared
         * @classdesc Represents a GameRow.
         * @implements IGameRow
         * @constructor
         * @param {shared.IGameRow=} [properties] Properties to set
         */
        function GameRow(properties) {
            this.columns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRow columns.
         * @member {Array.<shared.PlayerIDs>} columns
         * @memberof shared.GameRow
         * @instance
         */
        GameRow.prototype.columns = $util.emptyArray;

        /**
         * Creates a new GameRow instance using the specified properties.
         * @function create
         * @memberof shared.GameRow
         * @static
         * @param {shared.IGameRow=} [properties] Properties to set
         * @returns {shared.GameRow} GameRow instance
         */
        GameRow.create = function create(properties) {
            return new GameRow(properties);
        };

        /**
         * Encodes the specified GameRow message. Does not implicitly {@link shared.GameRow.verify|verify} messages.
         * @function encode
         * @memberof shared.GameRow
         * @static
         * @param {shared.IGameRow} message GameRow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.columns != null && message.columns.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.columns.length; ++i)
                    writer.int32(message.columns[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GameRow message, length delimited. Does not implicitly {@link shared.GameRow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shared.GameRow
         * @static
         * @param {shared.IGameRow} message GameRow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRow message from the specified reader or buffer.
         * @function decode
         * @memberof shared.GameRow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shared.GameRow} GameRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRow.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shared.GameRow();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.columns && message.columns.length))
                            message.columns = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.columns.push(reader.int32());
                        } else
                            message.columns.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shared.GameRow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shared.GameRow} GameRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRow message.
         * @function verify
         * @memberof shared.GameRow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRow.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i)
                    switch (message.columns[i]) {
                    default:
                        return "columns: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a GameRow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shared.GameRow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shared.GameRow} GameRow
         */
        GameRow.fromObject = function fromObject(object, long) {
            if (object instanceof $root.shared.GameRow)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.shared.GameRow();
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".shared.GameRow.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i)
                    switch (object.columns[i]) {
                    default:
                        if (typeof object.columns[i] === "number") {
                            message.columns[i] = object.columns[i];
                            break;
                        }
                    case "PLAYER_IDS_UNSPECIFIED":
                    case 0:
                        message.columns[i] = 0;
                        break;
                    case "PLAYER_IDS_PLAYER1":
                    case 1:
                        message.columns[i] = 1;
                        break;
                    case "PLAYER_IDS_PLAYER2":
                    case 2:
                        message.columns[i] = 2;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameRow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shared.GameRow
         * @static
         * @param {shared.GameRow} message GameRow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.columns = [];
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = options.enums === String ? $root.shared.PlayerIDs[message.columns[j]] === undefined ? message.columns[j] : $root.shared.PlayerIDs[message.columns[j]] : message.columns[j];
            }
            return object;
        };

        /**
         * Converts this GameRow to JSON.
         * @function toJSON
         * @memberof shared.GameRow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameRow
         * @function getTypeUrl
         * @memberof shared.GameRow
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameRow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/shared.GameRow";
        };

        return GameRow;
    })();

    shared.GameBoard = (function() {

        /**
         * Properties of a GameBoard.
         * @memberof shared
         * @interface IGameBoard
         * @property {Array.<shared.IGameRow>|null} [rows] GameBoard rows
         */

        /**
         * Constructs a new GameBoard.
         * @memberof shared
         * @classdesc Represents a GameBoard.
         * @implements IGameBoard
         * @constructor
         * @param {shared.IGameBoard=} [properties] Properties to set
         */
        function GameBoard(properties) {
            this.rows = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameBoard rows.
         * @member {Array.<shared.IGameRow>} rows
         * @memberof shared.GameBoard
         * @instance
         */
        GameBoard.prototype.rows = $util.emptyArray;

        /**
         * Creates a new GameBoard instance using the specified properties.
         * @function create
         * @memberof shared.GameBoard
         * @static
         * @param {shared.IGameBoard=} [properties] Properties to set
         * @returns {shared.GameBoard} GameBoard instance
         */
        GameBoard.create = function create(properties) {
            return new GameBoard(properties);
        };

        /**
         * Encodes the specified GameBoard message. Does not implicitly {@link shared.GameBoard.verify|verify} messages.
         * @function encode
         * @memberof shared.GameBoard
         * @static
         * @param {shared.IGameBoard} message GameBoard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBoard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rows != null && message.rows.length)
                for (let i = 0; i < message.rows.length; ++i)
                    $root.shared.GameRow.encode(message.rows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameBoard message, length delimited. Does not implicitly {@link shared.GameBoard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof shared.GameBoard
         * @static
         * @param {shared.IGameBoard} message GameBoard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBoard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBoard message from the specified reader or buffer.
         * @function decode
         * @memberof shared.GameBoard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {shared.GameBoard} GameBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBoard.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.shared.GameBoard();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.rows && message.rows.length))
                            message.rows = [];
                        message.rows.push($root.shared.GameRow.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameBoard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof shared.GameBoard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {shared.GameBoard} GameBoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBoard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameBoard message.
         * @function verify
         * @memberof shared.GameBoard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameBoard.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.rows != null && message.hasOwnProperty("rows")) {
                if (!Array.isArray(message.rows))
                    return "rows: array expected";
                for (let i = 0; i < message.rows.length; ++i) {
                    let error = $root.shared.GameRow.verify(message.rows[i], long + 1);
                    if (error)
                        return "rows." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameBoard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof shared.GameBoard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {shared.GameBoard} GameBoard
         */
        GameBoard.fromObject = function fromObject(object, long) {
            if (object instanceof $root.shared.GameBoard)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.shared.GameBoard();
            if (object.rows) {
                if (!Array.isArray(object.rows))
                    throw TypeError(".shared.GameBoard.rows: array expected");
                message.rows = [];
                for (let i = 0; i < object.rows.length; ++i) {
                    if (typeof object.rows[i] !== "object")
                        throw TypeError(".shared.GameBoard.rows: object expected");
                    message.rows[i] = $root.shared.GameRow.fromObject(object.rows[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameBoard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof shared.GameBoard
         * @static
         * @param {shared.GameBoard} message GameBoard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameBoard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.rows = [];
            if (message.rows && message.rows.length) {
                object.rows = [];
                for (let j = 0; j < message.rows.length; ++j)
                    object.rows[j] = $root.shared.GameRow.toObject(message.rows[j], options);
            }
            return object;
        };

        /**
         * Converts this GameBoard to JSON.
         * @function toJSON
         * @memberof shared.GameBoard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBoard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GameBoard
         * @function getTypeUrl
         * @memberof shared.GameBoard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GameBoard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/shared.GameBoard";
        };

        return GameBoard;
    })();

    return shared;
})();

export const routes = $root.routes = (() => {

    /**
     * Namespace routes.
     * @exports routes
     * @namespace
     */
    const routes = {};

    routes.GetGameResponse = (function() {

        /**
         * Properties of a GetGameResponse.
         * @memberof routes
         * @interface IGetGameResponse
         * @property {models.IGame|null} [game] GetGameResponse game
         */

        /**
         * Constructs a new GetGameResponse.
         * @memberof routes
         * @classdesc Represents a GetGameResponse.
         * @implements IGetGameResponse
         * @constructor
         * @param {routes.IGetGameResponse=} [properties] Properties to set
         */
        function GetGameResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGameResponse game.
         * @member {models.IGame|null|undefined} game
         * @memberof routes.GetGameResponse
         * @instance
         */
        GetGameResponse.prototype.game = null;

        /**
         * Creates a new GetGameResponse instance using the specified properties.
         * @function create
         * @memberof routes.GetGameResponse
         * @static
         * @param {routes.IGetGameResponse=} [properties] Properties to set
         * @returns {routes.GetGameResponse} GetGameResponse instance
         */
        GetGameResponse.create = function create(properties) {
            return new GetGameResponse(properties);
        };

        /**
         * Encodes the specified GetGameResponse message. Does not implicitly {@link routes.GetGameResponse.verify|verify} messages.
         * @function encode
         * @memberof routes.GetGameResponse
         * @static
         * @param {routes.IGetGameResponse} message GetGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game != null && Object.hasOwnProperty.call(message, "game"))
                $root.models.Game.encode(message.game, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetGameResponse message, length delimited. Does not implicitly {@link routes.GetGameResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.GetGameResponse
         * @static
         * @param {routes.IGetGameResponse} message GetGameResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGameResponse message from the specified reader or buffer.
         * @function decode
         * @memberof routes.GetGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.GetGameResponse} GetGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameResponse.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.GetGameResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.game = $root.models.Game.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGameResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.GetGameResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.GetGameResponse} GetGameResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGameResponse message.
         * @function verify
         * @memberof routes.GetGameResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGameResponse.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.game != null && message.hasOwnProperty("game")) {
                let error = $root.models.Game.verify(message.game, long + 1);
                if (error)
                    return "game." + error;
            }
            return null;
        };

        /**
         * Creates a GetGameResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.GetGameResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.GetGameResponse} GetGameResponse
         */
        GetGameResponse.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.GetGameResponse)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.GetGameResponse();
            if (object.game != null) {
                if (typeof object.game !== "object")
                    throw TypeError(".routes.GetGameResponse.game: object expected");
                message.game = $root.models.Game.fromObject(object.game, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetGameResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.GetGameResponse
         * @static
         * @param {routes.GetGameResponse} message GetGameResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGameResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.game = null;
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = $root.models.Game.toObject(message.game, options);
            return object;
        };

        /**
         * Converts this GetGameResponse to JSON.
         * @function toJSON
         * @memberof routes.GetGameResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGameResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGameResponse
         * @function getTypeUrl
         * @memberof routes.GetGameResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGameResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.GetGameResponse";
        };

        return GetGameResponse;
    })();

    routes.GetGameRequest = (function() {

        /**
         * Properties of a GetGameRequest.
         * @memberof routes
         * @interface IGetGameRequest
         * @property {string|null} [code] GetGameRequest code
         */

        /**
         * Constructs a new GetGameRequest.
         * @memberof routes
         * @classdesc Represents a GetGameRequest.
         * @implements IGetGameRequest
         * @constructor
         * @param {routes.IGetGameRequest=} [properties] Properties to set
         */
        function GetGameRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetGameRequest code.
         * @member {string} code
         * @memberof routes.GetGameRequest
         * @instance
         */
        GetGameRequest.prototype.code = "";

        /**
         * Creates a new GetGameRequest instance using the specified properties.
         * @function create
         * @memberof routes.GetGameRequest
         * @static
         * @param {routes.IGetGameRequest=} [properties] Properties to set
         * @returns {routes.GetGameRequest} GetGameRequest instance
         */
        GetGameRequest.create = function create(properties) {
            return new GetGameRequest(properties);
        };

        /**
         * Encodes the specified GetGameRequest message. Does not implicitly {@link routes.GetGameRequest.verify|verify} messages.
         * @function encode
         * @memberof routes.GetGameRequest
         * @static
         * @param {routes.IGetGameRequest} message GetGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified GetGameRequest message, length delimited. Does not implicitly {@link routes.GetGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.GetGameRequest
         * @static
         * @param {routes.IGetGameRequest} message GetGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof routes.GetGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.GetGameRequest} GetGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameRequest.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.GetGameRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.GetGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.GetGameRequest} GetGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetGameRequest message.
         * @function verify
         * @memberof routes.GetGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetGameRequest.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a GetGameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.GetGameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.GetGameRequest} GetGameRequest
         */
        GetGameRequest.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.GetGameRequest)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.GetGameRequest();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a GetGameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.GetGameRequest
         * @static
         * @param {routes.GetGameRequest} message GetGameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetGameRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this GetGameRequest to JSON.
         * @function toJSON
         * @memberof routes.GetGameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetGameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetGameRequest
         * @function getTypeUrl
         * @memberof routes.GetGameRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetGameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.GetGameRequest";
        };

        return GetGameRequest;
    })();

    routes.CreateGameRequest = (function() {

        /**
         * Properties of a CreateGameRequest.
         * @memberof routes
         * @interface ICreateGameRequest
         * @property {string|null} [code] CreateGameRequest code
         */

        /**
         * Constructs a new CreateGameRequest.
         * @memberof routes
         * @classdesc Represents a CreateGameRequest.
         * @implements ICreateGameRequest
         * @constructor
         * @param {routes.ICreateGameRequest=} [properties] Properties to set
         */
        function CreateGameRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGameRequest code.
         * @member {string} code
         * @memberof routes.CreateGameRequest
         * @instance
         */
        CreateGameRequest.prototype.code = "";

        /**
         * Creates a new CreateGameRequest instance using the specified properties.
         * @function create
         * @memberof routes.CreateGameRequest
         * @static
         * @param {routes.ICreateGameRequest=} [properties] Properties to set
         * @returns {routes.CreateGameRequest} CreateGameRequest instance
         */
        CreateGameRequest.create = function create(properties) {
            return new CreateGameRequest(properties);
        };

        /**
         * Encodes the specified CreateGameRequest message. Does not implicitly {@link routes.CreateGameRequest.verify|verify} messages.
         * @function encode
         * @memberof routes.CreateGameRequest
         * @static
         * @param {routes.ICreateGameRequest} message CreateGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified CreateGameRequest message, length delimited. Does not implicitly {@link routes.CreateGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.CreateGameRequest
         * @static
         * @param {routes.ICreateGameRequest} message CreateGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof routes.CreateGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.CreateGameRequest} CreateGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGameRequest.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.CreateGameRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.CreateGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.CreateGameRequest} CreateGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGameRequest message.
         * @function verify
         * @memberof routes.CreateGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGameRequest.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a CreateGameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.CreateGameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.CreateGameRequest} CreateGameRequest
         */
        CreateGameRequest.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.CreateGameRequest)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.CreateGameRequest();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a CreateGameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.CreateGameRequest
         * @static
         * @param {routes.CreateGameRequest} message CreateGameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGameRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this CreateGameRequest to JSON.
         * @function toJSON
         * @memberof routes.CreateGameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateGameRequest
         * @function getTypeUrl
         * @memberof routes.CreateGameRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateGameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.CreateGameRequest";
        };

        return CreateGameRequest;
    })();

    routes.GetLobbiesResponse = (function() {

        /**
         * Properties of a GetLobbiesResponse.
         * @memberof routes
         * @interface IGetLobbiesResponse
         * @property {Array.<models.ILobby>|null} [lobbies] GetLobbiesResponse lobbies
         */

        /**
         * Constructs a new GetLobbiesResponse.
         * @memberof routes
         * @classdesc Represents a GetLobbiesResponse.
         * @implements IGetLobbiesResponse
         * @constructor
         * @param {routes.IGetLobbiesResponse=} [properties] Properties to set
         */
        function GetLobbiesResponse(properties) {
            this.lobbies = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLobbiesResponse lobbies.
         * @member {Array.<models.ILobby>} lobbies
         * @memberof routes.GetLobbiesResponse
         * @instance
         */
        GetLobbiesResponse.prototype.lobbies = $util.emptyArray;

        /**
         * Creates a new GetLobbiesResponse instance using the specified properties.
         * @function create
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {routes.IGetLobbiesResponse=} [properties] Properties to set
         * @returns {routes.GetLobbiesResponse} GetLobbiesResponse instance
         */
        GetLobbiesResponse.create = function create(properties) {
            return new GetLobbiesResponse(properties);
        };

        /**
         * Encodes the specified GetLobbiesResponse message. Does not implicitly {@link routes.GetLobbiesResponse.verify|verify} messages.
         * @function encode
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {routes.IGetLobbiesResponse} message GetLobbiesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLobbiesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lobbies != null && message.lobbies.length)
                for (let i = 0; i < message.lobbies.length; ++i)
                    $root.models.Lobby.encode(message.lobbies[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetLobbiesResponse message, length delimited. Does not implicitly {@link routes.GetLobbiesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {routes.IGetLobbiesResponse} message GetLobbiesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLobbiesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLobbiesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.GetLobbiesResponse} GetLobbiesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLobbiesResponse.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.GetLobbiesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.lobbies && message.lobbies.length))
                            message.lobbies = [];
                        message.lobbies.push($root.models.Lobby.decode(reader, reader.uint32(), undefined, long + 1));
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetLobbiesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.GetLobbiesResponse} GetLobbiesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLobbiesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLobbiesResponse message.
         * @function verify
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLobbiesResponse.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.lobbies != null && message.hasOwnProperty("lobbies")) {
                if (!Array.isArray(message.lobbies))
                    return "lobbies: array expected";
                for (let i = 0; i < message.lobbies.length; ++i) {
                    let error = $root.models.Lobby.verify(message.lobbies[i], long + 1);
                    if (error)
                        return "lobbies." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetLobbiesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.GetLobbiesResponse} GetLobbiesResponse
         */
        GetLobbiesResponse.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.GetLobbiesResponse)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.GetLobbiesResponse();
            if (object.lobbies) {
                if (!Array.isArray(object.lobbies))
                    throw TypeError(".routes.GetLobbiesResponse.lobbies: array expected");
                message.lobbies = [];
                for (let i = 0; i < object.lobbies.length; ++i) {
                    if (typeof object.lobbies[i] !== "object")
                        throw TypeError(".routes.GetLobbiesResponse.lobbies: object expected");
                    message.lobbies[i] = $root.models.Lobby.fromObject(object.lobbies[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetLobbiesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {routes.GetLobbiesResponse} message GetLobbiesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLobbiesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lobbies = [];
            if (message.lobbies && message.lobbies.length) {
                object.lobbies = [];
                for (let j = 0; j < message.lobbies.length; ++j)
                    object.lobbies[j] = $root.models.Lobby.toObject(message.lobbies[j], options);
            }
            return object;
        };

        /**
         * Converts this GetLobbiesResponse to JSON.
         * @function toJSON
         * @memberof routes.GetLobbiesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLobbiesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetLobbiesResponse
         * @function getTypeUrl
         * @memberof routes.GetLobbiesResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetLobbiesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.GetLobbiesResponse";
        };

        return GetLobbiesResponse;
    })();

    routes.GetLobbyResponse = (function() {

        /**
         * Properties of a GetLobbyResponse.
         * @memberof routes
         * @interface IGetLobbyResponse
         * @property {models.ILobby|null} [lobby] GetLobbyResponse lobby
         */

        /**
         * Constructs a new GetLobbyResponse.
         * @memberof routes
         * @classdesc Represents a GetLobbyResponse.
         * @implements IGetLobbyResponse
         * @constructor
         * @param {routes.IGetLobbyResponse=} [properties] Properties to set
         */
        function GetLobbyResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLobbyResponse lobby.
         * @member {models.ILobby|null|undefined} lobby
         * @memberof routes.GetLobbyResponse
         * @instance
         */
        GetLobbyResponse.prototype.lobby = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(GetLobbyResponse.prototype, "_lobby", {
            get: $util.oneOfGetter($oneOfFields = ["lobby"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GetLobbyResponse instance using the specified properties.
         * @function create
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {routes.IGetLobbyResponse=} [properties] Properties to set
         * @returns {routes.GetLobbyResponse} GetLobbyResponse instance
         */
        GetLobbyResponse.create = function create(properties) {
            return new GetLobbyResponse(properties);
        };

        /**
         * Encodes the specified GetLobbyResponse message. Does not implicitly {@link routes.GetLobbyResponse.verify|verify} messages.
         * @function encode
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {routes.IGetLobbyResponse} message GetLobbyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLobbyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lobby != null && Object.hasOwnProperty.call(message, "lobby"))
                $root.models.Lobby.encode(message.lobby, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetLobbyResponse message, length delimited. Does not implicitly {@link routes.GetLobbyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {routes.IGetLobbyResponse} message GetLobbyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLobbyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLobbyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.GetLobbyResponse} GetLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLobbyResponse.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.GetLobbyResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lobby = $root.models.Lobby.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetLobbyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.GetLobbyResponse} GetLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLobbyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLobbyResponse message.
         * @function verify
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLobbyResponse.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.lobby != null && message.hasOwnProperty("lobby")) {
                properties._lobby = 1;
                {
                    let error = $root.models.Lobby.verify(message.lobby, long + 1);
                    if (error)
                        return "lobby." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetLobbyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.GetLobbyResponse} GetLobbyResponse
         */
        GetLobbyResponse.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.GetLobbyResponse)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.GetLobbyResponse();
            if (object.lobby != null) {
                if (typeof object.lobby !== "object")
                    throw TypeError(".routes.GetLobbyResponse.lobby: object expected");
                message.lobby = $root.models.Lobby.fromObject(object.lobby, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetLobbyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {routes.GetLobbyResponse} message GetLobbyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLobbyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.lobby != null && message.hasOwnProperty("lobby")) {
                object.lobby = $root.models.Lobby.toObject(message.lobby, options);
                if (options.oneofs)
                    object._lobby = "lobby";
            }
            return object;
        };

        /**
         * Converts this GetLobbyResponse to JSON.
         * @function toJSON
         * @memberof routes.GetLobbyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLobbyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetLobbyResponse
         * @function getTypeUrl
         * @memberof routes.GetLobbyResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetLobbyResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.GetLobbyResponse";
        };

        return GetLobbyResponse;
    })();

    routes.CreateLobbyResponse = (function() {

        /**
         * Properties of a CreateLobbyResponse.
         * @memberof routes
         * @interface ICreateLobbyResponse
         * @property {string|null} [code] CreateLobbyResponse code
         */

        /**
         * Constructs a new CreateLobbyResponse.
         * @memberof routes
         * @classdesc Represents a CreateLobbyResponse.
         * @implements ICreateLobbyResponse
         * @constructor
         * @param {routes.ICreateLobbyResponse=} [properties] Properties to set
         */
        function CreateLobbyResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateLobbyResponse code.
         * @member {string} code
         * @memberof routes.CreateLobbyResponse
         * @instance
         */
        CreateLobbyResponse.prototype.code = "";

        /**
         * Creates a new CreateLobbyResponse instance using the specified properties.
         * @function create
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {routes.ICreateLobbyResponse=} [properties] Properties to set
         * @returns {routes.CreateLobbyResponse} CreateLobbyResponse instance
         */
        CreateLobbyResponse.create = function create(properties) {
            return new CreateLobbyResponse(properties);
        };

        /**
         * Encodes the specified CreateLobbyResponse message. Does not implicitly {@link routes.CreateLobbyResponse.verify|verify} messages.
         * @function encode
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {routes.ICreateLobbyResponse} message CreateLobbyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLobbyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified CreateLobbyResponse message, length delimited. Does not implicitly {@link routes.CreateLobbyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {routes.ICreateLobbyResponse} message CreateLobbyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLobbyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateLobbyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.CreateLobbyResponse} CreateLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLobbyResponse.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.CreateLobbyResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateLobbyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.CreateLobbyResponse} CreateLobbyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLobbyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateLobbyResponse message.
         * @function verify
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateLobbyResponse.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a CreateLobbyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.CreateLobbyResponse} CreateLobbyResponse
         */
        CreateLobbyResponse.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.CreateLobbyResponse)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.CreateLobbyResponse();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a CreateLobbyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {routes.CreateLobbyResponse} message CreateLobbyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateLobbyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this CreateLobbyResponse to JSON.
         * @function toJSON
         * @memberof routes.CreateLobbyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateLobbyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateLobbyResponse
         * @function getTypeUrl
         * @memberof routes.CreateLobbyResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateLobbyResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.CreateLobbyResponse";
        };

        return CreateLobbyResponse;
    })();

    routes.JoinLobbyRequest = (function() {

        /**
         * Properties of a JoinLobbyRequest.
         * @memberof routes
         * @interface IJoinLobbyRequest
         * @property {string|null} [code] JoinLobbyRequest code
         */

        /**
         * Constructs a new JoinLobbyRequest.
         * @memberof routes
         * @classdesc Represents a JoinLobbyRequest.
         * @implements IJoinLobbyRequest
         * @constructor
         * @param {routes.IJoinLobbyRequest=} [properties] Properties to set
         */
        function JoinLobbyRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinLobbyRequest code.
         * @member {string} code
         * @memberof routes.JoinLobbyRequest
         * @instance
         */
        JoinLobbyRequest.prototype.code = "";

        /**
         * Creates a new JoinLobbyRequest instance using the specified properties.
         * @function create
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {routes.IJoinLobbyRequest=} [properties] Properties to set
         * @returns {routes.JoinLobbyRequest} JoinLobbyRequest instance
         */
        JoinLobbyRequest.create = function create(properties) {
            return new JoinLobbyRequest(properties);
        };

        /**
         * Encodes the specified JoinLobbyRequest message. Does not implicitly {@link routes.JoinLobbyRequest.verify|verify} messages.
         * @function encode
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {routes.IJoinLobbyRequest} message JoinLobbyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinLobbyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified JoinLobbyRequest message, length delimited. Does not implicitly {@link routes.JoinLobbyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {routes.IJoinLobbyRequest} message JoinLobbyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinLobbyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinLobbyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.JoinLobbyRequest} JoinLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinLobbyRequest.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.JoinLobbyRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinLobbyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.JoinLobbyRequest} JoinLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinLobbyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinLobbyRequest message.
         * @function verify
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinLobbyRequest.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            return null;
        };

        /**
         * Creates a JoinLobbyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.JoinLobbyRequest} JoinLobbyRequest
         */
        JoinLobbyRequest.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.JoinLobbyRequest)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.JoinLobbyRequest();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a JoinLobbyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {routes.JoinLobbyRequest} message JoinLobbyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinLobbyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this JoinLobbyRequest to JSON.
         * @function toJSON
         * @memberof routes.JoinLobbyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinLobbyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for JoinLobbyRequest
         * @function getTypeUrl
         * @memberof routes.JoinLobbyRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        JoinLobbyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.JoinLobbyRequest";
        };

        return JoinLobbyRequest;
    })();

    return routes;
})();

export const ws = $root.ws = (() => {

    /**
     * Namespace ws.
     * @exports ws
     * @namespace
     */
    const ws = {};

    ws.WSGameInit = (function() {

        /**
         * Properties of a WSGameInit.
         * @memberof ws
         * @interface IWSGameInit
         * @property {string|null} [lobbyCode] WSGameInit lobbyCode
         */

        /**
         * Constructs a new WSGameInit.
         * @memberof ws
         * @classdesc Represents a WSGameInit.
         * @implements IWSGameInit
         * @constructor
         * @param {ws.IWSGameInit=} [properties] Properties to set
         */
        function WSGameInit(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WSGameInit lobbyCode.
         * @member {string} lobbyCode
         * @memberof ws.WSGameInit
         * @instance
         */
        WSGameInit.prototype.lobbyCode = "";

        /**
         * Creates a new WSGameInit instance using the specified properties.
         * @function create
         * @memberof ws.WSGameInit
         * @static
         * @param {ws.IWSGameInit=} [properties] Properties to set
         * @returns {ws.WSGameInit} WSGameInit instance
         */
        WSGameInit.create = function create(properties) {
            return new WSGameInit(properties);
        };

        /**
         * Encodes the specified WSGameInit message. Does not implicitly {@link ws.WSGameInit.verify|verify} messages.
         * @function encode
         * @memberof ws.WSGameInit
         * @static
         * @param {ws.IWSGameInit} message WSGameInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameInit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lobbyCode != null && Object.hasOwnProperty.call(message, "lobbyCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lobbyCode);
            return writer;
        };

        /**
         * Encodes the specified WSGameInit message, length delimited. Does not implicitly {@link ws.WSGameInit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.WSGameInit
         * @static
         * @param {ws.IWSGameInit} message WSGameInit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameInit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WSGameInit message from the specified reader or buffer.
         * @function decode
         * @memberof ws.WSGameInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.WSGameInit} WSGameInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameInit.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WSGameInit();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lobbyCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WSGameInit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.WSGameInit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.WSGameInit} WSGameInit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameInit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WSGameInit message.
         * @function verify
         * @memberof ws.WSGameInit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WSGameInit.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.lobbyCode != null && message.hasOwnProperty("lobbyCode"))
                if (!$util.isString(message.lobbyCode))
                    return "lobbyCode: string expected";
            return null;
        };

        /**
         * Creates a WSGameInit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.WSGameInit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.WSGameInit} WSGameInit
         */
        WSGameInit.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.WSGameInit)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.WSGameInit();
            if (object.lobbyCode != null)
                message.lobbyCode = String(object.lobbyCode);
            return message;
        };

        /**
         * Creates a plain object from a WSGameInit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.WSGameInit
         * @static
         * @param {ws.WSGameInit} message WSGameInit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WSGameInit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.lobbyCode = "";
            if (message.lobbyCode != null && message.hasOwnProperty("lobbyCode"))
                object.lobbyCode = message.lobbyCode;
            return object;
        };

        /**
         * Converts this WSGameInit to JSON.
         * @function toJSON
         * @memberof ws.WSGameInit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WSGameInit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WSGameInit
         * @function getTypeUrl
         * @memberof ws.WSGameInit
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WSGameInit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.WSGameInit";
        };

        return WSGameInit;
    })();

    ws.WSGameInsertTile = (function() {

        /**
         * Properties of a WSGameInsertTile.
         * @memberof ws
         * @interface IWSGameInsertTile
         * @property {number|null} [column] WSGameInsertTile column
         */

        /**
         * Constructs a new WSGameInsertTile.
         * @memberof ws
         * @classdesc Represents a WSGameInsertTile.
         * @implements IWSGameInsertTile
         * @constructor
         * @param {ws.IWSGameInsertTile=} [properties] Properties to set
         */
        function WSGameInsertTile(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WSGameInsertTile column.
         * @member {number} column
         * @memberof ws.WSGameInsertTile
         * @instance
         */
        WSGameInsertTile.prototype.column = 0;

        /**
         * Creates a new WSGameInsertTile instance using the specified properties.
         * @function create
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {ws.IWSGameInsertTile=} [properties] Properties to set
         * @returns {ws.WSGameInsertTile} WSGameInsertTile instance
         */
        WSGameInsertTile.create = function create(properties) {
            return new WSGameInsertTile(properties);
        };

        /**
         * Encodes the specified WSGameInsertTile message. Does not implicitly {@link ws.WSGameInsertTile.verify|verify} messages.
         * @function encode
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {ws.IWSGameInsertTile} message WSGameInsertTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameInsertTile.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.column);
            return writer;
        };

        /**
         * Encodes the specified WSGameInsertTile message, length delimited. Does not implicitly {@link ws.WSGameInsertTile.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {ws.IWSGameInsertTile} message WSGameInsertTile message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameInsertTile.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WSGameInsertTile message from the specified reader or buffer.
         * @function decode
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.WSGameInsertTile} WSGameInsertTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameInsertTile.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WSGameInsertTile();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.column = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WSGameInsertTile message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.WSGameInsertTile} WSGameInsertTile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameInsertTile.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WSGameInsertTile message.
         * @function verify
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WSGameInsertTile.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isInteger(message.column))
                    return "column: integer expected";
            return null;
        };

        /**
         * Creates a WSGameInsertTile message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.WSGameInsertTile} WSGameInsertTile
         */
        WSGameInsertTile.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.WSGameInsertTile)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.WSGameInsertTile();
            if (object.column != null)
                message.column = object.column | 0;
            return message;
        };

        /**
         * Creates a plain object from a WSGameInsertTile message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {ws.WSGameInsertTile} message WSGameInsertTile
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WSGameInsertTile.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.column = 0;
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            return object;
        };

        /**
         * Converts this WSGameInsertTile to JSON.
         * @function toJSON
         * @memberof ws.WSGameInsertTile
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WSGameInsertTile.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WSGameInsertTile
         * @function getTypeUrl
         * @memberof ws.WSGameInsertTile
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WSGameInsertTile.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.WSGameInsertTile";
        };

        return WSGameInsertTile;
    })();

    /**
     * WSGameActions enum.
     * @name ws.WSGameActions
     * @enum {number}
     * @property {number} WS_GAME_ACTIONS_UNSPECIFIED=0 WS_GAME_ACTIONS_UNSPECIFIED value
     * @property {number} WS_GAME_ACTIONS_INIT=1 WS_GAME_ACTIONS_INIT value
     * @property {number} WS_GAME_ACTIONS_INSERT_TILE=2 WS_GAME_ACTIONS_INSERT_TILE value
     */
    ws.WSGameActions = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WS_GAME_ACTIONS_UNSPECIFIED"] = 0;
        values[valuesById[1] = "WS_GAME_ACTIONS_INIT"] = 1;
        values[valuesById[2] = "WS_GAME_ACTIONS_INSERT_TILE"] = 2;
        return values;
    })();

    ws.WSGamePacket = (function() {

        /**
         * Properties of a WSGamePacket.
         * @memberof ws
         * @interface IWSGamePacket
         * @property {ws.WSGameActions|null} [action] WSGamePacket action
         * @property {ws.IWSGameInit|null} [init] WSGamePacket init
         * @property {ws.IWSGameInsertTile|null} [insertTile] WSGamePacket insertTile
         */

        /**
         * Constructs a new WSGamePacket.
         * @memberof ws
         * @classdesc Represents a WSGamePacket.
         * @implements IWSGamePacket
         * @constructor
         * @param {ws.IWSGamePacket=} [properties] Properties to set
         */
        function WSGamePacket(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WSGamePacket action.
         * @member {ws.WSGameActions} action
         * @memberof ws.WSGamePacket
         * @instance
         */
        WSGamePacket.prototype.action = 0;

        /**
         * WSGamePacket init.
         * @member {ws.IWSGameInit|null|undefined} init
         * @memberof ws.WSGamePacket
         * @instance
         */
        WSGamePacket.prototype.init = null;

        /**
         * WSGamePacket insertTile.
         * @member {ws.IWSGameInsertTile|null|undefined} insertTile
         * @memberof ws.WSGamePacket
         * @instance
         */
        WSGamePacket.prototype.insertTile = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WSGamePacket data.
         * @member {"init"|"insertTile"|undefined} data
         * @memberof ws.WSGamePacket
         * @instance
         */
        Object.defineProperty(WSGamePacket.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["init", "insertTile"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WSGamePacket instance using the specified properties.
         * @function create
         * @memberof ws.WSGamePacket
         * @static
         * @param {ws.IWSGamePacket=} [properties] Properties to set
         * @returns {ws.WSGamePacket} WSGamePacket instance
         */
        WSGamePacket.create = function create(properties) {
            return new WSGamePacket(properties);
        };

        /**
         * Encodes the specified WSGamePacket message. Does not implicitly {@link ws.WSGamePacket.verify|verify} messages.
         * @function encode
         * @memberof ws.WSGamePacket
         * @static
         * @param {ws.IWSGamePacket} message WSGamePacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGamePacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.action);
            if (message.init != null && Object.hasOwnProperty.call(message, "init"))
                $root.ws.WSGameInit.encode(message.init, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.insertTile != null && Object.hasOwnProperty.call(message, "insertTile"))
                $root.ws.WSGameInsertTile.encode(message.insertTile, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WSGamePacket message, length delimited. Does not implicitly {@link ws.WSGamePacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.WSGamePacket
         * @static
         * @param {ws.IWSGamePacket} message WSGamePacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGamePacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WSGamePacket message from the specified reader or buffer.
         * @function decode
         * @memberof ws.WSGamePacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.WSGamePacket} WSGamePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGamePacket.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WSGamePacket();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.action = reader.int32();
                        break;
                    }
                case 2: {
                        message.init = $root.ws.WSGameInit.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 3: {
                        message.insertTile = $root.ws.WSGameInsertTile.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WSGamePacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.WSGamePacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.WSGamePacket} WSGamePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGamePacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WSGamePacket message.
         * @function verify
         * @memberof ws.WSGamePacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WSGamePacket.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.action != null && message.hasOwnProperty("action"))
                switch (message.action) {
                default:
                    return "action: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.init != null && message.hasOwnProperty("init")) {
                properties.data = 1;
                {
                    let error = $root.ws.WSGameInit.verify(message.init, long + 1);
                    if (error)
                        return "init." + error;
                }
            }
            if (message.insertTile != null && message.hasOwnProperty("insertTile")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.ws.WSGameInsertTile.verify(message.insertTile, long + 1);
                    if (error)
                        return "insertTile." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WSGamePacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.WSGamePacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.WSGamePacket} WSGamePacket
         */
        WSGamePacket.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.WSGamePacket)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.WSGamePacket();
            switch (object.action) {
            default:
                if (typeof object.action === "number") {
                    message.action = object.action;
                    break;
                }
                break;
            case "WS_GAME_ACTIONS_UNSPECIFIED":
            case 0:
                message.action = 0;
                break;
            case "WS_GAME_ACTIONS_INIT":
            case 1:
                message.action = 1;
                break;
            case "WS_GAME_ACTIONS_INSERT_TILE":
            case 2:
                message.action = 2;
                break;
            }
            if (object.init != null) {
                if (typeof object.init !== "object")
                    throw TypeError(".ws.WSGamePacket.init: object expected");
                message.init = $root.ws.WSGameInit.fromObject(object.init, long + 1);
            }
            if (object.insertTile != null) {
                if (typeof object.insertTile !== "object")
                    throw TypeError(".ws.WSGamePacket.insertTile: object expected");
                message.insertTile = $root.ws.WSGameInsertTile.fromObject(object.insertTile, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a WSGamePacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.WSGamePacket
         * @static
         * @param {ws.WSGamePacket} message WSGamePacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WSGamePacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.action = options.enums === String ? "WS_GAME_ACTIONS_UNSPECIFIED" : 0;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = options.enums === String ? $root.ws.WSGameActions[message.action] === undefined ? message.action : $root.ws.WSGameActions[message.action] : message.action;
            if (message.init != null && message.hasOwnProperty("init")) {
                object.init = $root.ws.WSGameInit.toObject(message.init, options);
                if (options.oneofs)
                    object.data = "init";
            }
            if (message.insertTile != null && message.hasOwnProperty("insertTile")) {
                object.insertTile = $root.ws.WSGameInsertTile.toObject(message.insertTile, options);
                if (options.oneofs)
                    object.data = "insertTile";
            }
            return object;
        };

        /**
         * Converts this WSGamePacket to JSON.
         * @function toJSON
         * @memberof ws.WSGamePacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WSGamePacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WSGamePacket
         * @function getTypeUrl
         * @memberof ws.WSGamePacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WSGamePacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.WSGamePacket";
        };

        return WSGamePacket;
    })();

    ws.PartialUser = (function() {

        /**
         * Properties of a PartialUser.
         * @memberof ws
         * @interface IPartialUser
         * @property {string|null} [username] PartialUser username
         */

        /**
         * Constructs a new PartialUser.
         * @memberof ws
         * @classdesc Represents a PartialUser.
         * @implements IPartialUser
         * @constructor
         * @param {ws.IPartialUser=} [properties] Properties to set
         */
        function PartialUser(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PartialUser username.
         * @member {string} username
         * @memberof ws.PartialUser
         * @instance
         */
        PartialUser.prototype.username = "";

        /**
         * Creates a new PartialUser instance using the specified properties.
         * @function create
         * @memberof ws.PartialUser
         * @static
         * @param {ws.IPartialUser=} [properties] Properties to set
         * @returns {ws.PartialUser} PartialUser instance
         */
        PartialUser.create = function create(properties) {
            return new PartialUser(properties);
        };

        /**
         * Encodes the specified PartialUser message. Does not implicitly {@link ws.PartialUser.verify|verify} messages.
         * @function encode
         * @memberof ws.PartialUser
         * @static
         * @param {ws.IPartialUser} message PartialUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified PartialUser message, length delimited. Does not implicitly {@link ws.PartialUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.PartialUser
         * @static
         * @param {ws.IPartialUser} message PartialUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PartialUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PartialUser message from the specified reader or buffer.
         * @function decode
         * @memberof ws.PartialUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.PartialUser} PartialUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialUser.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.PartialUser();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PartialUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.PartialUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.PartialUser} PartialUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PartialUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PartialUser message.
         * @function verify
         * @memberof ws.PartialUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PartialUser.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a PartialUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.PartialUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.PartialUser} PartialUser
         */
        PartialUser.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.PartialUser)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.PartialUser();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a PartialUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.PartialUser
         * @static
         * @param {ws.PartialUser} message PartialUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PartialUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this PartialUser to JSON.
         * @function toJSON
         * @memberof ws.PartialUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PartialUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PartialUser
         * @function getTypeUrl
         * @memberof ws.PartialUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PartialUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.PartialUser";
        };

        return PartialUser;
    })();

    ws.WSGameEnd = (function() {

        /**
         * Properties of a WSGameEnd.
         * @memberof ws
         * @interface IWSGameEnd
         * @property {ws.IPartialUser|null} [user] WSGameEnd user
         * @property {boolean|null} [draw] WSGameEnd draw
         */

        /**
         * Constructs a new WSGameEnd.
         * @memberof ws
         * @classdesc Represents a WSGameEnd.
         * @implements IWSGameEnd
         * @constructor
         * @param {ws.IWSGameEnd=} [properties] Properties to set
         */
        function WSGameEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WSGameEnd user.
         * @member {ws.IPartialUser|null|undefined} user
         * @memberof ws.WSGameEnd
         * @instance
         */
        WSGameEnd.prototype.user = null;

        /**
         * WSGameEnd draw.
         * @member {boolean|null|undefined} draw
         * @memberof ws.WSGameEnd
         * @instance
         */
        WSGameEnd.prototype.draw = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WSGameEnd winner.
         * @member {"user"|"draw"|undefined} winner
         * @memberof ws.WSGameEnd
         * @instance
         */
        Object.defineProperty(WSGameEnd.prototype, "winner", {
            get: $util.oneOfGetter($oneOfFields = ["user", "draw"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WSGameEnd instance using the specified properties.
         * @function create
         * @memberof ws.WSGameEnd
         * @static
         * @param {ws.IWSGameEnd=} [properties] Properties to set
         * @returns {ws.WSGameEnd} WSGameEnd instance
         */
        WSGameEnd.create = function create(properties) {
            return new WSGameEnd(properties);
        };

        /**
         * Encodes the specified WSGameEnd message. Does not implicitly {@link ws.WSGameEnd.verify|verify} messages.
         * @function encode
         * @memberof ws.WSGameEnd
         * @static
         * @param {ws.IWSGameEnd} message WSGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.ws.PartialUser.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.draw != null && Object.hasOwnProperty.call(message, "draw"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.draw);
            return writer;
        };

        /**
         * Encodes the specified WSGameEnd message, length delimited. Does not implicitly {@link ws.WSGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.WSGameEnd
         * @static
         * @param {ws.IWSGameEnd} message WSGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WSGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof ws.WSGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.WSGameEnd} WSGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameEnd.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WSGameEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.ws.PartialUser.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 2: {
                        message.draw = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WSGameEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.WSGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.WSGameEnd} WSGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WSGameEnd message.
         * @function verify
         * @memberof ws.WSGameEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WSGameEnd.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.user != null && message.hasOwnProperty("user")) {
                properties.winner = 1;
                {
                    let error = $root.ws.PartialUser.verify(message.user, long + 1);
                    if (error)
                        return "user." + error;
                }
            }
            if (message.draw != null && message.hasOwnProperty("draw")) {
                if (properties.winner === 1)
                    return "winner: multiple values";
                properties.winner = 1;
                if (typeof message.draw !== "boolean")
                    return "draw: boolean expected";
            }
            return null;
        };

        /**
         * Creates a WSGameEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.WSGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.WSGameEnd} WSGameEnd
         */
        WSGameEnd.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.WSGameEnd)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.WSGameEnd();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".ws.WSGameEnd.user: object expected");
                message.user = $root.ws.PartialUser.fromObject(object.user, long + 1);
            }
            if (object.draw != null)
                message.draw = Boolean(object.draw);
            return message;
        };

        /**
         * Creates a plain object from a WSGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.WSGameEnd
         * @static
         * @param {ws.WSGameEnd} message WSGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WSGameEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.user != null && message.hasOwnProperty("user")) {
                object.user = $root.ws.PartialUser.toObject(message.user, options);
                if (options.oneofs)
                    object.winner = "user";
            }
            if (message.draw != null && message.hasOwnProperty("draw")) {
                object.draw = message.draw;
                if (options.oneofs)
                    object.winner = "draw";
            }
            return object;
        };

        /**
         * Converts this WSGameEnd to JSON.
         * @function toJSON
         * @memberof ws.WSGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WSGameEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WSGameEnd
         * @function getTypeUrl
         * @memberof ws.WSGameEnd
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WSGameEnd.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.WSGameEnd";
        };

        return WSGameEnd;
    })();

    ws.WSGameMove = (function() {

        /**
         * Properties of a WSGameMove.
         * @memberof ws
         * @interface IWSGameMove
         * @property {number|null} [row] WSGameMove row
         * @property {number|null} [column] WSGameMove column
         * @property {shared.IGameBoard|null} [board] WSGameMove board
         * @property {shared.PlayerIDs|null} [turn] WSGameMove turn
         */

        /**
         * Constructs a new WSGameMove.
         * @memberof ws
         * @classdesc Represents a WSGameMove.
         * @implements IWSGameMove
         * @constructor
         * @param {ws.IWSGameMove=} [properties] Properties to set
         */
        function WSGameMove(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WSGameMove row.
         * @member {number} row
         * @memberof ws.WSGameMove
         * @instance
         */
        WSGameMove.prototype.row = 0;

        /**
         * WSGameMove column.
         * @member {number} column
         * @memberof ws.WSGameMove
         * @instance
         */
        WSGameMove.prototype.column = 0;

        /**
         * WSGameMove board.
         * @member {shared.IGameBoard|null|undefined} board
         * @memberof ws.WSGameMove
         * @instance
         */
        WSGameMove.prototype.board = null;

        /**
         * WSGameMove turn.
         * @member {shared.PlayerIDs} turn
         * @memberof ws.WSGameMove
         * @instance
         */
        WSGameMove.prototype.turn = 0;

        /**
         * Creates a new WSGameMove instance using the specified properties.
         * @function create
         * @memberof ws.WSGameMove
         * @static
         * @param {ws.IWSGameMove=} [properties] Properties to set
         * @returns {ws.WSGameMove} WSGameMove instance
         */
        WSGameMove.create = function create(properties) {
            return new WSGameMove(properties);
        };

        /**
         * Encodes the specified WSGameMove message. Does not implicitly {@link ws.WSGameMove.verify|verify} messages.
         * @function encode
         * @memberof ws.WSGameMove
         * @static
         * @param {ws.IWSGameMove} message WSGameMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameMove.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && Object.hasOwnProperty.call(message, "row"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.row);
            if (message.column != null && Object.hasOwnProperty.call(message, "column"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.column);
            if (message.board != null && Object.hasOwnProperty.call(message, "board"))
                $root.shared.GameBoard.encode(message.board, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.turn != null && Object.hasOwnProperty.call(message, "turn"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.turn);
            return writer;
        };

        /**
         * Encodes the specified WSGameMove message, length delimited. Does not implicitly {@link ws.WSGameMove.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.WSGameMove
         * @static
         * @param {ws.IWSGameMove} message WSGameMove message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameMove.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WSGameMove message from the specified reader or buffer.
         * @function decode
         * @memberof ws.WSGameMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.WSGameMove} WSGameMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameMove.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WSGameMove();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.row = reader.int32();
                        break;
                    }
                case 2: {
                        message.column = reader.int32();
                        break;
                    }
                case 3: {
                        message.board = $root.shared.GameBoard.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 4: {
                        message.turn = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WSGameMove message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.WSGameMove
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.WSGameMove} WSGameMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameMove.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WSGameMove message.
         * @function verify
         * @memberof ws.WSGameMove
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WSGameMove.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.row != null && message.hasOwnProperty("row"))
                if (!$util.isInteger(message.row))
                    return "row: integer expected";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isInteger(message.column))
                    return "column: integer expected";
            if (message.board != null && message.hasOwnProperty("board")) {
                let error = $root.shared.GameBoard.verify(message.board, long + 1);
                if (error)
                    return "board." + error;
            }
            if (message.turn != null && message.hasOwnProperty("turn"))
                switch (message.turn) {
                default:
                    return "turn: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a WSGameMove message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.WSGameMove
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.WSGameMove} WSGameMove
         */
        WSGameMove.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.WSGameMove)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.WSGameMove();
            if (object.row != null)
                message.row = object.row | 0;
            if (object.column != null)
                message.column = object.column | 0;
            if (object.board != null) {
                if (typeof object.board !== "object")
                    throw TypeError(".ws.WSGameMove.board: object expected");
                message.board = $root.shared.GameBoard.fromObject(object.board, long + 1);
            }
            switch (object.turn) {
            default:
                if (typeof object.turn === "number") {
                    message.turn = object.turn;
                    break;
                }
                break;
            case "PLAYER_IDS_UNSPECIFIED":
            case 0:
                message.turn = 0;
                break;
            case "PLAYER_IDS_PLAYER1":
            case 1:
                message.turn = 1;
                break;
            case "PLAYER_IDS_PLAYER2":
            case 2:
                message.turn = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a WSGameMove message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.WSGameMove
         * @static
         * @param {ws.WSGameMove} message WSGameMove
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WSGameMove.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.row = 0;
                object.column = 0;
                object.board = null;
                object.turn = options.enums === String ? "PLAYER_IDS_UNSPECIFIED" : 0;
            }
            if (message.row != null && message.hasOwnProperty("row"))
                object.row = message.row;
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            if (message.board != null && message.hasOwnProperty("board"))
                object.board = $root.shared.GameBoard.toObject(message.board, options);
            if (message.turn != null && message.hasOwnProperty("turn"))
                object.turn = options.enums === String ? $root.shared.PlayerIDs[message.turn] === undefined ? message.turn : $root.shared.PlayerIDs[message.turn] : message.turn;
            return object;
        };

        /**
         * Converts this WSGameMove to JSON.
         * @function toJSON
         * @memberof ws.WSGameMove
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WSGameMove.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WSGameMove
         * @function getTypeUrl
         * @memberof ws.WSGameMove
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WSGameMove.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.WSGameMove";
        };

        return WSGameMove;
    })();

    /**
     * WSGameResponses enum.
     * @name ws.WSGameResponses
     * @enum {number}
     * @property {number} WS_GAME_RESPONSES_UNSPECIFIED=0 WS_GAME_RESPONSES_UNSPECIFIED value
     * @property {number} WS_GAME_RESPONSES_ERROR=1 WS_GAME_RESPONSES_ERROR value
     * @property {number} WS_GAME_RESPONSES_MOVE=2 WS_GAME_RESPONSES_MOVE value
     * @property {number} WS_GAME_RESPONSES_END=3 WS_GAME_RESPONSES_END value
     */
    ws.WSGameResponses = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WS_GAME_RESPONSES_UNSPECIFIED"] = 0;
        values[valuesById[1] = "WS_GAME_RESPONSES_ERROR"] = 1;
        values[valuesById[2] = "WS_GAME_RESPONSES_MOVE"] = 2;
        values[valuesById[3] = "WS_GAME_RESPONSES_END"] = 3;
        return values;
    })();

    ws.WSGameResponsePacket = (function() {

        /**
         * Properties of a WSGameResponsePacket.
         * @memberof ws
         * @interface IWSGameResponsePacket
         * @property {ws.WSGameResponses|null} [response] WSGameResponsePacket response
         * @property {shared.ICodedError|null} [error] WSGameResponsePacket error
         * @property {ws.IWSGameMove|null} [move] WSGameResponsePacket move
         * @property {ws.IWSGameEnd|null} [end] WSGameResponsePacket end
         */

        /**
         * Constructs a new WSGameResponsePacket.
         * @memberof ws
         * @classdesc Represents a WSGameResponsePacket.
         * @implements IWSGameResponsePacket
         * @constructor
         * @param {ws.IWSGameResponsePacket=} [properties] Properties to set
         */
        function WSGameResponsePacket(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WSGameResponsePacket response.
         * @member {ws.WSGameResponses} response
         * @memberof ws.WSGameResponsePacket
         * @instance
         */
        WSGameResponsePacket.prototype.response = 0;

        /**
         * WSGameResponsePacket error.
         * @member {shared.ICodedError|null|undefined} error
         * @memberof ws.WSGameResponsePacket
         * @instance
         */
        WSGameResponsePacket.prototype.error = null;

        /**
         * WSGameResponsePacket move.
         * @member {ws.IWSGameMove|null|undefined} move
         * @memberof ws.WSGameResponsePacket
         * @instance
         */
        WSGameResponsePacket.prototype.move = null;

        /**
         * WSGameResponsePacket end.
         * @member {ws.IWSGameEnd|null|undefined} end
         * @memberof ws.WSGameResponsePacket
         * @instance
         */
        WSGameResponsePacket.prototype.end = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * WSGameResponsePacket data.
         * @member {"error"|"move"|"end"|undefined} data
         * @memberof ws.WSGameResponsePacket
         * @instance
         */
        Object.defineProperty(WSGameResponsePacket.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["error", "move", "end"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new WSGameResponsePacket instance using the specified properties.
         * @function create
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {ws.IWSGameResponsePacket=} [properties] Properties to set
         * @returns {ws.WSGameResponsePacket} WSGameResponsePacket instance
         */
        WSGameResponsePacket.create = function create(properties) {
            return new WSGameResponsePacket(properties);
        };

        /**
         * Encodes the specified WSGameResponsePacket message. Does not implicitly {@link ws.WSGameResponsePacket.verify|verify} messages.
         * @function encode
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {ws.IWSGameResponsePacket} message WSGameResponsePacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameResponsePacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.response);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.shared.CodedError.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.move != null && Object.hasOwnProperty.call(message, "move"))
                $root.ws.WSGameMove.encode(message.move, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                $root.ws.WSGameEnd.encode(message.end, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WSGameResponsePacket message, length delimited. Does not implicitly {@link ws.WSGameResponsePacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {ws.IWSGameResponsePacket} message WSGameResponsePacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WSGameResponsePacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WSGameResponsePacket message from the specified reader or buffer.
         * @function decode
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.WSGameResponsePacket} WSGameResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameResponsePacket.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.WSGameResponsePacket();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.response = reader.int32();
                        break;
                    }
                case 2: {
                        message.error = $root.shared.CodedError.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 3: {
                        message.move = $root.ws.WSGameMove.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 4: {
                        message.end = $root.ws.WSGameEnd.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                default:
                    reader.skipType(tag & 7, long);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WSGameResponsePacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.WSGameResponsePacket} WSGameResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WSGameResponsePacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WSGameResponsePacket message.
         * @function verify
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WSGameResponsePacket.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.response != null && message.hasOwnProperty("response"))
                switch (message.response) {
                default:
                    return "response: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.error != null && message.hasOwnProperty("error")) {
                properties.data = 1;
                {
                    let error = $root.shared.CodedError.verify(message.error, long + 1);
                    if (error)
                        return "error." + error;
                }
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.ws.WSGameMove.verify(message.move, long + 1);
                    if (error)
                        return "move." + error;
                }
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.ws.WSGameEnd.verify(message.end, long + 1);
                    if (error)
                        return "end." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WSGameResponsePacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.WSGameResponsePacket} WSGameResponsePacket
         */
        WSGameResponsePacket.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.WSGameResponsePacket)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.WSGameResponsePacket();
            switch (object.response) {
            default:
                if (typeof object.response === "number") {
                    message.response = object.response;
                    break;
                }
                break;
            case "WS_GAME_RESPONSES_UNSPECIFIED":
            case 0:
                message.response = 0;
                break;
            case "WS_GAME_RESPONSES_ERROR":
            case 1:
                message.response = 1;
                break;
            case "WS_GAME_RESPONSES_MOVE":
            case 2:
                message.response = 2;
                break;
            case "WS_GAME_RESPONSES_END":
            case 3:
                message.response = 3;
                break;
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".ws.WSGameResponsePacket.error: object expected");
                message.error = $root.shared.CodedError.fromObject(object.error, long + 1);
            }
            if (object.move != null) {
                if (typeof object.move !== "object")
                    throw TypeError(".ws.WSGameResponsePacket.move: object expected");
                message.move = $root.ws.WSGameMove.fromObject(object.move, long + 1);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".ws.WSGameResponsePacket.end: object expected");
                message.end = $root.ws.WSGameEnd.fromObject(object.end, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a WSGameResponsePacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {ws.WSGameResponsePacket} message WSGameResponsePacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WSGameResponsePacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.response = options.enums === String ? "WS_GAME_RESPONSES_UNSPECIFIED" : 0;
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = options.enums === String ? $root.ws.WSGameResponses[message.response] === undefined ? message.response : $root.ws.WSGameResponses[message.response] : message.response;
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.shared.CodedError.toObject(message.error, options);
                if (options.oneofs)
                    object.data = "error";
            }
            if (message.move != null && message.hasOwnProperty("move")) {
                object.move = $root.ws.WSGameMove.toObject(message.move, options);
                if (options.oneofs)
                    object.data = "move";
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                object.end = $root.ws.WSGameEnd.toObject(message.end, options);
                if (options.oneofs)
                    object.data = "end";
            }
            return object;
        };

        /**
         * Converts this WSGameResponsePacket to JSON.
         * @function toJSON
         * @memberof ws.WSGameResponsePacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WSGameResponsePacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WSGameResponsePacket
         * @function getTypeUrl
         * @memberof ws.WSGameResponsePacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WSGameResponsePacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.WSGameResponsePacket";
        };

        return WSGameResponsePacket;
    })();

    return ws;
})();

export { $root as default };
