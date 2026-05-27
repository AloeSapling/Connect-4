/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const routes = $root.routes = (() => {

    /**
     * Namespace routes.
     * @exports routes
     * @namespace
     */
    const routes = {};

    routes.GetLobbiesResponse = (function() {

        /**
         * Properties of a GetLobbiesResponse.
         * @memberof routes
         * @interface IGetLobbiesResponse
         * @property {Array.<models.ILobbyData>|null} [lobbies] GetLobbiesResponse lobbies
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
         * @member {Array.<models.ILobbyData>} lobbies
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
                    $root.models.LobbyData.encode(message.lobbies[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.lobbies.push($root.models.LobbyData.decode(reader, reader.uint32(), undefined, long + 1));
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
                    let error = $root.models.LobbyData.verify(message.lobbies[i], long + 1);
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
                    message.lobbies[i] = $root.models.LobbyData.fromObject(object.lobbies[i], long + 1);
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
                    object.lobbies[j] = $root.models.LobbyData.toObject(message.lobbies[j], options);
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
         * @property {models.ILobbyData|null} [lobby] GetLobbyResponse lobby
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
         * @member {models.ILobbyData|null|undefined} lobby
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
                $root.models.LobbyData.encode(message.lobby, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.lobby = $root.models.LobbyData.decode(reader, reader.uint32(), undefined, long + 1);
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
                    let error = $root.models.LobbyData.verify(message.lobby, long + 1);
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
                message.lobby = $root.models.LobbyData.fromObject(object.lobby, long + 1);
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
                object.lobby = $root.models.LobbyData.toObject(message.lobby, options);
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

    routes.CreateLobbyRequest = (function() {

        /**
         * Properties of a CreateLobbyRequest.
         * @memberof routes
         * @interface ICreateLobbyRequest
         * @property {string|null} [lobbyName] CreateLobbyRequest lobbyName
         */

        /**
         * Constructs a new CreateLobbyRequest.
         * @memberof routes
         * @classdesc Represents a CreateLobbyRequest.
         * @implements ICreateLobbyRequest
         * @constructor
         * @param {routes.ICreateLobbyRequest=} [properties] Properties to set
         */
        function CreateLobbyRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateLobbyRequest lobbyName.
         * @member {string} lobbyName
         * @memberof routes.CreateLobbyRequest
         * @instance
         */
        CreateLobbyRequest.prototype.lobbyName = "";

        /**
         * Creates a new CreateLobbyRequest instance using the specified properties.
         * @function create
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {routes.ICreateLobbyRequest=} [properties] Properties to set
         * @returns {routes.CreateLobbyRequest} CreateLobbyRequest instance
         */
        CreateLobbyRequest.create = function create(properties) {
            return new CreateLobbyRequest(properties);
        };

        /**
         * Encodes the specified CreateLobbyRequest message. Does not implicitly {@link routes.CreateLobbyRequest.verify|verify} messages.
         * @function encode
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {routes.ICreateLobbyRequest} message CreateLobbyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLobbyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lobbyName != null && Object.hasOwnProperty.call(message, "lobbyName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lobbyName);
            return writer;
        };

        /**
         * Encodes the specified CreateLobbyRequest message, length delimited. Does not implicitly {@link routes.CreateLobbyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {routes.ICreateLobbyRequest} message CreateLobbyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateLobbyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateLobbyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.CreateLobbyRequest} CreateLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLobbyRequest.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.CreateLobbyRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lobbyName = reader.string();
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
         * Decodes a CreateLobbyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.CreateLobbyRequest} CreateLobbyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateLobbyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateLobbyRequest message.
         * @function verify
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateLobbyRequest.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                if (!$util.isString(message.lobbyName))
                    return "lobbyName: string expected";
            return null;
        };

        /**
         * Creates a CreateLobbyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.CreateLobbyRequest} CreateLobbyRequest
         */
        CreateLobbyRequest.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.CreateLobbyRequest)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.CreateLobbyRequest();
            if (object.lobbyName != null)
                message.lobbyName = String(object.lobbyName);
            return message;
        };

        /**
         * Creates a plain object from a CreateLobbyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {routes.CreateLobbyRequest} message CreateLobbyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateLobbyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.lobbyName = "";
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                object.lobbyName = message.lobbyName;
            return object;
        };

        /**
         * Converts this CreateLobbyRequest to JSON.
         * @function toJSON
         * @memberof routes.CreateLobbyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateLobbyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateLobbyRequest
         * @function getTypeUrl
         * @memberof routes.CreateLobbyRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateLobbyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.CreateLobbyRequest";
        };

        return CreateLobbyRequest;
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

    routes.GetLobbyDetailsResponse = (function() {

        /**
         * Properties of a GetLobbyDetailsResponse.
         * @memberof routes
         * @interface IGetLobbyDetailsResponse
         * @property {models.IDetailedLobbyData|null} [lobbyDetails] GetLobbyDetailsResponse lobbyDetails
         */

        /**
         * Constructs a new GetLobbyDetailsResponse.
         * @memberof routes
         * @classdesc Represents a GetLobbyDetailsResponse.
         * @implements IGetLobbyDetailsResponse
         * @constructor
         * @param {routes.IGetLobbyDetailsResponse=} [properties] Properties to set
         */
        function GetLobbyDetailsResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLobbyDetailsResponse lobbyDetails.
         * @member {models.IDetailedLobbyData|null|undefined} lobbyDetails
         * @memberof routes.GetLobbyDetailsResponse
         * @instance
         */
        GetLobbyDetailsResponse.prototype.lobbyDetails = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(GetLobbyDetailsResponse.prototype, "_lobbyDetails", {
            get: $util.oneOfGetter($oneOfFields = ["lobbyDetails"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new GetLobbyDetailsResponse instance using the specified properties.
         * @function create
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {routes.IGetLobbyDetailsResponse=} [properties] Properties to set
         * @returns {routes.GetLobbyDetailsResponse} GetLobbyDetailsResponse instance
         */
        GetLobbyDetailsResponse.create = function create(properties) {
            return new GetLobbyDetailsResponse(properties);
        };

        /**
         * Encodes the specified GetLobbyDetailsResponse message. Does not implicitly {@link routes.GetLobbyDetailsResponse.verify|verify} messages.
         * @function encode
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {routes.IGetLobbyDetailsResponse} message GetLobbyDetailsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLobbyDetailsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lobbyDetails != null && Object.hasOwnProperty.call(message, "lobbyDetails"))
                $root.models.DetailedLobbyData.encode(message.lobbyDetails, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetLobbyDetailsResponse message, length delimited. Does not implicitly {@link routes.GetLobbyDetailsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {routes.IGetLobbyDetailsResponse} message GetLobbyDetailsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLobbyDetailsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLobbyDetailsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.GetLobbyDetailsResponse} GetLobbyDetailsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLobbyDetailsResponse.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.GetLobbyDetailsResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lobbyDetails = $root.models.DetailedLobbyData.decode(reader, reader.uint32(), undefined, long + 1);
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
         * Decodes a GetLobbyDetailsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.GetLobbyDetailsResponse} GetLobbyDetailsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLobbyDetailsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLobbyDetailsResponse message.
         * @function verify
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLobbyDetailsResponse.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            let properties = {};
            if (message.lobbyDetails != null && message.hasOwnProperty("lobbyDetails")) {
                properties._lobbyDetails = 1;
                {
                    let error = $root.models.DetailedLobbyData.verify(message.lobbyDetails, long + 1);
                    if (error)
                        return "lobbyDetails." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetLobbyDetailsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.GetLobbyDetailsResponse} GetLobbyDetailsResponse
         */
        GetLobbyDetailsResponse.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.GetLobbyDetailsResponse)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.GetLobbyDetailsResponse();
            if (object.lobbyDetails != null) {
                if (typeof object.lobbyDetails !== "object")
                    throw TypeError(".routes.GetLobbyDetailsResponse.lobbyDetails: object expected");
                message.lobbyDetails = $root.models.DetailedLobbyData.fromObject(object.lobbyDetails, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetLobbyDetailsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {routes.GetLobbyDetailsResponse} message GetLobbyDetailsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLobbyDetailsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.lobbyDetails != null && message.hasOwnProperty("lobbyDetails")) {
                object.lobbyDetails = $root.models.DetailedLobbyData.toObject(message.lobbyDetails, options);
                if (options.oneofs)
                    object._lobbyDetails = "lobbyDetails";
            }
            return object;
        };

        /**
         * Converts this GetLobbyDetailsResponse to JSON.
         * @function toJSON
         * @memberof routes.GetLobbyDetailsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLobbyDetailsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetLobbyDetailsResponse
         * @function getTypeUrl
         * @memberof routes.GetLobbyDetailsResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetLobbyDetailsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.GetLobbyDetailsResponse";
        };

        return GetLobbyDetailsResponse;
    })();

    routes.ChangePlayerIDRequest = (function() {

        /**
         * Properties of a ChangePlayerIDRequest.
         * @memberof routes
         * @interface IChangePlayerIDRequest
         * @property {number|null} [userId] ChangePlayerIDRequest userId
         * @property {shared.PlayerIDs|null} [playerId] ChangePlayerIDRequest playerId
         */

        /**
         * Constructs a new ChangePlayerIDRequest.
         * @memberof routes
         * @classdesc Represents a ChangePlayerIDRequest.
         * @implements IChangePlayerIDRequest
         * @constructor
         * @param {routes.IChangePlayerIDRequest=} [properties] Properties to set
         */
        function ChangePlayerIDRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangePlayerIDRequest userId.
         * @member {number} userId
         * @memberof routes.ChangePlayerIDRequest
         * @instance
         */
        ChangePlayerIDRequest.prototype.userId = 0;

        /**
         * ChangePlayerIDRequest playerId.
         * @member {shared.PlayerIDs} playerId
         * @memberof routes.ChangePlayerIDRequest
         * @instance
         */
        ChangePlayerIDRequest.prototype.playerId = 0;

        /**
         * Creates a new ChangePlayerIDRequest instance using the specified properties.
         * @function create
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {routes.IChangePlayerIDRequest=} [properties] Properties to set
         * @returns {routes.ChangePlayerIDRequest} ChangePlayerIDRequest instance
         */
        ChangePlayerIDRequest.create = function create(properties) {
            return new ChangePlayerIDRequest(properties);
        };

        /**
         * Encodes the specified ChangePlayerIDRequest message. Does not implicitly {@link routes.ChangePlayerIDRequest.verify|verify} messages.
         * @function encode
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {routes.IChangePlayerIDRequest} message ChangePlayerIDRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerIDRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified ChangePlayerIDRequest message, length delimited. Does not implicitly {@link routes.ChangePlayerIDRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {routes.IChangePlayerIDRequest} message ChangePlayerIDRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangePlayerIDRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangePlayerIDRequest message from the specified reader or buffer.
         * @function decode
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.ChangePlayerIDRequest} ChangePlayerIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerIDRequest.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.ChangePlayerIDRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int32();
                        break;
                    }
                case 2: {
                        message.playerId = reader.int32();
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
         * Decodes a ChangePlayerIDRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.ChangePlayerIDRequest} ChangePlayerIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangePlayerIDRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangePlayerIDRequest message.
         * @function verify
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangePlayerIDRequest.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                switch (message.playerId) {
                default:
                    return "playerId: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a ChangePlayerIDRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.ChangePlayerIDRequest} ChangePlayerIDRequest
         */
        ChangePlayerIDRequest.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.ChangePlayerIDRequest)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.ChangePlayerIDRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            switch (object.playerId) {
            default:
                if (typeof object.playerId === "number") {
                    message.playerId = object.playerId;
                    break;
                }
                break;
            case "PLAYER_IDS_UNSPECIFIED":
            case 0:
                message.playerId = 0;
                break;
            case "PLAYER_IDS_PLAYER1":
            case 1:
                message.playerId = 1;
                break;
            case "PLAYER_IDS_PLAYER2":
            case 2:
                message.playerId = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ChangePlayerIDRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {routes.ChangePlayerIDRequest} message ChangePlayerIDRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangePlayerIDRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.playerId = options.enums === String ? "PLAYER_IDS_UNSPECIFIED" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = options.enums === String ? $root.shared.PlayerIDs[message.playerId] === undefined ? message.playerId : $root.shared.PlayerIDs[message.playerId] : message.playerId;
            return object;
        };

        /**
         * Converts this ChangePlayerIDRequest to JSON.
         * @function toJSON
         * @memberof routes.ChangePlayerIDRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangePlayerIDRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChangePlayerIDRequest
         * @function getTypeUrl
         * @memberof routes.ChangePlayerIDRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChangePlayerIDRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.ChangePlayerIDRequest";
        };

        return ChangePlayerIDRequest;
    })();

    routes.CreateUserRequest = (function() {

        /**
         * Properties of a CreateUserRequest.
         * @memberof routes
         * @interface ICreateUserRequest
         * @property {string|null} [username] CreateUserRequest username
         */

        /**
         * Constructs a new CreateUserRequest.
         * @memberof routes
         * @classdesc Represents a CreateUserRequest.
         * @implements ICreateUserRequest
         * @constructor
         * @param {routes.ICreateUserRequest=} [properties] Properties to set
         */
        function CreateUserRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRequest username.
         * @member {string} username
         * @memberof routes.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.username = "";

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @function create
         * @memberof routes.CreateUserRequest
         * @static
         * @param {routes.ICreateUserRequest=} [properties] Properties to set
         * @returns {routes.CreateUserRequest} CreateUserRequest instance
         */
        CreateUserRequest.create = function create(properties) {
            return new CreateUserRequest(properties);
        };

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link routes.CreateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof routes.CreateUserRequest
         * @static
         * @param {routes.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link routes.CreateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.CreateUserRequest
         * @static
         * @param {routes.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof routes.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.CreateUserRequest();
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
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRequest message.
         * @function verify
         * @memberof routes.CreateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRequest.verify = function verify(message, long) {
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
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.CreateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.CreateUserRequest} CreateUserRequest
         */
        CreateUserRequest.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.CreateUserRequest)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.CreateUserRequest();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.CreateUserRequest
         * @static
         * @param {routes.CreateUserRequest} message CreateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRequest.toObject = function toObject(message, options) {
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
         * Converts this CreateUserRequest to JSON.
         * @function toJSON
         * @memberof routes.CreateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateUserRequest
         * @function getTypeUrl
         * @memberof routes.CreateUserRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.CreateUserRequest";
        };

        return CreateUserRequest;
    })();

    routes.ChangeUsernameRequest = (function() {

        /**
         * Properties of a ChangeUsernameRequest.
         * @memberof routes
         * @interface IChangeUsernameRequest
         * @property {string|null} [username] ChangeUsernameRequest username
         */

        /**
         * Constructs a new ChangeUsernameRequest.
         * @memberof routes
         * @classdesc Represents a ChangeUsernameRequest.
         * @implements IChangeUsernameRequest
         * @constructor
         * @param {routes.IChangeUsernameRequest=} [properties] Properties to set
         */
        function ChangeUsernameRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeUsernameRequest username.
         * @member {string} username
         * @memberof routes.ChangeUsernameRequest
         * @instance
         */
        ChangeUsernameRequest.prototype.username = "";

        /**
         * Creates a new ChangeUsernameRequest instance using the specified properties.
         * @function create
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {routes.IChangeUsernameRequest=} [properties] Properties to set
         * @returns {routes.ChangeUsernameRequest} ChangeUsernameRequest instance
         */
        ChangeUsernameRequest.create = function create(properties) {
            return new ChangeUsernameRequest(properties);
        };

        /**
         * Encodes the specified ChangeUsernameRequest message. Does not implicitly {@link routes.ChangeUsernameRequest.verify|verify} messages.
         * @function encode
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {routes.IChangeUsernameRequest} message ChangeUsernameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeUsernameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified ChangeUsernameRequest message, length delimited. Does not implicitly {@link routes.ChangeUsernameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {routes.IChangeUsernameRequest} message ChangeUsernameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeUsernameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeUsernameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.ChangeUsernameRequest} ChangeUsernameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeUsernameRequest.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.ChangeUsernameRequest();
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
         * Decodes a ChangeUsernameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.ChangeUsernameRequest} ChangeUsernameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeUsernameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeUsernameRequest message.
         * @function verify
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeUsernameRequest.verify = function verify(message, long) {
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
         * Creates a ChangeUsernameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.ChangeUsernameRequest} ChangeUsernameRequest
         */
        ChangeUsernameRequest.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.ChangeUsernameRequest)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.ChangeUsernameRequest();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a ChangeUsernameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {routes.ChangeUsernameRequest} message ChangeUsernameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeUsernameRequest.toObject = function toObject(message, options) {
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
         * Converts this ChangeUsernameRequest to JSON.
         * @function toJSON
         * @memberof routes.ChangeUsernameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeUsernameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChangeUsernameRequest
         * @function getTypeUrl
         * @memberof routes.ChangeUsernameRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChangeUsernameRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.ChangeUsernameRequest";
        };

        return ChangeUsernameRequest;
    })();

    routes.GetLoggedInData = (function() {

        /**
         * Properties of a GetLoggedInData.
         * @memberof routes
         * @interface IGetLoggedInData
         * @property {models.IUser|null} [user] GetLoggedInData user
         */

        /**
         * Constructs a new GetLoggedInData.
         * @memberof routes
         * @classdesc Represents a GetLoggedInData.
         * @implements IGetLoggedInData
         * @constructor
         * @param {routes.IGetLoggedInData=} [properties] Properties to set
         */
        function GetLoggedInData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetLoggedInData user.
         * @member {models.IUser|null|undefined} user
         * @memberof routes.GetLoggedInData
         * @instance
         */
        GetLoggedInData.prototype.user = null;

        /**
         * Creates a new GetLoggedInData instance using the specified properties.
         * @function create
         * @memberof routes.GetLoggedInData
         * @static
         * @param {routes.IGetLoggedInData=} [properties] Properties to set
         * @returns {routes.GetLoggedInData} GetLoggedInData instance
         */
        GetLoggedInData.create = function create(properties) {
            return new GetLoggedInData(properties);
        };

        /**
         * Encodes the specified GetLoggedInData message. Does not implicitly {@link routes.GetLoggedInData.verify|verify} messages.
         * @function encode
         * @memberof routes.GetLoggedInData
         * @static
         * @param {routes.IGetLoggedInData} message GetLoggedInData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLoggedInData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.models.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetLoggedInData message, length delimited. Does not implicitly {@link routes.GetLoggedInData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof routes.GetLoggedInData
         * @static
         * @param {routes.IGetLoggedInData} message GetLoggedInData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetLoggedInData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetLoggedInData message from the specified reader or buffer.
         * @function decode
         * @memberof routes.GetLoggedInData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {routes.GetLoggedInData} GetLoggedInData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLoggedInData.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.routes.GetLoggedInData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.models.User.decode(reader, reader.uint32(), undefined, long + 1);
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
         * Decodes a GetLoggedInData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof routes.GetLoggedInData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {routes.GetLoggedInData} GetLoggedInData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetLoggedInData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetLoggedInData message.
         * @function verify
         * @memberof routes.GetLoggedInData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetLoggedInData.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.models.User.verify(message.user, long + 1);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a GetLoggedInData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof routes.GetLoggedInData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {routes.GetLoggedInData} GetLoggedInData
         */
        GetLoggedInData.fromObject = function fromObject(object, long) {
            if (object instanceof $root.routes.GetLoggedInData)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.routes.GetLoggedInData();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".routes.GetLoggedInData.user: object expected");
                message.user = $root.models.User.fromObject(object.user, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetLoggedInData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof routes.GetLoggedInData
         * @static
         * @param {routes.GetLoggedInData} message GetLoggedInData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetLoggedInData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.models.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this GetLoggedInData to JSON.
         * @function toJSON
         * @memberof routes.GetLoggedInData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetLoggedInData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetLoggedInData
         * @function getTypeUrl
         * @memberof routes.GetLoggedInData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetLoggedInData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/routes.GetLoggedInData";
        };

        return GetLoggedInData;
    })();

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

    return routes;
})();

export const models = $root.models = (() => {

    /**
     * Namespace models.
     * @exports models
     * @namespace
     */
    const models = {};

    models.User = (function() {

        /**
         * Properties of a User.
         * @memberof models
         * @interface IUser
         * @property {number|null} [id] User id
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
         * @member {number} id
         * @memberof models.User
         * @instance
         */
        User.prototype.id = 0;

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
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
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
                        message.id = reader.int32();
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
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
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
                message.id = object.id | 0;
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
                object.id = 0;
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

    models.Lobby = (function() {

        /**
         * Properties of a Lobby.
         * @memberof models
         * @interface ILobby
         * @property {string|null} [code] Lobby code
         * @property {string|null} [lobbyName] Lobby lobbyName
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
         * Lobby lobbyName.
         * @member {string} lobbyName
         * @memberof models.Lobby
         * @instance
         */
        Lobby.prototype.lobbyName = "";

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
            if (message.lobbyName != null && Object.hasOwnProperty.call(message, "lobbyName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lobbyName);
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
                case 2: {
                        message.lobbyName = reader.string();
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
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                if (!$util.isString(message.lobbyName))
                    return "lobbyName: string expected";
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
            if (object.lobbyName != null)
                message.lobbyName = String(object.lobbyName);
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
            if (options.defaults) {
                object.code = "";
                object.lobbyName = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                object.lobbyName = message.lobbyName;
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

    models.LobbyData = (function() {

        /**
         * Properties of a LobbyData.
         * @memberof models
         * @interface ILobbyData
         * @property {string|null} [code] LobbyData code
         * @property {string|null} [lobbyName] LobbyData lobbyName
         * @property {number|null} [memberCount] LobbyData memberCount
         * @property {boolean|null} [hasGame] LobbyData hasGame
         */

        /**
         * Constructs a new LobbyData.
         * @memberof models
         * @classdesc Represents a LobbyData.
         * @implements ILobbyData
         * @constructor
         * @param {models.ILobbyData=} [properties] Properties to set
         */
        function LobbyData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyData code.
         * @member {string} code
         * @memberof models.LobbyData
         * @instance
         */
        LobbyData.prototype.code = "";

        /**
         * LobbyData lobbyName.
         * @member {string} lobbyName
         * @memberof models.LobbyData
         * @instance
         */
        LobbyData.prototype.lobbyName = "";

        /**
         * LobbyData memberCount.
         * @member {number} memberCount
         * @memberof models.LobbyData
         * @instance
         */
        LobbyData.prototype.memberCount = 0;

        /**
         * LobbyData hasGame.
         * @member {boolean} hasGame
         * @memberof models.LobbyData
         * @instance
         */
        LobbyData.prototype.hasGame = false;

        /**
         * Creates a new LobbyData instance using the specified properties.
         * @function create
         * @memberof models.LobbyData
         * @static
         * @param {models.ILobbyData=} [properties] Properties to set
         * @returns {models.LobbyData} LobbyData instance
         */
        LobbyData.create = function create(properties) {
            return new LobbyData(properties);
        };

        /**
         * Encodes the specified LobbyData message. Does not implicitly {@link models.LobbyData.verify|verify} messages.
         * @function encode
         * @memberof models.LobbyData
         * @static
         * @param {models.ILobbyData} message LobbyData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.lobbyName != null && Object.hasOwnProperty.call(message, "lobbyName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lobbyName);
            if (message.memberCount != null && Object.hasOwnProperty.call(message, "memberCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.memberCount);
            if (message.hasGame != null && Object.hasOwnProperty.call(message, "hasGame"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasGame);
            return writer;
        };

        /**
         * Encodes the specified LobbyData message, length delimited. Does not implicitly {@link models.LobbyData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.LobbyData
         * @static
         * @param {models.ILobbyData} message LobbyData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyData message from the specified reader or buffer.
         * @function decode
         * @memberof models.LobbyData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.LobbyData} LobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyData.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.LobbyData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.lobbyName = reader.string();
                        break;
                    }
                case 3: {
                        message.memberCount = reader.int32();
                        break;
                    }
                case 4: {
                        message.hasGame = reader.bool();
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
         * Decodes a LobbyData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.LobbyData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.LobbyData} LobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyData message.
         * @function verify
         * @memberof models.LobbyData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyData.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                if (!$util.isString(message.lobbyName))
                    return "lobbyName: string expected";
            if (message.memberCount != null && message.hasOwnProperty("memberCount"))
                if (!$util.isInteger(message.memberCount))
                    return "memberCount: integer expected";
            if (message.hasGame != null && message.hasOwnProperty("hasGame"))
                if (typeof message.hasGame !== "boolean")
                    return "hasGame: boolean expected";
            return null;
        };

        /**
         * Creates a LobbyData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.LobbyData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.LobbyData} LobbyData
         */
        LobbyData.fromObject = function fromObject(object, long) {
            if (object instanceof $root.models.LobbyData)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.models.LobbyData();
            if (object.code != null)
                message.code = String(object.code);
            if (object.lobbyName != null)
                message.lobbyName = String(object.lobbyName);
            if (object.memberCount != null)
                message.memberCount = object.memberCount | 0;
            if (object.hasGame != null)
                message.hasGame = Boolean(object.hasGame);
            return message;
        };

        /**
         * Creates a plain object from a LobbyData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.LobbyData
         * @static
         * @param {models.LobbyData} message LobbyData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = "";
                object.lobbyName = "";
                object.memberCount = 0;
                object.hasGame = false;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                object.lobbyName = message.lobbyName;
            if (message.memberCount != null && message.hasOwnProperty("memberCount"))
                object.memberCount = message.memberCount;
            if (message.hasGame != null && message.hasOwnProperty("hasGame"))
                object.hasGame = message.hasGame;
            return object;
        };

        /**
         * Converts this LobbyData to JSON.
         * @function toJSON
         * @memberof models.LobbyData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyData
         * @function getTypeUrl
         * @memberof models.LobbyData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.LobbyData";
        };

        return LobbyData;
    })();

    models.DetailedLobbyData = (function() {

        /**
         * Properties of a DetailedLobbyData.
         * @memberof models
         * @interface IDetailedLobbyData
         * @property {string|null} [code] DetailedLobbyData code
         * @property {string|null} [lobbyName] DetailedLobbyData lobbyName
         * @property {number|null} [memberCount] DetailedLobbyData memberCount
         * @property {boolean|null} [hasGame] DetailedLobbyData hasGame
         * @property {models.IDetailedLobbyMemberData|null} [host] DetailedLobbyData host
         * @property {Array.<models.IDetailedLobbyMemberData>|null} [lobbyMembers] DetailedLobbyData lobbyMembers
         */

        /**
         * Constructs a new DetailedLobbyData.
         * @memberof models
         * @classdesc Represents a DetailedLobbyData.
         * @implements IDetailedLobbyData
         * @constructor
         * @param {models.IDetailedLobbyData=} [properties] Properties to set
         */
        function DetailedLobbyData(properties) {
            this.lobbyMembers = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DetailedLobbyData code.
         * @member {string} code
         * @memberof models.DetailedLobbyData
         * @instance
         */
        DetailedLobbyData.prototype.code = "";

        /**
         * DetailedLobbyData lobbyName.
         * @member {string} lobbyName
         * @memberof models.DetailedLobbyData
         * @instance
         */
        DetailedLobbyData.prototype.lobbyName = "";

        /**
         * DetailedLobbyData memberCount.
         * @member {number} memberCount
         * @memberof models.DetailedLobbyData
         * @instance
         */
        DetailedLobbyData.prototype.memberCount = 0;

        /**
         * DetailedLobbyData hasGame.
         * @member {boolean} hasGame
         * @memberof models.DetailedLobbyData
         * @instance
         */
        DetailedLobbyData.prototype.hasGame = false;

        /**
         * DetailedLobbyData host.
         * @member {models.IDetailedLobbyMemberData|null|undefined} host
         * @memberof models.DetailedLobbyData
         * @instance
         */
        DetailedLobbyData.prototype.host = null;

        /**
         * DetailedLobbyData lobbyMembers.
         * @member {Array.<models.IDetailedLobbyMemberData>} lobbyMembers
         * @memberof models.DetailedLobbyData
         * @instance
         */
        DetailedLobbyData.prototype.lobbyMembers = $util.emptyArray;

        /**
         * Creates a new DetailedLobbyData instance using the specified properties.
         * @function create
         * @memberof models.DetailedLobbyData
         * @static
         * @param {models.IDetailedLobbyData=} [properties] Properties to set
         * @returns {models.DetailedLobbyData} DetailedLobbyData instance
         */
        DetailedLobbyData.create = function create(properties) {
            return new DetailedLobbyData(properties);
        };

        /**
         * Encodes the specified DetailedLobbyData message. Does not implicitly {@link models.DetailedLobbyData.verify|verify} messages.
         * @function encode
         * @memberof models.DetailedLobbyData
         * @static
         * @param {models.IDetailedLobbyData} message DetailedLobbyData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DetailedLobbyData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.lobbyName != null && Object.hasOwnProperty.call(message, "lobbyName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lobbyName);
            if (message.memberCount != null && Object.hasOwnProperty.call(message, "memberCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.memberCount);
            if (message.hasGame != null && Object.hasOwnProperty.call(message, "hasGame"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasGame);
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                $root.models.DetailedLobbyMemberData.encode(message.host, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.lobbyMembers != null && message.lobbyMembers.length)
                for (let i = 0; i < message.lobbyMembers.length; ++i)
                    $root.models.DetailedLobbyMemberData.encode(message.lobbyMembers[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DetailedLobbyData message, length delimited. Does not implicitly {@link models.DetailedLobbyData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.DetailedLobbyData
         * @static
         * @param {models.IDetailedLobbyData} message DetailedLobbyData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DetailedLobbyData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DetailedLobbyData message from the specified reader or buffer.
         * @function decode
         * @memberof models.DetailedLobbyData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.DetailedLobbyData} DetailedLobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DetailedLobbyData.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.DetailedLobbyData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.lobbyName = reader.string();
                        break;
                    }
                case 3: {
                        message.memberCount = reader.int32();
                        break;
                    }
                case 4: {
                        message.hasGame = reader.bool();
                        break;
                    }
                case 5: {
                        message.host = $root.models.DetailedLobbyMemberData.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 6: {
                        if (!(message.lobbyMembers && message.lobbyMembers.length))
                            message.lobbyMembers = [];
                        message.lobbyMembers.push($root.models.DetailedLobbyMemberData.decode(reader, reader.uint32(), undefined, long + 1));
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
         * Decodes a DetailedLobbyData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.DetailedLobbyData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.DetailedLobbyData} DetailedLobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DetailedLobbyData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DetailedLobbyData message.
         * @function verify
         * @memberof models.DetailedLobbyData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DetailedLobbyData.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                if (!$util.isString(message.lobbyName))
                    return "lobbyName: string expected";
            if (message.memberCount != null && message.hasOwnProperty("memberCount"))
                if (!$util.isInteger(message.memberCount))
                    return "memberCount: integer expected";
            if (message.hasGame != null && message.hasOwnProperty("hasGame"))
                if (typeof message.hasGame !== "boolean")
                    return "hasGame: boolean expected";
            if (message.host != null && message.hasOwnProperty("host")) {
                let error = $root.models.DetailedLobbyMemberData.verify(message.host, long + 1);
                if (error)
                    return "host." + error;
            }
            if (message.lobbyMembers != null && message.hasOwnProperty("lobbyMembers")) {
                if (!Array.isArray(message.lobbyMembers))
                    return "lobbyMembers: array expected";
                for (let i = 0; i < message.lobbyMembers.length; ++i) {
                    let error = $root.models.DetailedLobbyMemberData.verify(message.lobbyMembers[i], long + 1);
                    if (error)
                        return "lobbyMembers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DetailedLobbyData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.DetailedLobbyData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.DetailedLobbyData} DetailedLobbyData
         */
        DetailedLobbyData.fromObject = function fromObject(object, long) {
            if (object instanceof $root.models.DetailedLobbyData)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.models.DetailedLobbyData();
            if (object.code != null)
                message.code = String(object.code);
            if (object.lobbyName != null)
                message.lobbyName = String(object.lobbyName);
            if (object.memberCount != null)
                message.memberCount = object.memberCount | 0;
            if (object.hasGame != null)
                message.hasGame = Boolean(object.hasGame);
            if (object.host != null) {
                if (typeof object.host !== "object")
                    throw TypeError(".models.DetailedLobbyData.host: object expected");
                message.host = $root.models.DetailedLobbyMemberData.fromObject(object.host, long + 1);
            }
            if (object.lobbyMembers) {
                if (!Array.isArray(object.lobbyMembers))
                    throw TypeError(".models.DetailedLobbyData.lobbyMembers: array expected");
                message.lobbyMembers = [];
                for (let i = 0; i < object.lobbyMembers.length; ++i) {
                    if (typeof object.lobbyMembers[i] !== "object")
                        throw TypeError(".models.DetailedLobbyData.lobbyMembers: object expected");
                    message.lobbyMembers[i] = $root.models.DetailedLobbyMemberData.fromObject(object.lobbyMembers[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DetailedLobbyData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.DetailedLobbyData
         * @static
         * @param {models.DetailedLobbyData} message DetailedLobbyData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DetailedLobbyData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lobbyMembers = [];
            if (options.defaults) {
                object.code = "";
                object.lobbyName = "";
                object.memberCount = 0;
                object.hasGame = false;
                object.host = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.lobbyName != null && message.hasOwnProperty("lobbyName"))
                object.lobbyName = message.lobbyName;
            if (message.memberCount != null && message.hasOwnProperty("memberCount"))
                object.memberCount = message.memberCount;
            if (message.hasGame != null && message.hasOwnProperty("hasGame"))
                object.hasGame = message.hasGame;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = $root.models.DetailedLobbyMemberData.toObject(message.host, options);
            if (message.lobbyMembers && message.lobbyMembers.length) {
                object.lobbyMembers = [];
                for (let j = 0; j < message.lobbyMembers.length; ++j)
                    object.lobbyMembers[j] = $root.models.DetailedLobbyMemberData.toObject(message.lobbyMembers[j], options);
            }
            return object;
        };

        /**
         * Converts this DetailedLobbyData to JSON.
         * @function toJSON
         * @memberof models.DetailedLobbyData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DetailedLobbyData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DetailedLobbyData
         * @function getTypeUrl
         * @memberof models.DetailedLobbyData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DetailedLobbyData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.DetailedLobbyData";
        };

        return DetailedLobbyData;
    })();

    models.DetailedLobbyMemberData = (function() {

        /**
         * Properties of a DetailedLobbyMemberData.
         * @memberof models
         * @interface IDetailedLobbyMemberData
         * @property {number|null} [userId] DetailedLobbyMemberData userId
         * @property {string|null} [username] DetailedLobbyMemberData username
         * @property {shared.PlayerTypes|null} [playerType] DetailedLobbyMemberData playerType
         * @property {shared.PlayerIDs|null} [playerId] DetailedLobbyMemberData playerId
         * @property {boolean|null} [host] DetailedLobbyMemberData host
         */

        /**
         * Constructs a new DetailedLobbyMemberData.
         * @memberof models
         * @classdesc Represents a DetailedLobbyMemberData.
         * @implements IDetailedLobbyMemberData
         * @constructor
         * @param {models.IDetailedLobbyMemberData=} [properties] Properties to set
         */
        function DetailedLobbyMemberData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DetailedLobbyMemberData userId.
         * @member {number} userId
         * @memberof models.DetailedLobbyMemberData
         * @instance
         */
        DetailedLobbyMemberData.prototype.userId = 0;

        /**
         * DetailedLobbyMemberData username.
         * @member {string} username
         * @memberof models.DetailedLobbyMemberData
         * @instance
         */
        DetailedLobbyMemberData.prototype.username = "";

        /**
         * DetailedLobbyMemberData playerType.
         * @member {shared.PlayerTypes} playerType
         * @memberof models.DetailedLobbyMemberData
         * @instance
         */
        DetailedLobbyMemberData.prototype.playerType = 0;

        /**
         * DetailedLobbyMemberData playerId.
         * @member {shared.PlayerIDs} playerId
         * @memberof models.DetailedLobbyMemberData
         * @instance
         */
        DetailedLobbyMemberData.prototype.playerId = 0;

        /**
         * DetailedLobbyMemberData host.
         * @member {boolean} host
         * @memberof models.DetailedLobbyMemberData
         * @instance
         */
        DetailedLobbyMemberData.prototype.host = false;

        /**
         * Creates a new DetailedLobbyMemberData instance using the specified properties.
         * @function create
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {models.IDetailedLobbyMemberData=} [properties] Properties to set
         * @returns {models.DetailedLobbyMemberData} DetailedLobbyMemberData instance
         */
        DetailedLobbyMemberData.create = function create(properties) {
            return new DetailedLobbyMemberData(properties);
        };

        /**
         * Encodes the specified DetailedLobbyMemberData message. Does not implicitly {@link models.DetailedLobbyMemberData.verify|verify} messages.
         * @function encode
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {models.IDetailedLobbyMemberData} message DetailedLobbyMemberData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DetailedLobbyMemberData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.playerType != null && Object.hasOwnProperty.call(message, "playerType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.playerType);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playerId);
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.host);
            return writer;
        };

        /**
         * Encodes the specified DetailedLobbyMemberData message, length delimited. Does not implicitly {@link models.DetailedLobbyMemberData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {models.IDetailedLobbyMemberData} message DetailedLobbyMemberData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DetailedLobbyMemberData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DetailedLobbyMemberData message from the specified reader or buffer.
         * @function decode
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.DetailedLobbyMemberData} DetailedLobbyMemberData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DetailedLobbyMemberData.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.DetailedLobbyMemberData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int32();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                case 3: {
                        message.playerType = reader.int32();
                        break;
                    }
                case 4: {
                        message.playerId = reader.int32();
                        break;
                    }
                case 5: {
                        message.host = reader.bool();
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
         * Decodes a DetailedLobbyMemberData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.DetailedLobbyMemberData} DetailedLobbyMemberData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DetailedLobbyMemberData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DetailedLobbyMemberData message.
         * @function verify
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DetailedLobbyMemberData.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.playerType != null && message.hasOwnProperty("playerType"))
                switch (message.playerType) {
                default:
                    return "playerType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                switch (message.playerId) {
                default:
                    return "playerId: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.host != null && message.hasOwnProperty("host"))
                if (typeof message.host !== "boolean")
                    return "host: boolean expected";
            return null;
        };

        /**
         * Creates a DetailedLobbyMemberData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.DetailedLobbyMemberData} DetailedLobbyMemberData
         */
        DetailedLobbyMemberData.fromObject = function fromObject(object, long) {
            if (object instanceof $root.models.DetailedLobbyMemberData)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.models.DetailedLobbyMemberData();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.username != null)
                message.username = String(object.username);
            switch (object.playerType) {
            default:
                if (typeof object.playerType === "number") {
                    message.playerType = object.playerType;
                    break;
                }
                break;
            case "PLAYER_TYPES_UNSPECIFIED":
            case 0:
                message.playerType = 0;
                break;
            case "PLAYER_TYPES_PLAYER":
            case 1:
                message.playerType = 1;
                break;
            case "PLAYER_TYPES_SPECTATOR":
            case 2:
                message.playerType = 2;
                break;
            }
            switch (object.playerId) {
            default:
                if (typeof object.playerId === "number") {
                    message.playerId = object.playerId;
                    break;
                }
                break;
            case "PLAYER_IDS_UNSPECIFIED":
            case 0:
                message.playerId = 0;
                break;
            case "PLAYER_IDS_PLAYER1":
            case 1:
                message.playerId = 1;
                break;
            case "PLAYER_IDS_PLAYER2":
            case 2:
                message.playerId = 2;
                break;
            }
            if (object.host != null)
                message.host = Boolean(object.host);
            return message;
        };

        /**
         * Creates a plain object from a DetailedLobbyMemberData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {models.DetailedLobbyMemberData} message DetailedLobbyMemberData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DetailedLobbyMemberData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userId = 0;
                object.username = "";
                object.playerType = options.enums === String ? "PLAYER_TYPES_UNSPECIFIED" : 0;
                object.playerId = options.enums === String ? "PLAYER_IDS_UNSPECIFIED" : 0;
                object.host = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.playerType != null && message.hasOwnProperty("playerType"))
                object.playerType = options.enums === String ? $root.shared.PlayerTypes[message.playerType] === undefined ? message.playerType : $root.shared.PlayerTypes[message.playerType] : message.playerType;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = options.enums === String ? $root.shared.PlayerIDs[message.playerId] === undefined ? message.playerId : $root.shared.PlayerIDs[message.playerId] : message.playerId;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            return object;
        };

        /**
         * Converts this DetailedLobbyMemberData to JSON.
         * @function toJSON
         * @memberof models.DetailedLobbyMemberData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DetailedLobbyMemberData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DetailedLobbyMemberData
         * @function getTypeUrl
         * @memberof models.DetailedLobbyMemberData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DetailedLobbyMemberData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.DetailedLobbyMemberData";
        };

        return DetailedLobbyMemberData;
    })();

    models.LobbyMember = (function() {

        /**
         * Properties of a LobbyMember.
         * @memberof models
         * @interface ILobbyMember
         * @property {number|null} [id] LobbyMember id
         * @property {number|null} [userId] LobbyMember userId
         * @property {string|null} [lobbyCode] LobbyMember lobbyCode
         * @property {shared.PlayerTypes|null} [playerType] LobbyMember playerType
         * @property {shared.PlayerIDs|null} [playerId] LobbyMember playerId
         * @property {boolean|null} [host] LobbyMember host
         */

        /**
         * Constructs a new LobbyMember.
         * @memberof models
         * @classdesc Represents a LobbyMember.
         * @implements ILobbyMember
         * @constructor
         * @param {models.ILobbyMember=} [properties] Properties to set
         */
        function LobbyMember(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyMember id.
         * @member {number} id
         * @memberof models.LobbyMember
         * @instance
         */
        LobbyMember.prototype.id = 0;

        /**
         * LobbyMember userId.
         * @member {number} userId
         * @memberof models.LobbyMember
         * @instance
         */
        LobbyMember.prototype.userId = 0;

        /**
         * LobbyMember lobbyCode.
         * @member {string} lobbyCode
         * @memberof models.LobbyMember
         * @instance
         */
        LobbyMember.prototype.lobbyCode = "";

        /**
         * LobbyMember playerType.
         * @member {shared.PlayerTypes} playerType
         * @memberof models.LobbyMember
         * @instance
         */
        LobbyMember.prototype.playerType = 0;

        /**
         * LobbyMember playerId.
         * @member {shared.PlayerIDs} playerId
         * @memberof models.LobbyMember
         * @instance
         */
        LobbyMember.prototype.playerId = 0;

        /**
         * LobbyMember host.
         * @member {boolean} host
         * @memberof models.LobbyMember
         * @instance
         */
        LobbyMember.prototype.host = false;

        /**
         * Creates a new LobbyMember instance using the specified properties.
         * @function create
         * @memberof models.LobbyMember
         * @static
         * @param {models.ILobbyMember=} [properties] Properties to set
         * @returns {models.LobbyMember} LobbyMember instance
         */
        LobbyMember.create = function create(properties) {
            return new LobbyMember(properties);
        };

        /**
         * Encodes the specified LobbyMember message. Does not implicitly {@link models.LobbyMember.verify|verify} messages.
         * @function encode
         * @memberof models.LobbyMember
         * @static
         * @param {models.ILobbyMember} message LobbyMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyMember.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.lobbyCode != null && Object.hasOwnProperty.call(message, "lobbyCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lobbyCode);
            if (message.playerType != null && Object.hasOwnProperty.call(message, "playerType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.playerType);
            if (message.playerId != null && Object.hasOwnProperty.call(message, "playerId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.playerId);
            if (message.host != null && Object.hasOwnProperty.call(message, "host"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.host);
            return writer;
        };

        /**
         * Encodes the specified LobbyMember message, length delimited. Does not implicitly {@link models.LobbyMember.verify|verify} messages.
         * @function encodeDelimited
         * @memberof models.LobbyMember
         * @static
         * @param {models.ILobbyMember} message LobbyMember message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyMember.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyMember message from the specified reader or buffer.
         * @function decode
         * @memberof models.LobbyMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {models.LobbyMember} LobbyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyMember.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.models.LobbyMember();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.userId = reader.int32();
                        break;
                    }
                case 3: {
                        message.lobbyCode = reader.string();
                        break;
                    }
                case 4: {
                        message.playerType = reader.int32();
                        break;
                    }
                case 5: {
                        message.playerId = reader.int32();
                        break;
                    }
                case 6: {
                        message.host = reader.bool();
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
         * Decodes a LobbyMember message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof models.LobbyMember
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {models.LobbyMember} LobbyMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyMember.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyMember message.
         * @function verify
         * @memberof models.LobbyMember
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyMember.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.lobbyCode != null && message.hasOwnProperty("lobbyCode"))
                if (!$util.isString(message.lobbyCode))
                    return "lobbyCode: string expected";
            if (message.playerType != null && message.hasOwnProperty("playerType"))
                switch (message.playerType) {
                default:
                    return "playerType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                switch (message.playerId) {
                default:
                    return "playerId: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.host != null && message.hasOwnProperty("host"))
                if (typeof message.host !== "boolean")
                    return "host: boolean expected";
            return null;
        };

        /**
         * Creates a LobbyMember message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof models.LobbyMember
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {models.LobbyMember} LobbyMember
         */
        LobbyMember.fromObject = function fromObject(object, long) {
            if (object instanceof $root.models.LobbyMember)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.models.LobbyMember();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.lobbyCode != null)
                message.lobbyCode = String(object.lobbyCode);
            switch (object.playerType) {
            default:
                if (typeof object.playerType === "number") {
                    message.playerType = object.playerType;
                    break;
                }
                break;
            case "PLAYER_TYPES_UNSPECIFIED":
            case 0:
                message.playerType = 0;
                break;
            case "PLAYER_TYPES_PLAYER":
            case 1:
                message.playerType = 1;
                break;
            case "PLAYER_TYPES_SPECTATOR":
            case 2:
                message.playerType = 2;
                break;
            }
            switch (object.playerId) {
            default:
                if (typeof object.playerId === "number") {
                    message.playerId = object.playerId;
                    break;
                }
                break;
            case "PLAYER_IDS_UNSPECIFIED":
            case 0:
                message.playerId = 0;
                break;
            case "PLAYER_IDS_PLAYER1":
            case 1:
                message.playerId = 1;
                break;
            case "PLAYER_IDS_PLAYER2":
            case 2:
                message.playerId = 2;
                break;
            }
            if (object.host != null)
                message.host = Boolean(object.host);
            return message;
        };

        /**
         * Creates a plain object from a LobbyMember message. Also converts values to other types if specified.
         * @function toObject
         * @memberof models.LobbyMember
         * @static
         * @param {models.LobbyMember} message LobbyMember
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyMember.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.userId = 0;
                object.lobbyCode = "";
                object.playerType = options.enums === String ? "PLAYER_TYPES_UNSPECIFIED" : 0;
                object.playerId = options.enums === String ? "PLAYER_IDS_UNSPECIFIED" : 0;
                object.host = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.lobbyCode != null && message.hasOwnProperty("lobbyCode"))
                object.lobbyCode = message.lobbyCode;
            if (message.playerType != null && message.hasOwnProperty("playerType"))
                object.playerType = options.enums === String ? $root.shared.PlayerTypes[message.playerType] === undefined ? message.playerType : $root.shared.PlayerTypes[message.playerType] : message.playerType;
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                object.playerId = options.enums === String ? $root.shared.PlayerIDs[message.playerId] === undefined ? message.playerId : $root.shared.PlayerIDs[message.playerId] : message.playerId;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            return object;
        };

        /**
         * Converts this LobbyMember to JSON.
         * @function toJSON
         * @memberof models.LobbyMember
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyMember.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyMember
         * @function getTypeUrl
         * @memberof models.LobbyMember
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyMember.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/models.LobbyMember";
        };

        return LobbyMember;
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

    /**
     * ErrorCodes enum.
     * @name shared.ErrorCodes
     * @enum {number}
     * @property {number} ERROR_CODES_UNSPECIFIED=0 ERROR_CODES_UNSPECIFIED value
     * @property {number} ERROR_CODES_SERVER_ERROR=1 ERROR_CODES_SERVER_ERROR value
     * @property {number} ERROR_CODES_BAD_DATA=2 ERROR_CODES_BAD_DATA value
     * @property {number} ERROR_CODES_BAD_TURN=3 ERROR_CODES_BAD_TURN value
     * @property {number} ERROR_CODES_BAD_USER=4 ERROR_CODES_BAD_USER value
     * @property {number} ERROR_CODES_BAD_NAME=5 ERROR_CODES_BAD_NAME value
     * @property {number} ERROR_CODES_UNAUTHORISED=6 ERROR_CODES_UNAUTHORISED value
     * @property {number} ERROR_CODES_ALREADY_JOINED=7 ERROR_CODES_ALREADY_JOINED value
     * @property {number} ERROR_CODES_NOT_A_MEMBER=8 ERROR_CODES_NOT_A_MEMBER value
     * @property {number} ERROR_CODES_GAME_LOCKED=9 ERROR_CODES_GAME_LOCKED value
     * @property {number} ERROR_CODES_GAME_EXPIRED=10 ERROR_CODES_GAME_EXPIRED value
     * @property {number} ERROR_CODES_GAME_ALREADY_EXISTS=11 ERROR_CODES_GAME_ALREADY_EXISTS value
     * @property {number} ERROR_CODES_DOESNT_EXIST=12 ERROR_CODES_DOESNT_EXIST value
     * @property {number} ERROR_CODES_USER_ALREADY_EXISTS=13 ERROR_CODES_USER_ALREADY_EXISTS value
     */
    shared.ErrorCodes = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERROR_CODES_UNSPECIFIED"] = 0;
        values[valuesById[1] = "ERROR_CODES_SERVER_ERROR"] = 1;
        values[valuesById[2] = "ERROR_CODES_BAD_DATA"] = 2;
        values[valuesById[3] = "ERROR_CODES_BAD_TURN"] = 3;
        values[valuesById[4] = "ERROR_CODES_BAD_USER"] = 4;
        values[valuesById[5] = "ERROR_CODES_BAD_NAME"] = 5;
        values[valuesById[6] = "ERROR_CODES_UNAUTHORISED"] = 6;
        values[valuesById[7] = "ERROR_CODES_ALREADY_JOINED"] = 7;
        values[valuesById[8] = "ERROR_CODES_NOT_A_MEMBER"] = 8;
        values[valuesById[9] = "ERROR_CODES_GAME_LOCKED"] = 9;
        values[valuesById[10] = "ERROR_CODES_GAME_EXPIRED"] = 10;
        values[valuesById[11] = "ERROR_CODES_GAME_ALREADY_EXISTS"] = 11;
        values[valuesById[12] = "ERROR_CODES_DOESNT_EXIST"] = 12;
        values[valuesById[13] = "ERROR_CODES_USER_ALREADY_EXISTS"] = 13;
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
                case 12:
                case 13:
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
            case "ERROR_CODES_BAD_DATA":
            case 2:
                message.code = 2;
                break;
            case "ERROR_CODES_BAD_TURN":
            case 3:
                message.code = 3;
                break;
            case "ERROR_CODES_BAD_USER":
            case 4:
                message.code = 4;
                break;
            case "ERROR_CODES_BAD_NAME":
            case 5:
                message.code = 5;
                break;
            case "ERROR_CODES_UNAUTHORISED":
            case 6:
                message.code = 6;
                break;
            case "ERROR_CODES_ALREADY_JOINED":
            case 7:
                message.code = 7;
                break;
            case "ERROR_CODES_NOT_A_MEMBER":
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
            case "ERROR_CODES_GAME_ALREADY_EXISTS":
            case 11:
                message.code = 11;
                break;
            case "ERROR_CODES_DOESNT_EXIST":
            case 12:
                message.code = 12;
                break;
            case "ERROR_CODES_USER_ALREADY_EXISTS":
            case 13:
                message.code = 13;
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

    return shared;
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

    /**
     * LobbyResponses enum.
     * @name ws.LobbyResponses
     * @enum {number}
     * @property {number} LOBBY_RESPONSES_UNSPECIFIED=0 LOBBY_RESPONSES_UNSPECIFIED value
     * @property {number} LOBBY_RESPONSES_JOIN=1 LOBBY_RESPONSES_JOIN value
     * @property {number} LOBBY_RESPONSES_LEAVE=2 LOBBY_RESPONSES_LEAVE value
     * @property {number} LOBBY_RESPONSES_CHANGE_PLAYER=3 LOBBY_RESPONSES_CHANGE_PLAYER value
     * @property {number} LOBBY_RESPONSES_START_GAME=4 LOBBY_RESPONSES_START_GAME value
     */
    ws.LobbyResponses = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LOBBY_RESPONSES_UNSPECIFIED"] = 0;
        values[valuesById[1] = "LOBBY_RESPONSES_JOIN"] = 1;
        values[valuesById[2] = "LOBBY_RESPONSES_LEAVE"] = 2;
        values[valuesById[3] = "LOBBY_RESPONSES_CHANGE_PLAYER"] = 3;
        values[valuesById[4] = "LOBBY_RESPONSES_START_GAME"] = 4;
        return values;
    })();

    ws.LobbyJoin = (function() {

        /**
         * Properties of a LobbyJoin.
         * @memberof ws
         * @interface ILobbyJoin
         * @property {Array.<models.IDetailedLobbyMemberData>|null} [users] LobbyJoin users
         */

        /**
         * Constructs a new LobbyJoin.
         * @memberof ws
         * @classdesc Represents a LobbyJoin.
         * @implements ILobbyJoin
         * @constructor
         * @param {ws.ILobbyJoin=} [properties] Properties to set
         */
        function LobbyJoin(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyJoin users.
         * @member {Array.<models.IDetailedLobbyMemberData>} users
         * @memberof ws.LobbyJoin
         * @instance
         */
        LobbyJoin.prototype.users = $util.emptyArray;

        /**
         * Creates a new LobbyJoin instance using the specified properties.
         * @function create
         * @memberof ws.LobbyJoin
         * @static
         * @param {ws.ILobbyJoin=} [properties] Properties to set
         * @returns {ws.LobbyJoin} LobbyJoin instance
         */
        LobbyJoin.create = function create(properties) {
            return new LobbyJoin(properties);
        };

        /**
         * Encodes the specified LobbyJoin message. Does not implicitly {@link ws.LobbyJoin.verify|verify} messages.
         * @function encode
         * @memberof ws.LobbyJoin
         * @static
         * @param {ws.ILobbyJoin} message LobbyJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyJoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.models.DetailedLobbyMemberData.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyJoin message, length delimited. Does not implicitly {@link ws.LobbyJoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.LobbyJoin
         * @static
         * @param {ws.ILobbyJoin} message LobbyJoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyJoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyJoin message from the specified reader or buffer.
         * @function decode
         * @memberof ws.LobbyJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.LobbyJoin} LobbyJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyJoin.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.LobbyJoin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.models.DetailedLobbyMemberData.decode(reader, reader.uint32(), undefined, long + 1));
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
         * Decodes a LobbyJoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.LobbyJoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.LobbyJoin} LobbyJoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyJoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyJoin message.
         * @function verify
         * @memberof ws.LobbyJoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyJoin.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.models.DetailedLobbyMemberData.verify(message.users[i], long + 1);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyJoin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.LobbyJoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.LobbyJoin} LobbyJoin
         */
        LobbyJoin.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.LobbyJoin)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.LobbyJoin();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ws.LobbyJoin.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ws.LobbyJoin.users: object expected");
                    message.users[i] = $root.models.DetailedLobbyMemberData.fromObject(object.users[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyJoin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.LobbyJoin
         * @static
         * @param {ws.LobbyJoin} message LobbyJoin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyJoin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.models.DetailedLobbyMemberData.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyJoin to JSON.
         * @function toJSON
         * @memberof ws.LobbyJoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyJoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyJoin
         * @function getTypeUrl
         * @memberof ws.LobbyJoin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyJoin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.LobbyJoin";
        };

        return LobbyJoin;
    })();

    ws.LobbyLeave = (function() {

        /**
         * Properties of a LobbyLeave.
         * @memberof ws
         * @interface ILobbyLeave
         * @property {Array.<models.IDetailedLobbyMemberData>|null} [users] LobbyLeave users
         */

        /**
         * Constructs a new LobbyLeave.
         * @memberof ws
         * @classdesc Represents a LobbyLeave.
         * @implements ILobbyLeave
         * @constructor
         * @param {ws.ILobbyLeave=} [properties] Properties to set
         */
        function LobbyLeave(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyLeave users.
         * @member {Array.<models.IDetailedLobbyMemberData>} users
         * @memberof ws.LobbyLeave
         * @instance
         */
        LobbyLeave.prototype.users = $util.emptyArray;

        /**
         * Creates a new LobbyLeave instance using the specified properties.
         * @function create
         * @memberof ws.LobbyLeave
         * @static
         * @param {ws.ILobbyLeave=} [properties] Properties to set
         * @returns {ws.LobbyLeave} LobbyLeave instance
         */
        LobbyLeave.create = function create(properties) {
            return new LobbyLeave(properties);
        };

        /**
         * Encodes the specified LobbyLeave message. Does not implicitly {@link ws.LobbyLeave.verify|verify} messages.
         * @function encode
         * @memberof ws.LobbyLeave
         * @static
         * @param {ws.ILobbyLeave} message LobbyLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.models.DetailedLobbyMemberData.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyLeave message, length delimited. Does not implicitly {@link ws.LobbyLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.LobbyLeave
         * @static
         * @param {ws.ILobbyLeave} message LobbyLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyLeave message from the specified reader or buffer.
         * @function decode
         * @memberof ws.LobbyLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.LobbyLeave} LobbyLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyLeave.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.LobbyLeave();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.models.DetailedLobbyMemberData.decode(reader, reader.uint32(), undefined, long + 1));
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
         * Decodes a LobbyLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.LobbyLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.LobbyLeave} LobbyLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyLeave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyLeave message.
         * @function verify
         * @memberof ws.LobbyLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyLeave.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.models.DetailedLobbyMemberData.verify(message.users[i], long + 1);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.LobbyLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.LobbyLeave} LobbyLeave
         */
        LobbyLeave.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.LobbyLeave)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.LobbyLeave();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ws.LobbyLeave.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ws.LobbyLeave.users: object expected");
                    message.users[i] = $root.models.DetailedLobbyMemberData.fromObject(object.users[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.LobbyLeave
         * @static
         * @param {ws.LobbyLeave} message LobbyLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyLeave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.models.DetailedLobbyMemberData.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyLeave to JSON.
         * @function toJSON
         * @memberof ws.LobbyLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyLeave
         * @function getTypeUrl
         * @memberof ws.LobbyLeave
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyLeave.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.LobbyLeave";
        };

        return LobbyLeave;
    })();

    ws.LobbyChangePlayer = (function() {

        /**
         * Properties of a LobbyChangePlayer.
         * @memberof ws
         * @interface ILobbyChangePlayer
         * @property {Array.<models.IDetailedLobbyMemberData>|null} [users] LobbyChangePlayer users
         */

        /**
         * Constructs a new LobbyChangePlayer.
         * @memberof ws
         * @classdesc Represents a LobbyChangePlayer.
         * @implements ILobbyChangePlayer
         * @constructor
         * @param {ws.ILobbyChangePlayer=} [properties] Properties to set
         */
        function LobbyChangePlayer(properties) {
            this.users = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyChangePlayer users.
         * @member {Array.<models.IDetailedLobbyMemberData>} users
         * @memberof ws.LobbyChangePlayer
         * @instance
         */
        LobbyChangePlayer.prototype.users = $util.emptyArray;

        /**
         * Creates a new LobbyChangePlayer instance using the specified properties.
         * @function create
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {ws.ILobbyChangePlayer=} [properties] Properties to set
         * @returns {ws.LobbyChangePlayer} LobbyChangePlayer instance
         */
        LobbyChangePlayer.create = function create(properties) {
            return new LobbyChangePlayer(properties);
        };

        /**
         * Encodes the specified LobbyChangePlayer message. Does not implicitly {@link ws.LobbyChangePlayer.verify|verify} messages.
         * @function encode
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {ws.ILobbyChangePlayer} message LobbyChangePlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyChangePlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (let i = 0; i < message.users.length; ++i)
                    $root.models.DetailedLobbyMemberData.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyChangePlayer message, length delimited. Does not implicitly {@link ws.LobbyChangePlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {ws.ILobbyChangePlayer} message LobbyChangePlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyChangePlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyChangePlayer message from the specified reader or buffer.
         * @function decode
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.LobbyChangePlayer} LobbyChangePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyChangePlayer.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.LobbyChangePlayer();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.models.DetailedLobbyMemberData.decode(reader, reader.uint32(), undefined, long + 1));
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
         * Decodes a LobbyChangePlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.LobbyChangePlayer} LobbyChangePlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyChangePlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyChangePlayer message.
         * @function verify
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyChangePlayer.verify = function verify(message, long) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                return "maximum nesting depth exceeded";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (let i = 0; i < message.users.length; ++i) {
                    let error = $root.models.DetailedLobbyMemberData.verify(message.users[i], long + 1);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyChangePlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.LobbyChangePlayer} LobbyChangePlayer
         */
        LobbyChangePlayer.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.LobbyChangePlayer)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.LobbyChangePlayer();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".ws.LobbyChangePlayer.users: array expected");
                message.users = [];
                for (let i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".ws.LobbyChangePlayer.users: object expected");
                    message.users[i] = $root.models.DetailedLobbyMemberData.fromObject(object.users[i], long + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyChangePlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {ws.LobbyChangePlayer} message LobbyChangePlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyChangePlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (let j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.models.DetailedLobbyMemberData.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyChangePlayer to JSON.
         * @function toJSON
         * @memberof ws.LobbyChangePlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyChangePlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyChangePlayer
         * @function getTypeUrl
         * @memberof ws.LobbyChangePlayer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyChangePlayer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.LobbyChangePlayer";
        };

        return LobbyChangePlayer;
    })();

    ws.LobbyResponsePacket = (function() {

        /**
         * Properties of a LobbyResponsePacket.
         * @memberof ws
         * @interface ILobbyResponsePacket
         * @property {ws.LobbyResponses|null} [response] LobbyResponsePacket response
         * @property {ws.ILobbyJoin|null} [join] LobbyResponsePacket join
         * @property {ws.ILobbyLeave|null} [leave] LobbyResponsePacket leave
         * @property {ws.ILobbyChangePlayer|null} [changePlayer] LobbyResponsePacket changePlayer
         */

        /**
         * Constructs a new LobbyResponsePacket.
         * @memberof ws
         * @classdesc Represents a LobbyResponsePacket.
         * @implements ILobbyResponsePacket
         * @constructor
         * @param {ws.ILobbyResponsePacket=} [properties] Properties to set
         */
        function LobbyResponsePacket(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyResponsePacket response.
         * @member {ws.LobbyResponses} response
         * @memberof ws.LobbyResponsePacket
         * @instance
         */
        LobbyResponsePacket.prototype.response = 0;

        /**
         * LobbyResponsePacket join.
         * @member {ws.ILobbyJoin|null|undefined} join
         * @memberof ws.LobbyResponsePacket
         * @instance
         */
        LobbyResponsePacket.prototype.join = null;

        /**
         * LobbyResponsePacket leave.
         * @member {ws.ILobbyLeave|null|undefined} leave
         * @memberof ws.LobbyResponsePacket
         * @instance
         */
        LobbyResponsePacket.prototype.leave = null;

        /**
         * LobbyResponsePacket changePlayer.
         * @member {ws.ILobbyChangePlayer|null|undefined} changePlayer
         * @memberof ws.LobbyResponsePacket
         * @instance
         */
        LobbyResponsePacket.prototype.changePlayer = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * LobbyResponsePacket data.
         * @member {"join"|"leave"|"changePlayer"|undefined} data
         * @memberof ws.LobbyResponsePacket
         * @instance
         */
        Object.defineProperty(LobbyResponsePacket.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["join", "leave", "changePlayer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LobbyResponsePacket instance using the specified properties.
         * @function create
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {ws.ILobbyResponsePacket=} [properties] Properties to set
         * @returns {ws.LobbyResponsePacket} LobbyResponsePacket instance
         */
        LobbyResponsePacket.create = function create(properties) {
            return new LobbyResponsePacket(properties);
        };

        /**
         * Encodes the specified LobbyResponsePacket message. Does not implicitly {@link ws.LobbyResponsePacket.verify|verify} messages.
         * @function encode
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {ws.ILobbyResponsePacket} message LobbyResponsePacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyResponsePacket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.response);
            if (message.join != null && Object.hasOwnProperty.call(message, "join"))
                $root.ws.LobbyJoin.encode(message.join, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.leave != null && Object.hasOwnProperty.call(message, "leave"))
                $root.ws.LobbyLeave.encode(message.leave, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.changePlayer != null && Object.hasOwnProperty.call(message, "changePlayer"))
                $root.ws.LobbyChangePlayer.encode(message.changePlayer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyResponsePacket message, length delimited. Does not implicitly {@link ws.LobbyResponsePacket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {ws.ILobbyResponsePacket} message LobbyResponsePacket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyResponsePacket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyResponsePacket message from the specified reader or buffer.
         * @function decode
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ws.LobbyResponsePacket} LobbyResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyResponsePacket.decode = function decode(reader, length, error, long) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (long === undefined)
                long = 0;
            if (long > $Reader.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ws.LobbyResponsePacket();
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
                        message.join = $root.ws.LobbyJoin.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 3: {
                        message.leave = $root.ws.LobbyLeave.decode(reader, reader.uint32(), undefined, long + 1);
                        break;
                    }
                case 4: {
                        message.changePlayer = $root.ws.LobbyChangePlayer.decode(reader, reader.uint32(), undefined, long + 1);
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
         * Decodes a LobbyResponsePacket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ws.LobbyResponsePacket} LobbyResponsePacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyResponsePacket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyResponsePacket message.
         * @function verify
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyResponsePacket.verify = function verify(message, long) {
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
                case 4:
                    break;
                }
            if (message.join != null && message.hasOwnProperty("join")) {
                properties.data = 1;
                {
                    let error = $root.ws.LobbyJoin.verify(message.join, long + 1);
                    if (error)
                        return "join." + error;
                }
            }
            if (message.leave != null && message.hasOwnProperty("leave")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.ws.LobbyLeave.verify(message.leave, long + 1);
                    if (error)
                        return "leave." + error;
                }
            }
            if (message.changePlayer != null && message.hasOwnProperty("changePlayer")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.ws.LobbyChangePlayer.verify(message.changePlayer, long + 1);
                    if (error)
                        return "changePlayer." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyResponsePacket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ws.LobbyResponsePacket} LobbyResponsePacket
         */
        LobbyResponsePacket.fromObject = function fromObject(object, long) {
            if (object instanceof $root.ws.LobbyResponsePacket)
                return object;
            if (long === undefined)
                long = 0;
            if (long > $util.recursionLimit)
                throw Error("maximum nesting depth exceeded");
            let message = new $root.ws.LobbyResponsePacket();
            switch (object.response) {
            default:
                if (typeof object.response === "number") {
                    message.response = object.response;
                    break;
                }
                break;
            case "LOBBY_RESPONSES_UNSPECIFIED":
            case 0:
                message.response = 0;
                break;
            case "LOBBY_RESPONSES_JOIN":
            case 1:
                message.response = 1;
                break;
            case "LOBBY_RESPONSES_LEAVE":
            case 2:
                message.response = 2;
                break;
            case "LOBBY_RESPONSES_CHANGE_PLAYER":
            case 3:
                message.response = 3;
                break;
            case "LOBBY_RESPONSES_START_GAME":
            case 4:
                message.response = 4;
                break;
            }
            if (object.join != null) {
                if (typeof object.join !== "object")
                    throw TypeError(".ws.LobbyResponsePacket.join: object expected");
                message.join = $root.ws.LobbyJoin.fromObject(object.join, long + 1);
            }
            if (object.leave != null) {
                if (typeof object.leave !== "object")
                    throw TypeError(".ws.LobbyResponsePacket.leave: object expected");
                message.leave = $root.ws.LobbyLeave.fromObject(object.leave, long + 1);
            }
            if (object.changePlayer != null) {
                if (typeof object.changePlayer !== "object")
                    throw TypeError(".ws.LobbyResponsePacket.changePlayer: object expected");
                message.changePlayer = $root.ws.LobbyChangePlayer.fromObject(object.changePlayer, long + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyResponsePacket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {ws.LobbyResponsePacket} message LobbyResponsePacket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyResponsePacket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.response = options.enums === String ? "LOBBY_RESPONSES_UNSPECIFIED" : 0;
            if (message.response != null && message.hasOwnProperty("response"))
                object.response = options.enums === String ? $root.ws.LobbyResponses[message.response] === undefined ? message.response : $root.ws.LobbyResponses[message.response] : message.response;
            if (message.join != null && message.hasOwnProperty("join")) {
                object.join = $root.ws.LobbyJoin.toObject(message.join, options);
                if (options.oneofs)
                    object.data = "join";
            }
            if (message.leave != null && message.hasOwnProperty("leave")) {
                object.leave = $root.ws.LobbyLeave.toObject(message.leave, options);
                if (options.oneofs)
                    object.data = "leave";
            }
            if (message.changePlayer != null && message.hasOwnProperty("changePlayer")) {
                object.changePlayer = $root.ws.LobbyChangePlayer.toObject(message.changePlayer, options);
                if (options.oneofs)
                    object.data = "changePlayer";
            }
            return object;
        };

        /**
         * Converts this LobbyResponsePacket to JSON.
         * @function toJSON
         * @memberof ws.LobbyResponsePacket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyResponsePacket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LobbyResponsePacket
         * @function getTypeUrl
         * @memberof ws.LobbyResponsePacket
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LobbyResponsePacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ws.LobbyResponsePacket";
        };

        return LobbyResponsePacket;
    })();

    return ws;
})();

export { $root as default };
