import { changeUsername } from "@/lib/api";
import { Z_Username, type Z_TUsername } from "@/lib/zod";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { langContext } from '@/lib/contexts';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, FieldError } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from "@/lib/contexts";

export default function ChangeForm() {
    const queryClient = useQueryClient();
    const user = useContext(UserContext);
    
    const [formOpen, setFormOpen] = useState(false);

    const form = useForm<Z_TUsername>({
        resolver: zodResolver(Z_Username),
        defaultValues: {
            username: "",
        }
    });
    const changeUsername_m = useMutation({
        mutationFn: changeUsername,
        onSuccess: () => {
            toast.success(`${texts.usernameToast}`);
            queryClient.invalidateQueries({
                refetchType: 'all',
                queryKey: ['user']
            });
            setFormOpen(false);
        },
        onError: (err) => toast.error(err.message)
    })

    const onSubmit = (formData: Z_TUsername) =>
        changeUsername_m.mutate(formData.username);

    const onCancel = () =>
        setFormOpen(false);

    const langCtx = useContext(langContext);
            
    if (!langCtx) return <p>Missing language context!</p>;
            
    const texts = langCtx.texts.lobbyList;

    return formOpen ? (
        <form onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-1">
            <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <Input
                            {...field}
                            id={field.name}
                            type="text"
                            aria-invalid={fieldState.invalid}
                            className="w-full rounded-md bg-yellow-950 focus:bg-amber-950"
                            placeholder={texts.usernameFormHint}
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
                    {texts.formCancel}
                </Button>
            </div>
        </form>
    )
        :
        (
            <div className="flex flex-col gap-2">
                <p className="text-center">
                    {texts.usernameFormText} {user?.username || ""}
                </p>
                <Button className="bg-amber-900 hover:bg-amber-950 rounded-lg p-5 font-semibold cursor-pointer"
                    onClick={() => {
                        form.reset();
                        setFormOpen(true);
                    }}
                >
                    {texts.usernameFormButton}
                </Button>
            </div>
        )
}
