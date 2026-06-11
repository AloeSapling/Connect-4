import * as proto from '@/lib/proto.js';

export default function Player1Button({
    onSelect,
}: {
    onSelect: () => void;
}) {
    return (
        <button
            onClick={onSelect}
            className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg border-2 border-red-400 text-red-400 bg-transparent hover:border-red-300 hover:text-red-300 hover:bg-red-950/30 transition-colors w-[240px] h-[280px] cursor-pointer"
        >
            <span className="text-lg font-bold tracking-wide">PLAYER 1</span>
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
            <span className="text-sm">Play as player 1</span>
        </button>
    );
}
