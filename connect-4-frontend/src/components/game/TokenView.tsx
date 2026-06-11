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
    return (
        <div className="flex flex-row gap-15">
            <div>
                <h2>Player 1 tokens</h2>
                <div className="flex flex-row gap-3">
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                        tokenQueueData.decks?.player1?.map((tokenType) => (
                            <Token
                                tokenType={tokenType ?? undefined}
                                playerID={P_PlayerIDs.PLAYER_IDS_PLAYER1}
                                clickFn={onTokenSelect}
                            />
                        ))}

                    {tokenQueueData.mode != null && tokenQueueData.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED && (
                        <Token
                            tokenType={tokenQueueData.tokens?.player1 ?? undefined}
                            playerID={P_PlayerIDs.PLAYER_IDS_PLAYER1}
                        />
                    )}
                </div>
            </div>
            <div>
                <h2>Player 2 tokens</h2>
                <div className="flex flex-row gap-3">
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                        tokenQueueData.decks?.player2?.map((tokenType) => (
                            <Token
                                tokenType={tokenType ?? undefined}
                                playerID={P_PlayerIDs.PLAYER_IDS_PLAYER2}
                                clickFn={onTokenSelect}
                            />
                        ))}

                    {tokenQueueData.mode != null && tokenQueueData.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED && (
                        <Token
                            tokenType={tokenQueueData.tokens?.player2 ?? undefined}
                            playerID={P_PlayerIDs.PLAYER_IDS_PLAYER2}
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
}: {
    tokenType?: TTokenTypes;
    playerID: TPlayerIDs;
    clickFn?: (tokenType: TTokenTypes) => void;
}) {
    if (!tokenType) return <p></p>;

    const img = tokenImageMap.get(tokenType)?.get(playerID);

    return (
        <button className={clickFn && 'cursor-pointer'} onClick={() => clickFn && clickFn(tokenType)}>
            {img ? <img src={img} className="w-8 h-8" alt="" /> : <p>{tokenType.toString()}</p>}
        </button>
    );
}
