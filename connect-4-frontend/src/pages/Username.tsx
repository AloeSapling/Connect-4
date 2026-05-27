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
                bg-yellow-800
                text-white
                text-center
                justify-center
                content-center
                items-center-safe
                text-xl
                rounded-md
                flex flex-col
                gap-y-2
                absolute w-[300px] md:w-[350px]
                h-[150px] md:h-[200px]
                top-[50%] left-[50%]
                translate-x-[-50%] translate-y-[-50%]
            "
        >
            <FieldSet className="
                w-[70%]
            ">
                <FieldLegend className="text-2xl md:text-3xl justify-self-center-safe">{texts.chooseYourUsername}</FieldLegend>
                <FieldGroup>
                    <Controller
                        name="username"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field className="inline-block bg-amber-900 w-full justify-self-center-safe rounded-md p-[5px]"
                                data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name} className="mr-[5%]">{texts.name}:</FieldLabel>
                                <Input
                                    className="w-full rounded-md bg-yellow-950 focus:bg-amber-950"
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
                className="w-[30%] justify-self-center-safe bg-amber-900 h:bg-amber-950 cursor-pointer rounded-lg"
                type="submit"
            >
                OK
            </Button>
        </form>
    );
}

export default Username;
