import { Link } from "react-router-dom";
import ButtonMenuContainer from "../Components/ButtonMenuContainer";

function GamePage() {
    return (
        <>
            <ButtonMenuContainer
            buttons = {
                <>
                    <Link to="/">
                        <button>
                            Home
                        </button>
                    </Link>
                </>
            }
            display = {
                <>
                    <canvas id='gameCanvas'>
                        Your browser does not support canvas. Sorry! :(
                    </canvas>
                </>
            }
            />
        </>
    );
}

export default GamePage;