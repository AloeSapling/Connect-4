import { useContext } from 'react';
import { langContext } from '@/lib/contexts';
import { Controller, useForm } from "react-hook-form";
import { changeLobbySettings } from '@/lib/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import type { models } from '@/lib/proto';
import { Z_ChangeLobbySettings, type Z_TChangeLobbySettings } from '@/lib/zod';
import { P_TokenQueueModes, P_TokenTypes } from '@/lib/types';

const SPECIAL_TOKEN_TYPES = [
    P_TokenTypes.TOKEN_TYPES_NEGATIVE,
    P_TokenTypes.TOKEN_TYPES_AURA,
    P_TokenTypes.TOKEN_TYPES_BOMB,
    P_TokenTypes.TOKEN_TYPES_SPLIT,
    P_TokenTypes.TOKEN_TYPES_FREEZE,
    P_TokenTypes.TOKEN_TYPES_BURN,
    P_TokenTypes.TOKEN_TYPES_REVERSE,
];

export default function GameSettings({ lobbyCode, settings }: { lobbyCode: string, settings: models.ILobbySettings }) {
    const queryClient = useQueryClient();

    const form = useForm<Z_TChangeLobbySettings>({
        resolver: zodResolver(Z_ChangeLobbySettings),
        defaultValues: {
            every: settings.every ?? undefined,
            allowed_tokens: settings.allowedTokens ?? [],
            special_gameMode: settings.specialGamemode ?? false,
            token_queue_mode: settings.tokenQueueMode ?? P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK,
        }
    });

    const specialGameMode = form.watch('special_gameMode');
    const tokenQueueMode = form.watch('token_queue_mode');

    const changeSettings_m = useMutation({
        mutationFn: changeLobbySettings,
        onSuccess: () => {
            toast.success("Settings changed!");
            queryClient.invalidateQueries({
                queryKey: [lobbyCode],
            });
        },
        onError: (err) => toast.error(err.message)
    });

    const onSubmit = (formData: Z_TChangeLobbySettings) => {
        changeSettings_m.mutate({
            lobbyCode,
            settings: {
                specialGamemode: formData.special_gameMode,
                tokenQueueMode: formData.token_queue_mode,
                every: formData.every,
                allowedTokens: formData.allowed_tokens,
            }
        });
    };

    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    return (
        <div className="flex flex-col flex-1 gap-3 bg-yellow-900 p-3 rounded-lg">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 content-center items-center"
            >
                {/* Special game mode switch */}
                <div className="flex items-center gap-2 w-full">
                    <Switch
                        checked={specialGameMode}
                        onCheckedChange={(checked) => form.setValue('special_gameMode', checked)}
                    />
                    <Label>Special Game Mode</Label>
                </div>

                {/* Token queue mode select */}
                <Controller
                    name="token_queue_mode"
                    control={form.control}
                    render={({ field }) => (
                        <Select
                            value={String(field.value)}
                            onValueChange={(value) =>
                                field.onChange(Number(value))
                            }
                            disabled={!specialGameMode}
                        >
                            <SelectTrigger className="bg-yellow-950 border-none">
                                <SelectValue placeholder="Token queue mode" />
                            </SelectTrigger>

                            <SelectContent position="popper">
                                <SelectItem
                                    value={String(
                                        P_TokenQueueModes.TOKEN_QUEUE_MODES_FULL_RANDOM
                                    )}
                                >
                                    Full Random
                                </SelectItem>

                                <SelectItem
                                    value={String(
                                        P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY
                                    )}
                                >
                                    Special Every
                                </SelectItem>

                                <SelectItem
                                    value={String(
                                        P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK
                                    )}
                                >
                                    Deck
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />

                {/* Every input */}
                <Controller
                    name="every"
                    control={form.control}
                    render={({ field }) => (
                        <Input
                            type="number"
                            min={1}
                            max={15}
                            value={field.value ?? ''}
                            onChange={(e) =>
                                field.onChange(
                                    e.target.value ? Number(e.target.value) : undefined
                                )
                            }
                            disabled={
                                !specialGameMode ||
                                tokenQueueMode !==
                                    P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY
                            }
                            placeholder="Every"
                        />
                    )}
                />

                {/* Token type switches */}
                <div className="flex flex-col gap-2 w-full">
                    {SPECIAL_TOKEN_TYPES.map((tokenType) => (
                        <div key={tokenType} className="flex items-center gap-2">
                            <Switch
                                checked={
                                    (form.watch('allowed_tokens') ?? []).includes(
                                        tokenType
                                    )
                                }
                                onCheckedChange={(checked) => {
                                    const current =
                                        form.getValues('allowed_tokens') ?? [];
                                    if (checked) {
                                        form.setValue('allowed_tokens', [
                                            ...current,
                                            tokenType,
                                        ]);
                                    } else {
                                        form.setValue(
                                            'allowed_tokens',
                                            current.filter(
                                                (v) => v !== tokenType
                                            )
                                        );
                                    }
                                }}
                                disabled={!specialGameMode}
                            />
                            <Label>
                                {P_TokenTypes[tokenType]
                                    .replace('TOKEN_TYPES_', '')
                                    .toLowerCase()
                                    .replace(/^\w/, (c) => c.toUpperCase())}
                            </Label>
                        </div>
                    ))}
                </div>

                <Button
                    type="submit"
                    className="bg-amber-900 hover:bg-amber-950 border-2 border-amber-950 cursor-pointer rounded-lg"
                >
                    Save Settings
                </Button>
            </form>
        </div>
    )
}
