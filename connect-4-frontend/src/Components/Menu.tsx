import type { ReactNode } from "react";
import gameBackground from "../assets/game_background.png";

const Menu: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <div className="my-0 mx-[10vw] w-[80vw] h-[45vw] relative bg-cover bg-center bg-no-repeat border-solid border-3 border-black"
            style={{ backgroundImage: `url(${gameBackground})` }}
        >
            {children}
        </div>
    );
}

export default Menu;