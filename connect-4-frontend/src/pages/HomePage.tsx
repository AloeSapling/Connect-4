import { Link } from 'react-router-dom';
import ButtonMenuContainer from '../Components/ButtonMenuContainer';

function HomePage() {
    return (
        <>
            <ButtonMenuContainer
            buttons = {
                <>
                    <Link to="/settings">
                        <button>
                            Settings
                        </button>
                    </Link>

                    <Link to="/game">
                        <button>
                            Game
                        </button>
                    </Link>
                
                    <Link to="/sigma">
                        <button>
                            Invalid Path
                        </button>
                    </Link>
                </>
            }
            display
            />       
        </>
    );
}

export default HomePage;