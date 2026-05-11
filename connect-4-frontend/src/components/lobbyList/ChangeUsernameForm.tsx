import { changeUsername } from "@/lib/api";
import { Z_Username, type Z_TUsername } from "@/lib/zod";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Field, FieldError } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { UserContext } from "@/lib/contexts";

export default function ChangeForm() {
    const queryClient = useQueryClient();

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
            toast.success("success");
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

    const user = useContext(UserContext);

    return formOpen ? (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                    < Field data-invalid={fieldState.invalid}>
                        <Input
                            {...field}
                            id={field.name}
                            type="text"
                            aria-invalid={fieldState.invalid}
                        />
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )} />
            <Button type="submit">Zatwierdź</Button>
        </form >
    )
        :
        (
            <div className="flex flex-col gap-2">
                <p className="text-center">
                    Current Nick: {user?.username || ""}
                </p>
                <button className="bg-amber-900 hover:bg-amber-950 rounded p-2 font-semibold cursor-pointer"
                    onClick={() => {
                        form.reset();
                        setFormOpen(true);
                    }}
                >
                    Zmień nazwę użytkownika
                </button>
            </div>
        )
}
