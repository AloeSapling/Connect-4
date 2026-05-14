import { createLobby } from "@/lib/api";
import { Z_LobbyName, type Z_TLobbyName } from "@/lib/zod";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Field, FieldError } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

export default function ChangeForm() {
    const navigate = useNavigate();

    const [formOpen, setFormOpen] = useState(false);

    const form = useForm<Z_TLobbyName>({
        resolver: zodResolver(Z_LobbyName),
        defaultValues: {
            lobby_name: "", // change so that empty values are allowed (to set default "[username]'s lobby")
        }
    });
    const createLobby_m = useMutation({
        mutationFn: createLobby,
        onSuccess: (response) => {
            toast.success("Lobby created successfully! Joining lobby...");
            setFormOpen(false);
            navigate(`/lobby/${response.code}`);
        },
        onError: (err) => toast.error(err.message)
    });
    // const joinLobby_m = useMutation({
    //     mutationFn: joinLobby,
    //     onSuccess: (_data, code) => {
            // setFormOpen(false);
            // navigate(`/lobby/${code}`);
    //     },
    //     onError: (err) => toast.error(err.message)
    // });

    const onSubmit = (formData: Z_TLobbyName) =>
        createLobby_m.mutate(formData.lobby_name);

    const onCancel = () =>
        setFormOpen(false);

    return formOpen ? (
        <form onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-1">
            <Controller
                name="lobby_name"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <Input
                            {...field}
                            id={field.name}
                            type="text"
                            aria-invalid={fieldState.invalid}
                            className="w-full rounded-md bg-yellow-950 focus:bg-amber-950"
                            placeholder="lobby name"
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            <div className="flex flex-row justify-between">
                <Button type="submit"
                    className="bg-amber-900 hover:bg-amber-950 rounded-lg p-3 font-semibold cursor-pointer">
                    OK
                </Button>
                <Button onClick={onCancel}
                    className="bg-amber-900 hover:bg-amber-950 rounded-lg p-3 font-semibold cursor-pointer">
                    Cancel
                </Button>
            </div>
        </form>
    )
        :
        (
            <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
                onClick={() => {
                    form.reset();
                    setFormOpen(true);
                }}
            >
                Create Lobby
            </Button>
        )
}