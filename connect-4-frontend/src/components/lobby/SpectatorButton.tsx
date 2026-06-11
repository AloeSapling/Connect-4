import { Eye } from 'lucide-react';

export default function SpectatorButton({
    onSelect,
}: {
    onSelect: () => void;
}) {
    return (
        <button
            onClick={onSelect}
            className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg border-2 border-gray-300 text-gray-300 bg-transparent hover:border-gray-200 hover:text-gray-200 hover:bg-gray-800/30 transition-colors w-[240px] h-[280px] cursor-pointer"
        >
            <span className="text-lg font-bold tracking-wide">SPECTATOR</span>
            <Eye size={64} className="text-gray-300 group-hover:text-gray-200" />
            <span className="text-sm">Watch the game</span>
        </button>
    );
}
