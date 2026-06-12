import { useContext, useEffect } from 'react';
import { langContext } from '@/lib/contexts';
import * as proto from '@/lib/proto.js';
import { Controller, useForm } from 'react-hook-form';
import { changeLobbySettings } from '@/lib/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { Z_ChangeLobbySettings, type Z_TChangeLobbySettings } from '@/lib/zod';
import { P_TokenQueueModes, P_TokenTypes } from '@/lib/types';
import type { models } from '@/lib/proto';

const SPECIAL_TOKEN_TYPES = [
    P_TokenTypes.TOKEN_TYPES_NEGATIVE,
    P_TokenTypes.TOKEN_TYPES_AURA,
    P_TokenTypes.TOKEN_TYPES_BOMB,
    P_TokenTypes.TOKEN_TYPES_FREEZE,
    P_TokenTypes.TOKEN_TYPES_BURN,
    P_TokenTypes.TOKEN_TYPES_REVERSE,
];

export default function LobbySettingsCard({
    lobbyCode,
    settings,
    isHost,
}: {
    lobbyCode: string;
    membersData: proto.models.IDetailedLobbyMemberData[];
    settings: models.ILobbySettings;
    isHost: boolean;
}) {
    const queryClient = useQueryClient();
    const langCtx = useContext(langContext);
    if (!langCtx) return <p>Missing language context!</p>;
    const settingsTexts = langCtx.texts.lobbySettings;

    const settingsForm = useForm<Z_TChangeLobbySettings>({
        resolver: zodResolver(Z_ChangeLobbySettings),
        defaultValues: {
            turn_time: settings.turnTime ?? undefined,
            special_token_chance: settings.specialTokenChance ?? undefined,
            every: settings.every ?? undefined,
            allowed_tokens: settings.allowedTokens ?? [],
            special_gameMode: settings.specialGamemode ?? false,
            token_queue_mode: settings.tokenQueueMode ?? P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK,
        },
    });

    useEffect(() => {
        settingsForm.reset({
            turn_time: settings.turnTime ?? undefined,
            special_token_chance: settings.specialTokenChance ?? undefined,
            every: settings.every ?? undefined,
            allowed_tokens: settings.allowedTokens ?? [],
            special_gameMode: settings.specialGamemode ?? false,
            token_queue_mode: settings.tokenQueueMode ?? P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK,
        });
    }, [settings, settingsForm]);

    const specialGameMode = settingsForm.watch('special_gameMode');
    const tokenQueueMode = settingsForm.watch('token_queue_mode');

    const changeSettings_m = useMutation({
        mutationFn: changeLobbySettings,
        onSuccess: () => {
            toast.success(settingsTexts.settingsChanged);
            queryClient.invalidateQueries({ queryKey: [lobbyCode] });
        },
        onError: (err) => toast.error(err.message),
    });

    const onSettingsSubmit = (formData: Z_TChangeLobbySettings) => {
        changeSettings_m.mutate({
            lobbyCode,
            settings: {
                specialGamemode: formData.special_gameMode,
                turnTime: formData.turn_time,
                specialTokenChance: formData.special_token_chance,
                tokenQueueMode: formData.token_queue_mode,
                every: formData.every,
                allowedTokens: formData.allowed_tokens,
            },
        });
    };

    return (
        <div className="bg-yellow-900 flex flex-col p-3 rounded-lg min-h-80 w-72">
            {/* Connect-4+ Gamemode */}
            <p className="font-semibold mb-2 text-xl">{settingsTexts.heading}</p>

            <form onSubmit={settingsForm.handleSubmit(onSettingsSubmit)} className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Label className="text-md">{settingsTexts.enableExtraGamemode}</Label>
                    <Switch
                        checked={specialGameMode}
                        onCheckedChange={(checked) => settingsForm.setValue('special_gameMode', checked)}
                        disabled={!isHost}
                    />
                </div>

                <Controller
                    name="turn_time"
                    control={settingsForm.control}
                    render={({ field }) => (
                        <div className="flex items-center gap-2">
                            <Label className="text-md">{settingsTexts.turnTime}</Label>
                            <Input
                                type="number"
                                min={10}
                                max={600}
                                value={field.value ?? ''}
                                onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                                disabled={!isHost}
                                className="w-20"
                            />
                        </div>
                    )}
                />

                <Controller
                    name="special_token_chance"
                    control={settingsForm.control}
                    render={({ field }) => (
                        <div className="flex items-center gap-2">
                            <Label className="text-md">{settingsTexts.specialTokenChance}</Label>
                            <Input
                                type="number"
                                min={0}
                                max={100}
                                value={field.value ?? ''}
                                onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                                disabled={!isHost}
                                className="w-20"
                            />
                        </div>
                    )}
                />

                <div className="flex flex-row gap-2 items-end">
                    <Controller
                        name="token_queue_mode"
                        control={settingsForm.control}
                        render={({ field }) => (
                            <Select
                                value={String(field.value)}
                                onValueChange={(value) => field.onChange(Number(value))}
                                disabled={!isHost || !specialGameMode}
                            >
                                <SelectTrigger className="bg-yellow-950 border-none flex-1">
                                    <SelectValue placeholder={settingsTexts.tokenQueueMode} />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value={String(P_TokenQueueModes.TOKEN_QUEUE_MODES_FULL_RANDOM)}>
                                        {settingsTexts.fullRandom}
                                    </SelectItem>
                                    <SelectItem value={String(P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY)}>
                                        {settingsTexts.every}
                                    </SelectItem>
                                    <SelectItem value={String(P_TokenQueueModes.TOKEN_QUEUE_MODES_DECK)}>{settingsTexts.deck}</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    />

                    <Controller
                        name="every"
                        control={settingsForm.control}
                        render={({ field }) => (
                            <Input
                                type="number"
                                min={1}
                                max={15}
                                value={field.value ?? ''}
                                onChange={(e) => field.onChange(e.target.value ? Number(e.target.value) : undefined)}
                                disabled={
                                    !isHost ||
                                    !specialGameMode ||
                                    tokenQueueMode !== P_TokenQueueModes.TOKEN_QUEUE_MODES_SPECIAL_EVERY
                                }
                                placeholder={settingsTexts.every}
                                className="w-25 placeholder:text-sky-100"
                            />
                        )}
                    />
                </div>

                <details className="mt-1">
                    <summary className="cursor-pointer text-lg select-none">{settingsTexts.allowedTokens}</summary>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 items-end mt-2">
                        {SPECIAL_TOKEN_TYPES.map((tokenType) => (
                            <div key={tokenType} className="w-full flex justify-between items-center gap-1">
                                <Label className="text-md">
                                    {P_TokenTypes[tokenType]
                                        .replace('TOKEN_TYPES_', '')
                                        .toLowerCase()
                                        .replace(/^\w/, (c) => c.toUpperCase()) + ':'}
                                </Label>
                                <Switch
                                    checked={(settingsForm.watch('allowed_tokens') ?? []).includes(tokenType)}
                                    onCheckedChange={(checked) => {
                                        const current = settingsForm.getValues('allowed_tokens') ?? [];
                                        if (checked) {
                                            settingsForm.setValue('allowed_tokens', [...current, tokenType]);
                                        } else {
                                            settingsForm.setValue(
                                                'allowed_tokens',
                                                current.filter((v) => v !== tokenType)
                                            );
                                        }
                                    }}
                                    disabled={!isHost || !specialGameMode}
                                />
                            </div>
                        ))}
                    </div>
                </details>

                <div className="flex-1"></div>

                <Button
                    type="submit"
                    disabled={!isHost}
                    className="bg-amber-900 hover:bg-amber-950 border-2 border-amber-950 cursor-pointer rounded-lg disabled:opacity-50 mt-1"
                >
                    {settingsTexts.saveSettings}
                </Button>
            </form>
        </div>
    );
}
