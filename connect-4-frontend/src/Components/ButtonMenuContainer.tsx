import type { ReactNode } from "react";


const ButtonMenuContainer: React.FC<{
    buttons: ReactNode;
    display: ReactNode | undefined;
}> = ({ buttons, display }) => {
    return (
        <div id="buttonMenuContainer">
            <div id="buttonContainer">
                {buttons}
            </div>

            {display != undefined && 
            <>
                {display}
            </>
            }
        </div>
    );
}

export default ButtonMenuContainer;