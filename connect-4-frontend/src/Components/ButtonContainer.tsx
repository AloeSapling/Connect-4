import { useMenu } from "./MenuContext";
import { Menus } from "../scripts/types";

// Container for buttons to be displayed on top of `gameCanvas` based on the menu the user is on
const ButtonContainer: React.FC = () => {
    // Sets the context to be used for conditional rendering and changing `currentMenu` value
    const { currentMenu, setCurrentMenu } = useMenu();

    return (
        <aside id='buttonContainer'>
            {/* Example buttons */}
            {currentMenu === Menus.TitleScreen &&
            <>
                <p>Home page</p>
                <button onClick={() => setCurrentMenu(Menus.Settings)}>Settings</button>
                <button onClick={() => setCurrentMenu(Menus.GameLobby)}>Lobby</button>
            </>
            }

            {currentMenu === Menus.Settings &&
            <>
                <p>Settings page</p>
                <button onClick={() => setCurrentMenu(Menus.TitleScreen)}>Home</button>
            </>
            }

            {currentMenu === Menus.GameLobby &&
            <>
                <p>Lobby page</p>
                <button onClick={() => setCurrentMenu(Menus.TitleScreen)}>Home</button>
            </>
            }
        </aside>
    );
};

export default ButtonContainer;