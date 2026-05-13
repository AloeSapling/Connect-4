import { UserContext } from "@/lib/contexts"
import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom";

/** Auth object that holds the auth functions */
export default function Auth() { }
Auth.LoggedIn = LoggedIn;
Auth.UserDoesNotExist = UserDoesNotExist;

/** Authentication that checks if the user is logged in */
function LoggedIn() {
    const user = useContext(UserContext);

    if (user === null) { // User isn't logged in
        return <div>Błąd autentykacji</div>
    }

    return <Outlet />;
}

/** Authentication that makes sure no user exists that is tied to this browser session */
function UserDoesNotExist() {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user !== null) { // User already exists
            navigate('/lobbylist');
        }
    }, [])

    return <Outlet />;
}