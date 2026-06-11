import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { changePlayerID } from '@/lib/api';
import * as proto from '@/lib/proto.js';
import { useContext } from 'react';
import { langContext } from '@/lib/contexts';
import Player1Button from './Player1Button';
import Player2Button from './Player2Button';
import SpectatorButton from './SpectatorButton';

export default function PlayerSelectDialog({
    lobbyCode,
    userId,
    currentPlayerId,
    onClose,
}: {
    lobbyCode: string;
    userId: number;
    currentPlayerId: proto.shared.PlayerIDs;
    onClose: () => void;
}) {
    const langCtx = useContext(langContext);
    const texts = langCtx?.texts.lobby;

    const changePlayerID_m = useMutation({
        mutationFn: (playerID: proto.shared.PlayerIDs) => changePlayerID(lobbyCode, userId, playerID),
        onSuccess: () => {
            toast.success(texts?.changePlayerIDToast);
            onClose();
        },
        onError: (err) => toast.error(err.message),
    });

    const isP1 = currentPlayerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1;
    const isP2 = currentPlayerId === proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
            <div
                className="bg-yellow-800 p-6 rounded-lg flex flex-col items-center gap-6 min-w-[600px]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-row gap-4 w-full justify-center">
                    {isP1 ? (
                        <SpectatorButton
                            onSelect={() => changePlayerID_m.mutate(proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED)}
                        />
                    ) : (
                        <Player1Button
                            onSelect={() => changePlayerID_m.mutate(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1)}
                        />
                    )}
                    {isP2 ? (
                        <SpectatorButton
                            onSelect={() => changePlayerID_m.mutate(proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED)}
                        />
                    ) : (
                        <Player2Button
                            onSelect={() => changePlayerID_m.mutate(proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2)}
                        />
                    )}
                </div>

                <button
                    onClick={onClose}
                    className="border-2 border-rose-500 text-rose-300 bg-rose-950/60 rounded-lg py-2 px-8 hover:border-rose-400 hover:text-rose-200 hover:bg-rose-900/70 transition-colors text-base font-bold cursor-pointer"
                    style={{ width: '35%' }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
