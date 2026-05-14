import { getLoggedInUserData } from "@/lib/api";
import { UserContext } from "@/lib/contexts";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

console.log('UserProvider render');
export function UserProvider({ children }: React.PropsWithChildren) {
    const { data } = useSuspenseQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {
                return await getLoggedInUserData();
                // eslint-disable-next-line
            } catch (err: any) {
                if (err.status === 401) return null;
                throw err;
            }
        },
        staleTime: Infinity,
        retry: (failureCount, error) => (error as AxiosError).status !== 401 && failureCount < 3,
    })

    return (
        <UserContext.Provider value={data?.user ?? null}>
            {children}
        </UserContext.Provider>
    )
}
