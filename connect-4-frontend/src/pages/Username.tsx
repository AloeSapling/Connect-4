import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { createUser } from '@/lib/api';
import { langContext } from '@/lib/contexts';
import { type Z_TUsername, Z_Username } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

function Username() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const form = useForm<Z_TUsername>({
        resolver: zodResolver(Z_Username),
        defaultValues: {
            username: "",
        }
    });

    const createUser_m = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            navigate('/lobbylist');
            queryClient.invalidateQueries({
                refetchType: 'all',
                queryKey: ['user']
            });
        },
        onError: (err) => toast.error(err.message),
    })

    const onSubmit = (formData: Z_TUsername) => {
        createUser_m.mutate(formData.username);
    }

    const langCtx = useContext(langContext);

    if (!langCtx) return <p>Missing language context!</p>;

    const texts = langCtx.texts.username;

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
                bg-yellow-800/80
                text-white
                text-center
                justify-center
                content-center
                items-center-safe
                text-2xl
                rounded-md
                flex flex-col
                gap-y-6
                w-11/12 max-w-lg
                py-4
                px-2
            "
        >
            <FieldSet className="
                w-[85%] 
            ">
                <FieldLegend className="text-3xl! md:text-2xl! font-bold! underline justify-self-center-safe text-center w-full">{texts.chooseYourUsername}</FieldLegend>
                <FieldGroup>
                    <Controller
                        name="username"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field className="mt-3 inline-block bg-amber-900 w-full justify-self-center-safe rounded-md p-3"
                                data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name} className="text-base mr-[5%] mb-2">{texts.name}:</FieldLabel>
                                <Input
                                    className="w-full rounded-md bg-yellow-950 focus:bg-amber-950 p-3"
                                    {...field}
                                    id={field.name}
                                    type="text"
                                    aria-invalid={fieldState.invalid}
                                    placeholder={texts.hint}
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </FieldGroup>
            </FieldSet>
            <Button
                className="w-[40%] justify-self-center-safe bg-amber-900 h:bg-amber-950 cursor-pointer rounded-lg p-4 text-lg"
                type="submit"
            >
                {texts.ok}
            </Button>
        </form>
    );
}

export default Username;
