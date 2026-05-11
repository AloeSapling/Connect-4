import { UserContext } from "@/lib/contexts"
import { useContext } from "react"
import { Outlet } from "react-router-dom";

/** Auth object that holds the auth functions */
export default function Auth() { }
Auth.LoggedIn = LoggedIn;

/** Authentication that checks if the user is logged in */
function LoggedIn() {
    const user = useContext(UserContext);

    if (user === null) { // User isn't logged in
        return <div>Błąd autentykacji</div>
    }

    return <Outlet />;
}
