import { joinLobby } from "@/lib/api";
import { Z_LobbyCode, type Z_TLobbyCode } from "@/lib/zod";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { langContext } from '@/lib/contexts';
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

    const form = useForm<Z_TLobbyCode>({
        resolver: zodResolver(Z_LobbyCode),
        defaultValues: {
            lobby_code: "",
        }
    });
    
    const joinLobby_m = useMutation({
        mutationFn: joinLobby,
        onSuccess: (_data, code) => {
            toast.success(`${texts.lobbyToast}`);
            setFormOpen(false);
            navigate(`/lobby/${code}`);
        },
        onError: (err) => toast.error(err.message)
    });

    const onSubmit = (formData: Z_TLobbyCode) =>
        joinLobby_m.mutate(formData.lobby_code);

    const onCancel = () =>
        setFormOpen(false);

    const langCtx = useContext(langContext);
    
    if (!langCtx) return <p>Missing language context!</p>;
    
    const texts = langCtx.texts.lobbyList;

    return formOpen ? (
        <form onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-1">
            <Controller
                name="lobby_code"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <Input
                            {...field}
                            id={field.name}
                            type="text"
                            aria-invalid={fieldState.invalid}
                            className="w-full rounded-md bg-yellow-950 focus:bg-amber-950"
                            placeholder={texts.lobbyFormHint}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            <div className="flex flex-row justify-between">
                <Button type="submit"
                    className="bg-amber-900 hover:bg-amber-950 rounded-lg p-3 font-semibold cursor-pointer">
                    {texts.formOk}
                </Button>
                <Button onClick={onCancel}
                    className="bg-amber-900 hover:bg-amber-950 rounded-lg p-3 font-semibold cursor-pointer">
                    {texts.formCancel}
                </Button>
            </div>
        </form>
    ) : (
        <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
            onClick={() => {
                form.reset();
                setFormOpen(true);
            }}
        >
            {texts.lobbyFormButton}
        </Button>
    )
}