import { useContext } from 'react';
import { langContext } from '@/lib/contexts';
import {
    P_PlayerIDs,
    P_TokenQueueModes,
    type TPlayerIDs,
    type TTokenQueueData,
    type TTokenTypes,
} from '@/lib/types';
import { tokenImageMap } from '@/lib/canvasLogic';
import type { SelectedToken } from '@/lib/types';

export default function TokenView({
    tokenQueueData,
    playerID,
    selectedToken,
    onTokenSelect,
}: {
    tokenQueueData: TTokenQueueData;
    playerID: TPlayerIDs;
    selectedToken: SelectedToken;
    onTokenSelect?: (info: SelectedToken) => void;
}) {
    const langCtx = useContext(langContext);
    const texts = langCtx?.texts.game;

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
                <h2 className="font-bold text-lg text-white text-center">{texts?.player1Tokens}</h2>
                <div className="flex flex-row gap-3 justify-center">
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                        tokenQueueData.decks?.player1?.map((tokenType, i) => (
                            <Token
                                key={i}
                                tokenType={tokenType ?? undefined}
                                playerID={P_PlayerIDs.PLAYER_IDS_PLAYER1}
                                selectionKey={`1-${i}`}
                                clickFn={onTokenSelect}
                                isSelected={tokenType === selectedToken.type && selectedToken.key === `1-${i}`}
                                isEnabled={playerID === P_PlayerIDs.PLAYER_IDS_PLAYER1}
                            />
                        ))}

                    {(tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_FULL_RANDOM ||
                        tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY) && (
                        <Token
                            tokenType={tokenQueueData.tokens?.player1 ?? undefined}
                            playerID={P_PlayerIDs.PLAYER_IDS_PLAYER1}
                            isSelected={tokenQueueData.tokens?.player1 === selectedToken.type && selectedToken.key === '1'}
                            isEnabled={playerID === P_PlayerIDs.PLAYER_IDS_PLAYER1}
                        />
                    )}
                </div>
            </div>

            <div
                className={`bg-yellow-700 p-5 rounded-md flex-1 flex flex-col gap-3 ${playerID === P_PlayerIDs.PLAYER_IDS_PLAYER2 && 'border-4 border-sky-100'} `}
            >
                <h2 className="font-bold text-lg text-white text-center">{texts?.player2Tokens}</h2>
                <div className="flex flex-row gap-3 justify-center">
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK &&
                        tokenQueueData.decks?.player2?.map((tokenType, i) => (
                            <Token
                                key={i}
                                tokenType={tokenType ?? undefined}
                                playerID={P_PlayerIDs.PLAYER_IDS_PLAYER2}
                                selectionKey={`2-${i}`}
                                clickFn={onTokenSelect}
                                isSelected={tokenType === selectedToken.type && selectedToken.key === `2-${i}`}
                                isEnabled={playerID === P_PlayerIDs.PLAYER_IDS_PLAYER2}
                            />
                        ))}

                    {(tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_FULL_RANDOM ||
                        tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY) && (
                        <Token
                            tokenType={tokenQueueData.tokens?.player2 ?? undefined}
                            playerID={P_PlayerIDs.PLAYER_IDS_PLAYER2}
                            isSelected={tokenQueueData.tokens?.player2 === selectedToken.type && selectedToken.key === '2'}
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
    selectionKey,
    clickFn,
    isSelected,
    isEnabled,
}: {
    tokenType?: TTokenTypes;
    playerID: TPlayerIDs;
    selectionKey?: string;
    clickFn?: (info: { type: TTokenTypes; key: string }) => void;
    isSelected: boolean;
    isEnabled: boolean;
}) {
    if (!tokenType) return <p></p>;

    const img = tokenImageMap.get(tokenType)?.get(playerID);

    return (
        <button
            disabled={!isEnabled}
            className={`bg-emerald-800 p-3 rounded-lg ${clickFn && isEnabled && 'cursor-pointer'} ${!isEnabled && 'opacity-50'} ${isSelected && 'ring-4 ring-sky-300'}`}
            onClick={() => clickFn && selectionKey && clickFn({ type: tokenType, key: selectionKey })}
        >
            {img ? <img src={img} className="w-12 h-12" alt="" /> : <p>{tokenType.toString()}</p>}
        </button>
    );
}
