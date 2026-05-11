import { DataTypes, Model } from 'sequelize';
import { sequelize } from './database.ts';
import { P_PlayerIDs, P_PlayerTypes, type TPlayerIDs, type TPlayerTypes } from '../lib/types.ts';
import * as proto from '../lib/proto.js';

export class User extends Model {
    declare id: number;
    declare session_id: string;
    declare username: string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        session_id: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: false,
    }
);

export class Lobby extends Model {
    declare code: string;
    declare name: string;
}

Lobby.init(
    {
        code: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Lobby',
        tableName: 'Lobby',
        timestamps: false,
    }
);

export class LobbyMember extends Model {
    declare id: number;
    declare lobby_code: string;
    declare user_id: number;
    declare player_id: TPlayerIDs;
    declare player_type: TPlayerTypes;
    declare host: boolean;
}

LobbyMember.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lobby_code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        player_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: P_PlayerIDs.PLAYER_IDS_UNSPECIFIED,
        },
        player_type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: P_PlayerTypes.PLAYER_TYPES_UNSPECIFIED,
        },
        host: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        modelName: 'LobbyMember',
        tableName: 'LobbyMembers',
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['lobby_code', 'user_id'],
            },
        ],
    }
);

Lobby.hasMany(LobbyMember, {
    foreignKey: 'lobby_code',
    sourceKey: 'code',
});

User.hasMany(LobbyMember, {
    foreignKey: 'user_id',
});

LobbyMember.belongsTo(Lobby, {
    foreignKey: 'lobby_code',
    targetKey: 'code',
    onDelete: 'CASCADE',
});

LobbyMember.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
