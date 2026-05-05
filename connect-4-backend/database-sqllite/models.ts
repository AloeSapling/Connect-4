import { DataTypes, Model } from "sequelize";
import { sequelize } from "./database.ts";
import type { PlayerIDs, PlayerTypes } from "../lib/types.ts";
import * as proto from '../lib/proto.js';

export class User extends Model {
        declare id: number;
        declare sessionID: string;
}

User.init(
        {
                id: {
                        type: DataTypes.INTEGER,
                        autoIncrement: true,
                        primaryKey: true,
                },
                sessionID: {
                        type: DataTypes.STRING,
                        unique: true,
                        allowNull: false,
                }
        },
        {
                sequelize,
                modelName: "User",
                tableName: "Users",
                timestamps: false,
        }
);

export class Lobby extends Model {
        declare code: string;
        declare member_count: number;
}

Lobby.init(
        {
                code: {
                        type: DataTypes.TEXT,
                        primaryKey: true,
                },
                member_count: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        defaultValue: 0,
                },
        },
        {
                sequelize,
                modelName: "Lobby",
                tableName: "Lobby",
                timestamps: false,
        }
);


export class LobbyMember extends Model {
        declare id: number;
        declare lobby_code: string;
        declare user_id: number;
        declare host: boolean;
        declare player_id: PlayerIDs;
        declare player_type: PlayerTypes;
}

LobbyMember.init(
        {
                id: {
                        type: DataTypes.INTEGER,
                        autoIncrement: true,
                        primaryKey: true,
                },
                lobby_code: {
                        type: DataTypes.TEXT,
                        allowNull: false,
                },
                user_id: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                },
                host: {
                        type: DataTypes.BOOLEAN,
                        defaultValue: false,
                },
                player_id: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        defaultValue: proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED,
                },
                player_type: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        defaultValue: proto.shared.PlayerTypes.PLAYER_TYPES_UNSPECIFIED,
                }
        },
        {
                sequelize,
                modelName: "LobbyMember",
                tableName: "LobbyMembers",
                timestamps: false,
                indexes: [
                        {
                                unique: true,
                                fields: ["lobby_code", "user_id"],
                        },
                ],
        }
);

Lobby.hasMany(LobbyMember, {
        foreignKey: "lobby_code",
        sourceKey: "code",
});

User.hasMany(LobbyMember, {
        foreignKey: "user_id",
});

LobbyMember.belongsTo(Lobby, {
        foreignKey: "lobby_code",
        targetKey: "code",
        onDelete: "CASCADE",
});

LobbyMember.belongsTo(User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
});
