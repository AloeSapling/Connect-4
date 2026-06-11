import type { models } from '@/lib/proto';
import {
    P_PlayerIDs,
    P_TokenQueueModes,
    type TPlayerIDs,
    type TTokenQueueData,
    type TTokenQueueModes,
    type TTokenTypes,
} from '@/lib/types';
import { tokenImageMap } from '@/lib/canvasLogic';

export default function TokenView({
    tokenQueueData,
    playerID,
    onTokenSelect,
}: {
    tokenQueueData: TTokenQueueData;
    playerID: TPlayerIDs;
    onTokenSelect?: (type: TTokenTypes) => void;
}) {
    console.log(tokenQueueData);
    if (
        tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED ||
        tokenQueueData.mode === null ||
        tokenQueueData.mode === undefined
    )
        return;
    return (
        <div className="flex flex-row gap-5 flex-1 items-center justify-center">
            <div
                className={`bg-yellow-700 p-5 rounded-md flex-1 flex flex-col gap-3 ${playerID === P_PlayerIDs.PLAYER_IDS_PLAYER1 && 'border-4 border-sky-100'} `}
            >
                <h2 className="font-bold text-lg text-white text-center">Player 1 tokens</h2>
                <div className="flex flex-row gap-3 justify-center">
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                        tokenQueueData.decks?.player1?.map((tokenType) => (
                            <Token
                                tokenType={tokenType ?? undefined}
                                playerID={P_PlayerIDs.PLAYER_IDS_PLAYER1}
                                clickFn={onTokenSelect}
                                isEnabled={playerID === P_PlayerIDs.PLAYER_IDS_PLAYER1}
                            />
                        ))}

                    {(tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_FULL_RANDOM ||
                        tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY) && (
                        <Token
                            tokenType={tokenQueueData.tokens?.player1 ?? undefined}
                            playerID={P_PlayerIDs.PLAYER_IDS_PLAYER1}
                            isEnabled={playerID === P_PlayerIDs.PLAYER_IDS_PLAYER1}
                        />
                    )}
                </div>
            </div>

            <div
                className={`bg-yellow-700 p-5 rounded-md flex-1 flex flex-col gap-3 ${playerID === P_PlayerIDs.PLAYER_IDS_PLAYER2 && 'border-4 border-sky-100'} `}
            >
                <h2 className="font-bold text-lg text-white text-center">Player 2 tokens</h2>
                <div className="flex flex-row gap-3 justify-center">
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                        tokenQueueData.decks?.player2?.map((tokenType) => (
                            <Token
                                tokenType={tokenType ?? undefined}
                                playerID={P_PlayerIDs.PLAYER_IDS_PLAYER2}
                                clickFn={onTokenSelect}
                                isEnabled={playerID === P_PlayerIDs.PLAYER_IDS_PLAYER2}
                            />
                        ))}

                    {(tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_FULL_RANDOM ||
                        tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY) && (
                        <Token
                            tokenType={tokenQueueData.tokens?.player2 ?? undefined}
                            playerID={P_PlayerIDs.PLAYER_IDS_PLAYER2}
                            isEnabled={playerID === P_PlayerIDs.PLAYER_IDS_PLAYER2}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

function Token({
    tokenType,
    playerID,
    clickFn,
    isEnabled,
}: {
    tokenType?: TTokenTypes;
    playerID: TPlayerIDs;
    clickFn?: (tokenType: TTokenTypes) => void;
    isEnabled: boolean;
}) {
    if (!tokenType) return <p></p>;

    const img = tokenImageMap.get(tokenType)?.get(playerID);

    return (
        <button
            disabled={!isEnabled}
            className={`bg-emerald-800 p-3 rounded-lg ${clickFn && isEnabled && 'cursor-pointer'} ${!isEnabled && 'opacity-50'}`}
            onClick={() => clickFn && clickFn(tokenType)}
        >
            {img ? <img src={img} className="w-12 h-12" alt="" /> : <p>{tokenType.toString()}</p>}
        </button>
    );
}
