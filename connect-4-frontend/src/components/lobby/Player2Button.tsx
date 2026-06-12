import { useContext } from 'react';
import { langContext } from '@/lib/contexts';

export default function Player2Button({
    onSelect,
}: {
    onSelect: () => void;
}) {
    const langCtx = useContext(langContext);
    const texts = langCtx?.texts.playerSelect;

    return (
        <button
            onClick={onSelect}
            className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg border-2 border-yellow-300 text-yellow-300 bg-transparent hover:border-yellow-200 hover:text-yellow-200 hover:bg-yellow-950/30 transition-colors w-[240px] h-[280px] cursor-pointer"
        >
            <span className="text-lg font-bold tracking-wide">{texts?.player2}</span>
            <svg
                className="size-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-sm">{texts?.playAsPlayer2}</span>
        </button>
    );
}
