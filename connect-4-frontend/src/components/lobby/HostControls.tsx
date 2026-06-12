import { useContext } from 'react';
import { langContext } from '@/lib/contexts';
import * as proto from '@/lib/proto.js';
import { Controller, useForm } from "react-hook-form";
import { changeLobbySettings, changePlayerID } from '@/lib/api';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Z_ChangePlayerID, type Z_TChangePlayerID } from "@/lib/zod";
import { zodResolver } from '@hookform/resolvers/zod';

export default function HostControls({ lobbyCode, membersData }: { lobbyCode: string, membersData: proto.models.IDetailedLobbyMemberData[] }) {
    const queryClient = useQueryClient();

    const form = useForm<Z_TChangePlayerID>({
        resolver: zodResolver(Z_ChangePlayerID),
        defaultValues: {
            user_id: 0,
            player_id: proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED
        }
    });

    const changePlayerID_m = useMutation({
        mutationFn: ({
            lobbyCode,
            uid,
            playerID,
        }: {
            lobbyCode: string;
            uid: number;
            playerID: proto.shared.PlayerIDs;
        }) => changePlayerID(lobbyCode, uid, playerID),

        onSuccess: () => {
            toast.success(`${texts.changePlayerIDToast}`);
            queryClient.invalidateQueries({
                queryKey: [lobbyCode],
            });
        },

        onError: (err) => toast.error(err.message)
    });

    const changeSettings_m = useMutation({
        mutationFn: changeLobbySettings,
        onSuccess: () => {
            toast.success(`${texts.changePlayerIDToast}`);
            queryClient.invalidateQueries({
                queryKey: [lobbyCode],
            });
        },

        onError: (err) => toast.error(err.message)
    })

    const onSubmit = (formData: Z_TChangePlayerID) => {
        changePlayerID_m.mutate({
            lobbyCode,
            uid: formData.user_id,
            playerID: formData.player_id,
        });
    }

    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    const texts = langCtx.texts.lobby;

    return (
        <div className="flex flex-col flex-1 gap-3 bg-yellow-900 p-3 rounded-lg">
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-2 content-center items-center"
            >
                {/* User select */}
                <Controller
                    name="user_id"
                    control={form.control}
                    render={({ field }) => (
                        <Select
                            value={String(field.value)}
                            onValueChange={(value) =>
                                field.onChange(Number(value))
                            }
                        >
                            <SelectTrigger className="bg-yellow-950 border-none">
                                <SelectValue placeholder={texts.selectUser} />
                            </SelectTrigger>

                            <SelectContent position="popper">
                                {membersData.map((member) => (
                                    <SelectItem
                                        key={member.userId}
                                        value={String(member.userId)}
                                    >
                                        {member.username}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />

                {/* PlayerID select */}
                <Controller
                    name="player_id"
                    control={form.control}
                    render={({ field }) => (
                        <Select
                            value={String(field.value)}
                            onValueChange={(value) =>
                                field.onChange(Number(value))
                            }
                        >
                            <SelectTrigger className="bg-yellow-950 border-none">
                                <SelectValue placeholder={texts.changePlayerIDFormHint} />
                            </SelectTrigger>

                            <SelectContent position="popper">
                                <SelectItem
                                    value={String(
                                        proto.shared.PlayerIDs.PLAYER_IDS_UNSPECIFIED
                                    )}
                                >
                                    {texts.changePlayerIDFormUnspecified}
                                </SelectItem>

                                <SelectItem
                                    value={String(
                                        proto.shared.PlayerIDs.PLAYER_IDS_PLAYER1
                                    )}
                                >
                                    {texts.changePlayerIDFormPlayer1}
                                </SelectItem>

                                <SelectItem
                                    value={String(
                                        proto.shared.PlayerIDs.PLAYER_IDS_PLAYER2
                                    )}
                                >
                                    {texts.changePlayerIDFormPlayer2}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />

                <Button
                    type="submit"
                    className="bg-amber-900 hover:bg-amber-950 border-2 border-amber-950 cursor-pointer rounded-lg"
                >
                    {texts.changePlayerIDFormButton}
                </Button>
            </form>
        </div>
    )
}
