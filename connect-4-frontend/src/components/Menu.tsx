import type { ReactNode } from "react";

const Menu: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    return (
        <div className="relative w-full flex-1 flex flex-col justify-center items-center overflow-y-auto">
            {children}
        </div>
    );
}

export default Menu;