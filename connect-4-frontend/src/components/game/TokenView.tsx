import type { models } from "@/lib/proto";
import { P_TokenQueueModes, type TPlayerIDs, type TTokenQueueModes, type TTokenTypes } from "@/lib/types";

export default function TokenView({ tokenQueueData, playerID }: {
    tokenQueueData: {
        mode: TTokenQueueModes,
        tokens: models.ICurrentTokens,
        decks: models.IDecks,
    },
    playerID: TPlayerIDs,
}) {
    return (
        <div>
            <div>
                <h2>Player 1 tokens</h2>
                <div>
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK && (
                        tokenQueueData.decks.player1?.map((tokenType) =>
                            <Token tokenType={tokenType ?? undefined} />
                        )
                    )}

                    {tokenQueueData.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED && (
                        <Token tokenType={tokenQueueData.tokens.player1 ?? undefined} />
                    )}
                </div>
            </div>
            <div>
                <h2>Player 2 tokens</h2>
                <div>
                    {tokenQueueData.mode === P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK && (
                        tokenQueueData.decks.player2?.map((tokenType) =>
                            <Token tokenType={tokenType ?? undefined} />
                        )
                    )}

                    {tokenQueueData.mode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_UNSPECIFIED && (
                        <Token tokenType={tokenQueueData.tokens.player2 ?? undefined} />
                    )}
                </div>
            </div>

        </div>
    )
}

function Token({ tokenType, clickFn }: { tokenType?: TTokenTypes, clickFn?: (tokenType: TTokenTypes) => void }) {
    if (!tokenType) return <p></p>

    return (
        <button onClick={() => clickFn && clickFn(tokenType)}>
            <p>{tokenType.toString()}</p>
        </button>
    )
}
